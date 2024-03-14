import { useDispatch } from 'react-redux';
import { Registerform } from '../../components/Register/RegisterForm';
import { register } from '../../redux/auth/operationAuth';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    const { credentials } = formData;
    dispatch(register({ credentials }));
  };

  return (
    <div className={css.box}>
      <h1 className={css.name}>Registration</h1>
      <Registerform onSubmit={handleRegister} />
    </div>
  );
}
