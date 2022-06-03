import { React, useState } from "react";
import { useHttp } from "../hooks/http.hook.js";
import { useAuth } from "../hooks/auth.hook.js";
import { AuthContext } from "../AuthContext.js";

import NavBar from "../components/navbar/NavBar.js";
import CategoriesContext from "../components/categories/categoriesContext.js";
import CategoriesList from "../components/categories/CategoriesList.js";
import FilmPreview from "../components/filmPreview/FilmPreview.js";
import { Loader } from "../components/loader/Loader.js";

import "./MainPage.css";

export const MainPage = () => {
  const { login, logout, token, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const { request } = useHttp();

  const [categories, setCategories] = useState([
    { id: 1, name: "Комедия", selected: false },
    { id: 2, name: "Боевик", selected: false },
    { id: 3, name: "Фантастика", selected: false },
    { id: 4, name: "Детектив", selected: false },
    { id: 5, name: "Приключения", selected: false },
    { id: 6, name: "Ужасы", selected: false },
    { id: 7, name: "Научная Фантастика", selected: false },
    { id: 8, name: "Драма", selected: false },
    { id: 9, name: "Мультфильм", selected: false },
    { id: 10, name: "Триллер", selected: false },
    { id: 11, name: "История", selected: false },
    { id: 12, name: "Вестерн", selected: false },
  ]);

  const [films, setFilms] = useState([]);

  const getFilms = async (genre) => {
    const data = await request("/api/films/byGenre", "POST", {
      genre: genre,
    });

    setFilms(JSON.parse(data.films));
  };

  function selectCategory(id) {
    setCategories(
      categories.map((category) => {
        if (category.id === id) {
          category.selected = true;
          getFilms(category.name);
        } else {
          category.selected = false;
        }
        return category;
      })
    );
  }

  if (!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <CategoriesContext.Provider value={{ selectFunction: selectCategory }}>
        <>
          <NavBar />

          <div className="categoriesWrapper">
            {categories.length ? (
              <CategoriesList categories={categories} />
            ) : (
              <p>Не найдено ни одной категории</p>
            )}
          </div>

          <div className="filmsWrapper">
            {films.map((film) => {
              return <FilmPreview filmInfo={film} />;
            })}
          </div>
        </>
      </CategoriesContext.Provider>
    </AuthContext.Provider>
  );
};
