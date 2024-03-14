import { useDispatch } from 'react-redux';
import { Contactform } from '../../components/Contactform/Contactform';
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
      <p>LogIn </p>
      <Contactform />
      <LoginForm onSubmit={handleLogIn} />
    </div>
  );
};
