import React from 'react';
import './NotFound.css';
import { Link } from "react-router-dom";


export const NotFound = () => {

	return (
		<div className="error">
			<div className="error__inner">
				<h1 className="error__title">404</h1>
				<p className="error__subtitle">Страница не найдена</p>
				<Link className="error__button" to="/">
					Назад
            </Link>
			</div>
		</div>
	);
}