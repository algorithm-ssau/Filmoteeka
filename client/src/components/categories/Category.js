import React, { useContext } from "react";
import Context from "./categoriesContext.js";
import './Category.css'

function Category({category}) {
  const { selectFunction } = useContext(Context);
  return (
    <li>
      <p>Средняя оценка категории: {category.averageRaiting}</p>
      <button className={category.selected ? "activeSelectingButton" : "selectingButton"} 
        onClick={() => selectFunction(category.id)}>
        {category.name}
      </button>
    </li>
  );
}

export default Category;
