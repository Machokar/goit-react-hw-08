import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import { LoginForm } from '../../components/LoginForm/LoginForm';
export const Login = () => {
  const dispatch = useDispatch();

  const handleLogIn = formData => {
    const { credentials } = formData;
    console.log(formData);
    dispatch(logIn({ credentials }));
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogIn} />
    </div>
  );
};
