import {Film} from '../../types/film';
import {useState} from 'react';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

function FilmList (props: FilmListProps): JSX.Element {
  const {films} = props;
  const [, setActiveFilm] = useState(0);

  return (
    <>
      {films.map((film) => <FilmCard onMouseOver={() => setActiveFilm(film.id)} key={film.id} film={film} />)}
    </>
  );
}

export default FilmList;

