import './App.css';
import { ContactList } from './components/Contactlist/Contactlist';
import { Searchbox } from './components/Searchbox/Searchbox';
import { Contactform } from './components/Contactform/Contactform';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operation';
import { selectError, selectLoading } from './redux/selectors';
import { Loading } from './components/Loader/Loading';
import { Errormessage } from './components/Error/Errormessage';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Register } from './pages/Register/register';
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Tasks'));

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
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute redirectTo="/tasks" component={<Register />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />}
            />
            <Route
              path="/tasks"
              element={<PrivateRoute redirectTo="/login" component={<TasksPage />} />}
            />
          </Route>
        </Routes>
      </>
    </div>
  );
};
