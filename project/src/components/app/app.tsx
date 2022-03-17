import {AppRoute, AuthorizationStatus} from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Film} from '../../types/film';
import {Review} from '../../types/review';
import AddReview from '../add-review/add-review';
import FilmPage from '../film-page/film-page';
import MainPage from '../main-page/main-page';
import MyList from '../my-list/my-list';
import NotFoundPage from '../not-found-page/not-found-page';
import SignIn from '../sign-in/sign-in';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  films: Film[],
  reviews: Review[],
  title: string;
  genre: string;
  releaseDate: string;
};

function App({films, reviews, title, genre, releaseDate}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage title={title} genre={genre} releaseDate={releaseDate} />} />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<FilmPage />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Review} element={<AddReview/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
