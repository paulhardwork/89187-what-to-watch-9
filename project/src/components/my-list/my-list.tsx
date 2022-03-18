import {Film} from '../../types/film';
import Logo from '../logo/logo';
import Footer from '../footer/footer';

type MyListProps = {
  films: Film[];
};

function MyList (props: MyListProps): JSX.Element {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map(({id, name, previewImage}) =>
            (
              <article key={id} className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src={previewImage} alt={name} width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">{name}</a>
                </h3>
              </article>
            ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
