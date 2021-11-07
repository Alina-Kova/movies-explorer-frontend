// import React from "react";
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import { Header } from "../Header/Header";
// import { Main } from "../Main/Main";
// // import { Movies } from "../Movies/Movies";
// // import { SavedMovies } from "../SavedMovies/SavedMovies";
// // import { Profile } from "../Profile/Profile";
// // import { Register } from "../Register/Register";
// // import { Login } from "../Login/Login";
// // import { NotFound } from "../NotFound/NotFound";
// import { Footer } from "../Footer/Footer";


// function App() {

//   const [isAuth, setIsAuth] = React.useState(true);
//   const [isSavedMovies] = React.useState(true);
//   const [isHidden, setIsHidden] = React.useState(true);
//   const [isHiddenFooter, setIsHiddenFooter] = React.useState(true);
//   const [moviesBackground, setMoviesBackground] = React.useState('header_active');
//   const getMoviesUrl = window.location.pathname;

//   function handleLink(boolean) {
//     setIsAuth(boolean);
//   }

//   React.useEffect(() => {
//     if (getMoviesUrl ==="/") {
//       setMoviesBackground('');
//     }
//   }, [getMoviesUrl]);


//   return (
//     <div className="app">
//       {isHidden && <Header isAuth={isAuth} moviesBackground={moviesBackground}/>}
//       {/* {isHidden && <Header moviesBackground={moviesBackground}/>} */}
//       <Routes>
//         <Route exact path="/">
//           <Main setAuth={handleLink} />
//           {/* <Main /> */}
//         </Route>
//         {/* <Route path="/movies">
//           <Movies />
//         </Route> */}
//         {/* <Route path="/saved-movies">
//           <SavedMovies isSavedMovies={isSavedMovies} />
//           {/* <SavedMovies />
//         </Route> */} 
//         {/* <Route path="/profile">
//           <Profile onIsHiddenFooter={setIsHiddenFooter} />
//           {/* <Profile /> */}
//         {/* </Route> */} 
//         {/* <Route path="/signup">
//           <Register onIsHidden={setIsHidden} />
//           {/* <Register /> */}
//         {/* </Route> */}
//         {/* <Route path="/signin">
//           <Login onIsHidden={setIsHidden} /> */}
//           {/* <Login /> */}
//         {/* </Route> */}
//         {/* <Route path="*">
//           <NotFound onIsHidden={setIsHidden} /> */}
//           {/* <NotFound /> */}
//         {/* </Route> */}
//       </Routes>
//       {isHidden && isHiddenFooter && <Footer />}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;


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

// import Menu from "./menu/Menu";
import "./App.css";
// import Preloader from "./preloader/Preloader";

function App(props) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Имитирует состояние авторизации пользователя
  const [loggedIn, setLoggedIn] = React.useState(true);

  // Имитирует состояние загрузки
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [isLoading] = React.useState(false);

  // записываем объект, возвращаемый хуком, в переменную
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

  // const [menuIsActivated, setMenuIsActivated] = React.useState("");
  // function openMenu() {
  //   setMenuIsActivated(true);
  // }
  // function closeMenu() {
  //   setMenuIsActivated("");
  // }
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
      {/* {isLoading && <Preloader />} */}
      {headerRender && (
        <Header
          // openMenu={openMenu}
          currentPath={currentPath}
          loggedIn={loggedIn}
        />
      )}
      <Switch>
        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} />
        {/* <Movies path="/movies" loggedIn={loggedIn} /> */}

        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
        />
        {/* <SavedMovies
          path="/saved-movies"
          loggedIn={loggedIn}
        /> */}

        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          logout={logout}
        />
        {/* <Profile
          path="/profile"
          loggedIn={loggedIn}
          logout={logout}
        /> */}

        <Route path="/sign-up">
          <Register
          // handleRegister={handleRegister}
          />
        </Route>

        <Route path="/sign-in">
          <Login
          // handleLogin={handleLogin}
          />
        </Route>

        <Route exact path="/">
          <Main
            aboutProject={aboutProject}
            techs={techs}
            aboutMe={aboutMe}
            executeScroll={executeScroll}
          />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {footerRender && <Footer />}
      {/* <Menu menuIsActivated={menuIsActivated} closeMenu={closeMenu} /> */}
    </div>
  );
}

export default App;