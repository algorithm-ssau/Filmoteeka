import React from "react";
import Category from "./components/Category.js";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function Categories(props) {
  return (
    <ul style={styles.ul}>
      {props.items.map((item, index) => {
        return (
          <Category
            item={item}
            key={item.id}
            index={index}
            onItemCompleted={props.onToggle}
          />
        );
      })}
    </ul>
  );
}
Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default Categories;
