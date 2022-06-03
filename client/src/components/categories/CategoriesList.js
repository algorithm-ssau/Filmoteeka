import React from "react";
import Category from "./Category.js";

function CategoriesList(props) {
  return (
    <ul className="categoriesButtonsWrapper">
      {props.categories.map((category) => {
        return <Category category={category} key={category.id} />;
      })}
    </ul>
  );
}

export default CategoriesList;
