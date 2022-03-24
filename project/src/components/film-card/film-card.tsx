import { useState } from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import CardPlayer from '../card-player/card-player';


type FilmCardProps = {
  film: Film,
  onMouseOver: () => void,
};

function FilmCard (props: FilmCardProps): JSX.Element {
  const {film, onMouseOver} = props;
  const {id, name, previewImage, previewVideoLink} = film;

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <article
      onMouseOver={() => {
        setIsMouseOver(true);
        onMouseOver();
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <CardPlayer mouseOver={isMouseOver} src={previewVideoLink} poster={previewImage} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`film/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
