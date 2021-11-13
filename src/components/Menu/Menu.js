import React from "react";
import { NavLink } from "react-router-dom";
import { AuthorizationLink } from "../AuthorizationLink/AuthorizationLink";
import './Menu.css';

export const Menu = (props) => {
	const { menuIsActivated, closeMenu } = props;

	return (
		<div className="menu">
			<div onClick={closeMenu} className={`${menuIsActivated && "menu__overlay"}`}></div>
			<div className={`menu__body ${menuIsActivated && "menu__body_active"}`}>
				<div onClick={closeMenu} className="menu__exit"></div>
				<div className="menu__navigation">
					<NavLink exact to="/" activeClassName="menu__link_active" className="menu__link">Главная</NavLink>
					<NavLink to="/movies" activeClassName="menu__link_active" className="menu__link">Фильмы</NavLink>
					<NavLink to="/saved-movies" activeClassName="menu__link_active" className="menu__link">Сохранённые фильмы</NavLink>
					<div className="menu__spacer-box"></div>
					<AuthorizationLink />
				</div>
			</div>
		</div>
	);
}