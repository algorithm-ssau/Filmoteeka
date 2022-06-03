import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook.js";
import { MainPage } from "./pages/MainPage.js";
import { FilmPage } from "./pages/FilmPage.js";
import { ProfilePage } from "./pages/ProfilePage.js";
import { Loader } from "./components/loader/Loader.js";
import SelectedFilmContext from "./components/filmPreview/selectedFilmContext.js";

import background_image from "./background_video.gif";

function App() {
  const { token, ready } = useAuth();
  const isAuthenticated = !!token;

  const [selectedFilmName, setSelectedFilmName] = useState("");

  useEffect(() => {
    document.title = "FILMOTEEKA";
    document.body.style.backgroundImage = `url(${background_image})`;
  }, []);

  if (!ready) {
    return <Loader />;
  } else if (isAuthenticated) {
    return (
      <SelectedFilmContext.Provider
        value={{
          selectedFilmName: selectedFilmName,
          setSelectedFilmName: setSelectedFilmName,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" exact element={<MainPage />}></Route>

            <Route path="/profile" exact element={<ProfilePage />}></Route>

            <Route path="/film" element={<FilmPage />}></Route>
          </Routes>
        </Router>
      </SelectedFilmContext.Provider>
    );
  } else {
    return (
      <SelectedFilmContext.Provider
        value={{
          selectedFilmName: selectedFilmName,
          setSelectedFilmName: setSelectedFilmName,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" exact element={<MainPage />}></Route>

            <Route path="/film" element={<FilmPage />}></Route>
          </Routes>
        </Router>
      </SelectedFilmContext.Provider>
    );
  }
}

export default App;
