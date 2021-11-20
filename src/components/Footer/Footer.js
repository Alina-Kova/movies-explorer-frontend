import React from 'react';
import './Footer.css';

export const Footer = () => {
	return (
		<footer className="footer">
			<h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
			<div className="footer__wrapper">
				<p className="footer__author">&copy; 2021</p>
				<nav>
					<ul className="footer__links">
						<li className="footer__wrapper-link">
							<a
								href="https://praktikum.yandex.ru/"
								target="_blank"
								rel="noopener noreferrer"
								className="footer__link"
							>
								Яндекс.Практикум
								</a>
						</li>
						<li className="footer__wrapper-link">
							<a
								href="https://github.com/Alina-Kova/"
								target="_blank"
								rel="noopener noreferrer"
								className="footer__link"
							>
								Github
								</a>
						</li>
						<li className="footer__wrapper-link">
							<a
								href="https://www.facebook.com/alina.vainer.1/"
								target="_blank"
								rel="noopener noreferrer"
								className="footer__link"
							>
								Facebook
								</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}