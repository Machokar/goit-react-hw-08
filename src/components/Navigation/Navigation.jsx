import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { useAuth } from '../../hook';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
