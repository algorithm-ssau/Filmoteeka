import React from "react";
import { useHttp } from "../hooks/http.hook.js";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/navbar/NavBar.js";

export const FilmPage = () => {
  const navigate = useNavigate();
  const { request } = useHttp();
  const filmId = useParams().id;

  const [films, setFilms] = React.useState([
    { id: 1, name: "zxc" },
    { id: 2, name: "qwe" },
  ]);

  const getAllFilms = async () => {
    const data = await request("/api/film/all", "POST");
    setFilms(data);
  };

  const makeFilmRequest = async () => {
    //const data = await request('/api/film/', 'POST', null, { Authorization: `Bearer: ${token}` })
    //navigate(`/film/${data.film._id}`)
  };

  return (
    <>
      <NavBar />

      <h1>Film Page</h1>
      <ul>
        {films.map((f) => {
          return (
            <>
              <h1>{f.name}</h1>
              <hr />
            </>
          );
        })}
      </ul>

      <button onClick={getAllFilms}>Get all films</button>
    </>
  );
};
