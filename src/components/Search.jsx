function Search({selectedTag, searchTerm, setSelectedTag, setSearchTerm}) {
  const tags = [
    { id: 1, name: "All", apiTag:"" },
    { id: 2, name: "AI", apiTag:"ai" },
    { id: 3, name: "React", apiTag:"react" },
    { id: 4, name: "WordPress", apiTag:"wordpress" },
    { id: 5, name: "Python", apiTag:"python" },
    { id: 6, name: "Agents", apiTag:"agents" },
  ];


  return (
    <div className="max-w-4xl mx-auto mt-8">
      <input
        type="text"
        placeholder="Search DEV articles..."
        aria-label="Search DEV articles"
        value={searchTerm}
        onChange={(e) => {
          setSelectedTag("");
          setSearchTerm(e.target.value);
        }}
        className="w-full rounded-[99px] border border-gray-800 bg-transparent
        px-6 py-4 text-sm text-white outline-none
        shadow-[0_4px_20px_rgba(255,255,255,0.3)]
        transition-all duration-300
        placeholder:text-gray-500
        focus:border-gray-500
        focus:shadow-[0_4px_25px_rgba(255,255,255,0.15)]"
      />

      <ul className="mt-5 flex items-center justify-center gap-10">
        {tags.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setSearchTerm("");
              setSelectedTag(item.apiTag);
            }}
            className={`cursor-pointer rounded-full border px-5 py-2 text-sm
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-900
              hover:shadow-[0_4px_15px_rgba(255,255,255,0.2)]
              ${
                selectedTag === item.apiTag
                  ? "border-gray-500 bg-white text-gray-900 shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
                  : "border-gray-800 text-white"
              }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
