// import React from 'react';
// import { MoviesCard } from '../MoviesCard/MoviesCard';
// import './MoviesCardList.css';
// import img1 from "../../images/movie_1.png";
// import img2 from "../../images/movie_2.png";
// import img3 from "../../images/movie_3.png";
// import img4 from "../../images/movie_4.png";
// import img5 from "../../images/movie_5.png";
// import img6 from "../../images/movie_6.png";
// import img7 from "../../images/movie_7.png";

// export const MoviesCardList = () => {
// 	return (
// 		<section className="card-list">
// 			<div className="card-list__wrapper">
// 				<MoviesCard
// 					img={img1}
// 					title="33 слова о дизайне"
// 					time="1ч 42м"
// 					isLiked="true" />
// 				<MoviesCard
// 					img={img2}
// 					title="Киноальманах «100 лет дизайна»"
// 					time="1ч 42м" />
// 				<MoviesCard
// 					img={img3}
// 					title="В погоне за Бенкси"
// 					time="1ч 42м" />
// 				<MoviesCard
// 					img={img4}
// 					title="Баския: Взрыв реальности"
// 					time="1ч 42м" />
// 				<MoviesCard
// 					img={img5}
// 					title="Бег это свобода"
// 					time="1ч 42м" />
// 				<MoviesCard
// 					img={img6}
// 					title="Книготорговцы"
// 					time="1ч 42м"
// 					isLiked="true" />
// 				<MoviesCard
// 					img={img7}
// 					title="Когда я думаю о Германии ночью"
// 					time="1ч 42м" />
// 			</div>
// 			<button className="card-list__button">Еще</button>
// 		</section>
// 	);
// }

import React from "react";

// import film1 from "../../images/2film.png";
// import film2 from "../../images/3film.png";
// import film3 from "../../images/4film.png";
// import film4 from "../../images/5film.png";
import film1 from "../../images/movie_1.png";
import film2 from "../../images/movie_2.png";
import film3 from "../../images/movie_3.png";
import film4 from "../../images/movie_4.png";
import film5 from "../../images/movie_5.png";
import film6 from "../../images/movie_6.png";
import film7 from "../../images/movie_7.png";

import { MoviesCard } from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const movies = [
  { image: film1, name: "Фильм1", duration: 200 },
  { image: film2, name: "Фильм2", duration: 300 },
  { image: film3, name: "Фильм3", duration: 400 },
  { image: film4, name: "Фильм4", duration: 500 },
  { image: film5, name: "Фильм1", duration: 200 },
  { image: film6, name: "Фильм2", duration: 300 },
  { image: film7, name: "Фильм3", duration: 400 },
  { image: film1, name: "Фильм4", duration: 500 },
  { image: film2, name: "Фильм1", duration: 200 },
  { image: film3, name: "Фильм2", duration: 300 },
  { image: film4, name: "Фильм3", duration: 400 },
  { image: film5, name: "Фильм4", duration: 500 },
  { image: film6, name: "Фильм1", duration: 200 },
  { image: film7, name: "Фильм2", duration: 300 },
  { image: film1, name: "Фильм3", duration: 400 },
  { image: film2, name: "Фильм4", duration: 500 },
  { image: film3, name: "Фильм1", duration: 200 },
  { image: film4, name: "Фильм2", duration: 300 },
  { image: film5, name: "Фильм3", duration: 400 },
  { image: film6, name: "Фильм4", duration: 500 },
];

export const MoviesCardList = (props) => {
  const { currentPage } = props;
  const [cardsInRow, setCardsInRow] = React.useState(4);
  const [currentRow, setCurrentRow] = React.useState(2);

  function resize() {
    const currentWidthNav = window.innerWidth;
    if (currentWidthNav >= 1747) {
      setCardsInRow(4);
      setCurrentRow(2);
    } else if (currentWidthNav < 1747 && currentWidthNav > 1279) {
      setCardsInRow(3);
      setCurrentRow(4);
    } else if (currentWidthNav <= 1279 && currentWidthNav >= 768) {
      setCardsInRow(2);
      setCurrentRow(4);
    } else if (currentWidthNav < 768) {
      setCardsInRow(1);
      setCurrentRow(5);
    }

    if (currentRow * cardsInRow + cardsInRow >= movies.length) {
      setElseButtonDisplayed(false);
    } else {
      setElseButtonDisplayed(true);
    }
  }

  React.useEffect(() => resize(), []);
  React.useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const cardsToRender = movies.slice(0, currentRow * cardsInRow);

  const [elseButtonDisplayed, setElseButtonDisplayed] = React.useState(true);

  function toggleBtnState() {
    setCurrentRow(currentRow + 1);
    if (currentRow * cardsInRow + cardsInRow >= movies.length) {
      setElseButtonDisplayed(false);
    } else {
      setElseButtonDisplayed(true);
    }
  }

  return (
    <section className="movies-cardlist">
      <ul className="movies-cardlist__grid">
        {cardsToRender.map((card) => (
          <MoviesCard
            key={card._id}
            card={card}
            currentPage={currentPage}
            // onCardClick={onCardClick}
            // onCardDelIconClick={onCardDelIconClick}
            // onCardLike={onCardLike}
          />
        ))}
      </ul>
      {elseButtonDisplayed && (
        <button onClick={toggleBtnState} className="movies-cardlist__button">
          Ещё
        </button>
      )}
    </section>
  );
}
