import React from "react";
import './AboutMe.css';
import image from '../../images/about-me.png'

export const AboutMe = (props) => {
  const { aboutMe } = props;
  return (
    <section ref={aboutMe} className="aboutme">
      <h2 className="main__title">Студент</h2>
      <div className="aboutme__profile">
        <div className="aboutme__content">
          <p className="aboutme__name">Алина</p>
          <p className="aboutme__job">Фронтенд-разработчик, 29 лет</p>
          <p className="aboutme__text">
            Я родилась в Мурманске, живу в Москве с 2010 года, окончила факультет "Высшая школа перевода" МГУ им. М.В.Ломоносова.
            Я увлекаюсь музыкой и йогой.
            В 2020 году во время пандемии начала изучать программирование.
            В октябре 2020 года начала проходить курс Веб-разработка на базе Яндекс.Практикума.
          </p>
          <ul className="aboutme__links">
            <li>
              <a
                href="https://facebook.com/alina.vainer.1/"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutme__link"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Alina-Kova/"
                target="_blank"
                rel="noopener noreferrer"
                className="aboutme__link"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="aboutme__image" alt="фото Алины Котиковой" src={image} />
      </div>
    </section>
  );
}