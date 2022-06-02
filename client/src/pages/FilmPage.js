import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth.hook.js";
import { AuthContext } from "../AuthContext.js";
import NavBar from "../components/navbar/NavBar.js";

import "./FilmPage.css";

export const FilmPage = () => {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;

  const { request } = useHttp();
  const navigate = useNavigate();

  const [film, setFilm] = useState({
    name: "some film name",
    description: "some description",
    imageUrl: "",
    avgRate: 0,
    genre: "genre 1",
    comments: [],
  });

  const getFilmInfoByName = async () => {
    const data = await request(
      "/api/film/byName",
      "GET",
      { name: "some film name in the db" },
      { Authorization: `Bearer: ${token}` }
    );

    setFilm(data.filmInfo);
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
        <img src={film.imageUrl} alt="Постер фильма" />
        <p>Жанр: {film.genre}</p>
        <p>Средняя оценка: {film.avgRate}</p>
        <hr />
        <p>{film.description}</p>
        <button onClick={getFilmInfoByName}>Get test film info</button>
      </div>
    </AuthContext.Provider>
  );
};
