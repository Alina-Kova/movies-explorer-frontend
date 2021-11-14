import React from "react";

import { Route, Switch, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { NotFound } from "../NotFound/NotFound";
import { Footer } from "../Footer/Footer";
import { Menu } from "../Menu/Menu";
import "./App.css";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Имитирует состояние авторизации пользователя
  const [loggedIn, setLoggedIn] = React.useState(true);

  // объект, возвращаемый хуком, в переменную
  const aboutProject = React.useRef();
  const techs = React.useRef();
  const aboutMe = React.useRef();

  const executeScroll = (element) => {
    if (element === "AboutProject") {
      aboutProject.current.scrollIntoView({ behavior: "smooth" });
    } else if (element === "Techs") {
      techs.current.scrollIntoView({ behavior: "smooth" });
    } else if (element === "AboutMe") {
      aboutMe.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [menuIsActivated, setMenuIsActivated] = React.useState("");
  function openMenu() {
    setMenuIsActivated(true);
  }
  function closeMenu() {
    setMenuIsActivated("");
  }

  function logout() {
    setLoggedIn(false);
  }
  const footerRender =
    currentPath === "/" ||
    currentPath === "/movies" ||
    currentPath === "/saved-movies";

  const headerRender =
    currentPath === "/" ||
    currentPath === "/profile" ||
    currentPath === "/movies" ||
    currentPath === "/saved-movies";

  return (
    <div className="App">
      {headerRender && (
        <Header
          openMenu={openMenu}
          currentPath={currentPath}
          loggedIn={loggedIn}
        />
      )}
      <Switch>
        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} />

        <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies} />

        <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} logout={logout} />

        <Route path="/signup">
          <Register
          // handleRegister={handleRegister}
          />
        </Route>

        <Route path="/signin">
          <Login
          // handleLogin={handleLogin}
          />
        </Route>

        <Route exact path="/">
          <Main aboutProject={aboutProject} techs={techs} aboutMe={aboutMe} executeScroll={executeScroll} />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {footerRender && <Footer />}
      <Menu menuIsActivated={menuIsActivated} closeMenu={closeMenu} openMenu={openMenu} />
    </div>
  );
}

export default App;