import { React, useState, useContext, useEffect } from "react";
import { useHttp } from "../hooks/http.hook.js";
import { useAuth } from "../hooks/auth.hook.js";
import { AuthContext } from "../AuthContext.js";
import SelectedFilmContext from "../components/filmPreview/selectedFilmContext.js";
import NavBar from "../components/navbar/NavBar.js";

import "./FilmPage.css";

export const FilmPage = () => {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;

  const { request } = useHttp();

  const { selectedFilmName, setSelectedFilmName } =
    useContext(SelectedFilmContext);
  const [film, setFilm] = useState({
    name: "some film name",
    description: "some description",
    imageUrl: "",
    avgRate: 0,
    genre: "some genre",
    comments: [],
  });

  useEffect(() => {
    getFilmInfoByName(selectedFilmName);
  }, []);

  const getFilmInfoByName = async () => {
    console.log(`selected film name: ${selectedFilmName}`);
    const data = await request(
      "/api/films/byName",
      "POST",
      { name: selectedFilmName }
      //{ Authorization: `Bearer: ${token}` }
    );

    setFilm(JSON.parse(data.filmInfo));
  };

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
      <NavBar />
      <div className="filmInfoWrapper">
        <h1>{film.name}</h1>
        <img
          src={film.imageUrl}
          width="300px"
          height="300px"
          alt="Постер фильма"
        />
        <p>Жанр: {film.genre}</p>
        <p>Средняя оценка: {film.avgRate}</p>
        <hr />
        <p>{film.description}</p>
      </div>
    </AuthContext.Provider>
  );
};
