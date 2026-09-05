import { useState, useEffect } from "react";

function Blogs({ selectedTag = "", searchTerm = "" }) {
  return <ArticleResults key={JSON.stringify([selectedTag, searchTerm.trim()])} selectedTag={selectedTag} searchTerm={searchTerm.trim()} />;
}

function ArticleResults({ selectedTag, searchTerm }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hasNextPage, setHasNextPage] = useState(false);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const fetchArticles = async () => {
      setLoading(true);
      setError("");

      try {
        const url = new URL(searchTerm
          ? "https://dev.to/api/articles/search"
          : "https://dev.to/api/articles");
        url.searchParams.set("page", page);
        url.searchParams.set("per_page", "6");
        if (searchTerm) url.searchParams.set("q", searchTerm);
        else if (selectedTag) url.searchParams.set("tag", selectedTag);
        const response = await fetch(url, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.forem.api-v1+json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        if (controller.signal.aborted) return;
        setArticles(data);
        setHasNextPage(data.length === 6);
      } catch (error) {
        if (controller.signal.aborted) return;
        setError(error.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    const timer = setTimeout(fetchArticles, searchTerm ? 300 : 0);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [page, selectedTag, searchTerm, retry]);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-5">
      {/* Cards */}
      {loading ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : error ? (
        <div className="text-center text-gray-400" role="alert">
          <p>Unable to load articles. Please try again.</p>
          <button className="mt-3 underline" onClick={() => setRetry((value) => value + 1)}>Retry</button>
        </div>
      ) : articles.length === 0 ? (
        <p className="text-center text-gray-400" role="status">
          {page === 1 ? "No articles found. Try another search or tag." : "No more articles. Return to the previous page."}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-3xl border border-gray-800
              bg-gray-950 transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:border-gray-600
              hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={
                    article.cover_image ||
                    "https://placehold.co/800x500?text=Inkora"
                  }
                  alt={article.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <img
                    src={article.user.profile_image}
                    alt={article.user.name}
                    className="h-9 w-9 rounded-full"
                  />

                  <div>
                    <p className="text-sm font-medium text-white">
                      {article.user.name}
                    </p>

                    <p className="text-xs text-gray-500">
                      {article.reading_time_minutes} min read
                    </p>
                  </div>
                </div>

                <h2 className="mt-5 line-clamp-2 text-xl font-semibold text-white">
                  {article.title}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                  {article.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {article.tag_list?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full border border-gray-700 px-5 py-2.5
                  text-sm font-medium text-white transition-all duration-300
                  hover:-translate-y-1 hover:bg-white hover:text-gray-900"
                >
                  Read Article →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 my-12">
        <button
          onClick={() => { setLoading(true); setPage((prev) => prev - 1); }}
          disabled={page === 1 || loading}
          className="rounded-full border border-gray-800 px-5 py-2.5
          text-sm text-white transition-all duration-300
          hover:-translate-y-1 hover:bg-white hover:text-gray-900
          disabled:cursor-not-allowed disabled:opacity-30
          disabled:hover:translate-y-0"
        >
          ← Previous
        </button>

        <span className="rounded-full border border-gray-800 px-5 py-2.5 text-sm text-gray-400">
          Page {page}
        </span>

        <button
          onClick={() => { setLoading(true); setPage((prev) => prev + 1); }}
          disabled={loading || Boolean(error) || !hasNextPage}
          className="rounded-full border border-gray-800 px-5 py-2.5
          text-sm text-white transition-all duration-300
          hover:-translate-y-1 hover:bg-white hover:text-gray-900
          disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Blogs;
