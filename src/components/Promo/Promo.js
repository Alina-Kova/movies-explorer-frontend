import React from 'react';
import { NavTab } from '../NavTab/NavTab';
import './Promo.css';
import weblogo from '../../images/web-logo.svg';

export const Promo = () => {
  return (
    <section className="promo">
      <img className="promo__logo" alt="weblogo" src={weblogo}></img>
      <div className="promo__block">
      <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя</p>
      </div>
      <NavTab />
    </section>
  );
}