import React, { useEffect } from "react";
import CategoriesList from "./components/CategoriesList.js"
import Context from "./context.js";

function App() {
  const [categories, setCategories] = React.useState([
    {id: 0, name: "Драмма", selected: true},
    {id: 1, name: "Комедия", selected: false},
    {id: 2, name: "Детективы", selected: false},
    {id: 3, name: "Ужасы", selected: false},
  ])

  useEffect(() => {
    document.title = "FILMOTEEKA"
  }, [])

  function selectCategory(id) {
    setCategories(
      categories.map(category => {
        category.selected = category.id === id
        return category
      })
    )    
  }

  return (
    <Context.Provider value={ {selectFunction: selectCategory} }>
      <div className="wrapper">
        <h1>FILMOTEEKA</h1>

        {categories.length ? (
          <CategoriesList categories={categories} />
        ) : (
          <p>No items</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
