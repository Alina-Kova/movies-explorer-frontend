import { MoviesCard } from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export const MoviesCardList = ({ movies }) => {
  return (
    <section className="movies-card-list">
      {movies.map((movie, key) => (
        <MoviesCard movie={movie} key={key} />
      ))}
      <buton type="button" className="movies-card-list__button" aria-label="Найти">Ещё</buton>
    </section>
  )
}
