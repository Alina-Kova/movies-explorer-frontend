import React from 'react';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import img1 from "../../images/movie_1.png";
import img2 from "../../images/movie_2.png";
import img3 from "../../images/movie_3.png";
import img4 from "../../images/movie_4.png";
import img5 from "../../images/movie_5.png";
import img6 from "../../images/movie_6.png";
import img7 from "../../images/movie_7.png";

export const MoviesCardList = () => {
	return (
		<section className="card-list">
			<div className="card-list__wrapper">
				<MoviesCard
					img={img1}
					title="33 слова о дизайне"
					time="1ч 42м"
					isLiked="true" />
				<MoviesCard
					img={img2}
					title="Киноальманах «100 лет дизайна»"
					time="1ч 42м" />
				<MoviesCard
					img={img3}
					title="В погоне за Бенкси"
					time="1ч 42м" />
				<MoviesCard
					img={img4}
					title="Баския: Взрыв реальности"
					time="1ч 42м" />
				<MoviesCard
					img={img5}
					title="Бег это свобода"
					time="1ч 42м" />
				<MoviesCard
					img={img6}
					title="Книготорговцы"
					time="1ч 42м"
					isLiked="true" />
				<MoviesCard
					img={img7}
					title="Когда я думаю о Германии ночью"
					time="1ч 42м" />
			</div>
			<button className="card-list__button">Еще</button>
		</section>
	);
}