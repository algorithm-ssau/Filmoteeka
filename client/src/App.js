import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuth } from "./hooks/auth.hook.js"

import { MainPage } from './pages/MainPage.js'
import { FilmPage } from './pages/FilmPage.js'
import { ProfilePage } from './pages/ProfilePage.js'
import { Loader } from "./components/loader/Loader.js"

import background_image from "./background_video.gif"

function App() {
  const { token, ready } = useAuth()
  const isAuthenticated = !!token

  useEffect(() => {
    document.title = "FILMOTEEKA"
    document.body.style.backgroundImage = `url(${background_image})`
  }, [])

  if (!ready) {
    return <Loader />
  }
  else if (isAuthenticated) {
    return (
      <Router>
          <Routes>
            <Route path="/" exact
              element = {<MainPage />}>
            </Route>

            <Route path="/profile" exact
                element = {<ProfilePage />}>
            </Route>

            <Route path="/film/:id"
                element = {<FilmPage />}>
            </Route>
          </Routes>
        </Router>
    )
  }
  else {
    return (
      <Router>
        <Routes>
          <Route path="/" exact
            element = {<MainPage />}>
          </Route>

          <Route path="/film/:id"
            element = {<FilmPage />}>
          </Route>
        </Routes>
      </Router>
    )
  }
}

export default App
