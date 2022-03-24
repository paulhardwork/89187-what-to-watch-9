import {useState} from 'react';
import {Link} from 'react-router-dom';
import {PREVIEW_DELAY} from '../../const';
import {Film} from '../../types/film';
import CardPlayer from '../card-player/card-player';


type FilmCardProps = {
  film: Film,
  onMouseOver: () => void,
};

function FilmCard (props: FilmCardProps): JSX.Element {
  const {film, onMouseOver} = props;
  const {id, name, previewImage, previewVideoLink} = film;

  const [isHover, setIsHover] = useState(false);

  let videoDelay: NodeJS.Timeout;

  return (
    <article
      onMouseOver={
        () => {
          videoDelay = setTimeout(() => {
            setIsHover(true);
            onMouseOver();
          }, PREVIEW_DELAY);
        }
      }
      onMouseOut={() => {
        clearTimeout(videoDelay);
        setIsHover(false);
      }}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <CardPlayer isHover={isHover} src={previewVideoLink} poster={previewImage} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`film/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
