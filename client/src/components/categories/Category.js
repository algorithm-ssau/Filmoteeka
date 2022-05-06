import React, { useContext } from "react";
import Context from "./categoriesContext.js";

function Category({category}) {
  const { selectFunction } = useContext(Context);
  return (
    <li>
      <button onClick={() => selectFunction(category.id)}>
        {category.name} {category.selected ? "(selected)" : ""}
      </button>
    </li>
  );
}


export default Category;
