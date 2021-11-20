import like from "../../images/like-off.svg";
import likeActive from "../../images/like-on.svg";
import likeDelete from "../../images/close-button.svg";
import "./MoviesCard.css";

export const MoviesCard = ({movie, key}) => {
  return (
    <section key={key} className="movies-card">
      <img className="movies-card__cover" src={movie.cover} alt="Обложка фильма"/>
      <div className="movies-card__container">
        <p className="movies-card__name">{movie.name}</p>
        <p className="movies-card__duration">{movie.duration}</p>
        <img className="movies-card__like" src={movie.isLike ? movie.isSave ? likeDelete : likeActive : like} alt="Лайк" />
      </div>
    </section>
  )
}