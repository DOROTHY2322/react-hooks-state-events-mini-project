import React from "react";

function CategoryFilter({ categories, onClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button key={index} onClick={() => onClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
