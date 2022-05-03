import React from "react";
import Category from "./Category.js";

function Categories(props) {
  return (
    <ul>
      {props.categories.map(category => {
        return  <Category category={category} key={category.id}/>
      })}
    </ul>
  )
}

export default Categories;
