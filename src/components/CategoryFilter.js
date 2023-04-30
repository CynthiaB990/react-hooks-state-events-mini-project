import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {

  const categoryButton = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : "";
    return (
      <button
        key={category}
        className={className}
        onClick={(event) => onSelectCategory(category, event)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
