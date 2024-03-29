import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operationAuth';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleLogIn = formData => {
    const { credentials } = formData;
    dispatch(logIn({ credentials }));
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.text}>Log in</h1>
      <LoginForm onSubmit={handleLogIn} />
    </div>
  );
}
