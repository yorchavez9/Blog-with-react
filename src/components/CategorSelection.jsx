const CategorSelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
    return (
      <div className="px-4 mb-8 lg:space-x-6 flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
        <button onClick={() => onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}>
          All
        </button>
        {categories.map((category) => (
          <button
            onClick={() => onSelectCategory(category)}
            className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategorSelection;
  