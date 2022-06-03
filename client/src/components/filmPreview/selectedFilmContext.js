import React from "react";

const SelectedFilmContext = React.createContext({
  selectedFilmName: "",
  setSelectedFilmName: () => {},
});

export default SelectedFilmContext;
