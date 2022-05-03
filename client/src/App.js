import React, { useEffect } from "react";
import Context from "./context";
import Loader from "./Loader";
import Categories from "./components/Categories";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./Todo/AddItem"));
      }, 1000);
    })
);

function App() {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    document.title = "FILMOTEEKA";
  }, []);

  return (
    <Context.Provider value={{ changeCategories }}>
      <div className="wrapper">
        <h1>React test project</h1>

        {categories.length ? (
          <Categories categories={categories} />
        ) : (
          <p>No items</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
