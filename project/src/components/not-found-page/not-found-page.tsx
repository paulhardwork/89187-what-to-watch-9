import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import Logo from '../logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div className='page-content'>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo />
      </header>
      <div className='film-card__wrap'>
        <h1>404. Page not found.</h1>
        <Link to='/'>Go to main page.</Link>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
