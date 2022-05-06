import React, { useEffect } from "react";
import CategoriesList from "./components/categories/CategoriesList.js"
import Context from "./components/categories/categoriesContext.js";
import LoginModal from "./components/Login/LoginModal.js"
import background_image from "./background_video.gif"

function App() {
  const [categories, setCategories] = React.useState([
    {id: 0, name: "Драмма", selected: true},
    {id: 1, name: "Комедия", selected: false},
    {id: 2, name: "Детективы", selected: false},
    {id: 3, name: "Ужасы", selected: false},
  ])

  useEffect(() => {
    document.title = "FILMOTEEKA"
    document.body.style.backgroundImage = `url(${background_image})`;
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
        <div  class="top-bar">
          <h1 class="mainHeader">FILMOTEEKA</h1>
          <LoginModal/>
        </div>
        
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
