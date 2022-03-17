import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmList (props: FilmListProps): JSX.Element {
  const {films} = props;

  return (
    <>
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
    </>
  );
}

export default FilmList;

