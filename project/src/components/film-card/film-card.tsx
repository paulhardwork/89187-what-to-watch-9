import {Film} from '../../types/film';

type FilmCardProps = {
  film: Film,
  onMouseOver: () => void,
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, onMouseOver} = props;
  const {name, previewImage} = film;

  return (
    <article onMouseOver={onMouseOver} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
