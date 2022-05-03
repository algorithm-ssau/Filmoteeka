import React, { useContext } from "react";
import Context from "../context";
import PropTypes from "prop-types";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "0.5rem",
  },
  input: { marginRight: "1rem" },
};

function Category({ item, index, onItemCompleted }) {
  const classes = [];
  const { removeItem } = useContext(Context);
  if (item.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          checked={item.completed}
          type="checkbox"
          style={styles.input}
          onChange={() => onItemCompleted(item.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {item.title}
      </span>
      <button className="rm" onClick={() => removeItem(item.id)}>
        &times;
      </button>
    </li>
  );
}

Category.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
  onItemCompleted: PropTypes.func.isRequired,
};

export default Category;
