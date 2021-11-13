import React from 'react';
import { AboutMe } from '../AboutMe/AboutMe';
import { AboutProject } from '../AboutProject/AboutProject';
import { Portfolio } from '../Portfolio/Portfolio';
import { Promo } from '../Promo/Promo';
import { Techs } from '../Techs/Techs';

export const Main = (props) => {

	const { aboutProject, techs, aboutMe } = props;
	return (
		<>
			<Promo />
			<AboutProject aboutProject={aboutProject} />
			<Techs techs={techs} />
			<AboutMe aboutMe={aboutMe} />
			<Portfolio />
		</>
	);
}