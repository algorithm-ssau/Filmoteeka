import React, { useContext } from "react";
import CategoriesContext from "./categoriesContext.js";
import "./Category.css";

function Category({ category }) {
  const { selectFunction } = useContext(CategoriesContext);
  return (
    <li>
      <button
        className={
          category.selected ? "activeSelectingButton" : "selectingButton"
        }
        onClick={() => selectFunction(category.id)}
      >
        {category.name}
      </button>
    </li>
  );
}

export default Category;
