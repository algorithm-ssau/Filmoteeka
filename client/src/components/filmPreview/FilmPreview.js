import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import SelectedFilmContext from "./selectedFilmContext.js";

function FilmPreview({ filmInfo }) {
  const { selectedFilmName, setSelectedFilmName } =
    useContext(SelectedFilmContext);

  const filmSelectHandler = () => {
    setSelectedFilmName(filmInfo.name);
  };

  return (
    <>
      <h1>
        <NavLink onClick={filmSelectHandler} to="/film">
          {filmInfo.name}
        </NavLink>
      </h1>
      <img
        width="100px"
        height="100px"
        src={filmInfo.imageUri}
        alt="Постер фильма"
      />
      <hr />
    </>
  );
}

export default FilmPreview;
