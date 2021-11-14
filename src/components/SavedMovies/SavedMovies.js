import React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import movie1 from "../../images/movie_1.png";
import movie2 from "../../images/movie_2.png";
import movie3 from "../../images/movie_3.png";
import movie4 from "../../images/movie_4.png";
import movie5 from "../../images/movie_5.png";
import movie6 from "../../images/movie_6.png";
import movie7 from "../../images/movie_7.png";
import './SavedMovies.css';

export const SavedMovies = () => {
	const movies = [
		{
			cover: `${movie1}`,
			name: "33 слова о дизайне",
			duration: "1ч 42м",
			isLike: true
		},
		{
			cover: `${movie2}`,
			name: "Киноальманах «100 лет дизайна»",
			duration: "1ч 42м",
			isLike: true
		},
		{
			cover: `${movie3}`,
			name: "В погоне за Бенкси",
			duration: "1ч 42м",
			isLike: false
		},
		{
			cover: `${movie4}`,
			name: "Баския: Взрыв реальности",
			duration: "1ч 42м",
			isLike: false
		},
		{
			cover: `${movie5}`,
			name: "Бег это свобода",
			duration: "1ч 42м",
			isLike: true
		},
		{
			cover: `${movie6}`,
			name: "Книготорговцы",
			duration: "1ч 42м",
			isLike: false
		},
		{
			cover: `${movie7}`,
			name: "Когда я думаю о Германии ночью",
			duration: "1ч 42м",
			isLike: false
		}
	]

	function saveMovies(movies) {
		const saveMoves = []
		movies.forEach((movie) => {
			if (movie.isLike) {
				movie.isSave = true;
				saveMoves.push(movie);
			}
		})
		return saveMoves
	}

	return (
		<>
			<SearchForm />
			<MoviesCardList
				movies={saveMovies(movies)}
			/>
		</>
	)
}
