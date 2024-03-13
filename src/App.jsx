import './App.css';
import { ContactList } from './components/Contactlist/Contactlist';
import { Searchbox } from './components/Searchbox/Searchbox';
import { Contactform } from './components/Contactform/Contactform';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contacts/operation';
import { selectError, selectLoading } from './redux/contacts/selectors';
import { Loading } from './components/Loader/Loading';
import { Errormessage } from './components/Error/Errormessage';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout';
const Home = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/LoadingPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = () => import('./pages/NotFoundPage/NotFoundPage');

export const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {loading && <Loading />}
      {error && <Errormessage />}
      <Navigation />
      <Contactform />
      <Searchbox />
      <ContactList />
      return isRefreshing ? (<b>Refreshing user...</b>) : (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
            />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </div>
      );
    </div>
  );
};
