import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PromoFilmInfo = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASEDATE: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App title={PromoFilmInfo.TITLE} genre={PromoFilmInfo.GENRE} releaseDate={PromoFilmInfo.RELEASEDATE} />
  </React.StrictMode>,
  document.getElementById('root'));
