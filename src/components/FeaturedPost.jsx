import { useEffect, useState } from "react";

function FeaturedPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedPost = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://dev.to/api/articles?top=30&per_page=30"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch featured post");
        }

        const articles = await response.json();

        if (articles.length > 0) {
          const randomPost =
            articles[Math.floor(Math.random() * articles.length)];

          setPost(randomPost);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPost();
  }, []);

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto mt-8 px-4 sm:mt-12 sm:px-5">
        <div className="h-80 animate-pulse rounded-[32px] border border-gray-800 bg-gray-950" />
      </section>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <section className="max-w-6xl mx-auto mt-8 px-4 sm:mt-12 sm:px-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-medium uppercase tracking-widest text-gray-500">
          Featured Post
        </h2>

        <span className="rounded-full border border-gray-800 px-4 py-1.5 text-xs text-gray-500">
          Popular
        </span>
      </div>

      <article className="group overflow-hidden rounded-[32px] border border-gray-800 bg-gray-950 transition-all duration-500 hover:-translate-y-2 hover:border-gray-600 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)]">

        <div className="grid md:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={
                post.cover_image ||
                "https://placehold.co/1000x700?text=Inkora"
              }
              alt={post.title}
              className="h-52 w-full sm:h-72 md:h-full md:min-h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-col justify-center p-5 sm:p-8 lg:p-12">

            <div className="flex items-center gap-3">
              <img
                src={post.user.profile_image}
                alt={post.user.name}
                className="h-10 w-10 shrink-0 rounded-full"
              />

              <div>
                <p className="text-sm font-medium text-white">
                  {post.user.name}
                </p>

                <p className="text-xs text-gray-500">
                  {post.reading_time_minutes} min read
                </p>
              </div>
            </div>

            <h1 className="mt-6 text-2xl sm:text-3xl font-bold leading-tight text-white md:text-4xl">
              {post.title}
            </h1>

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-400">
              {post.description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tag_list?.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-500"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Bottom */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

              <span className="text-xs text-gray-600">
                ❤️ {post.public_reactions_count} reactions
              </span>

              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-gray-900"
              >
                Read Article →
              </a>

            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default FeaturedPost;