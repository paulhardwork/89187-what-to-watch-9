import {AppRoute, AuthorizationStatus} from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import Player from '../player/player';
import AddReview from '../add-review/add-review';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  title: string;
  genre: string;
  releaseDate: string;
};

function App({title, genre, releaseDate}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage title={title} genre={genre} releaseDate={releaseDate} />}></Route>
        <Route path={AppRoute.Login} element={<SignIn />}></Route>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        >
        </Route>
        <Route path={AppRoute.Film} element={<FilmPage />}></Route>
        <Route path={AppRoute.Player} element={<Player />}></Route>
        <Route path={AppRoute.Review} element={<AddReview/>} ></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
