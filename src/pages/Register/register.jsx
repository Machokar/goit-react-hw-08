import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    const { credentials } = formData;
    dispatch(register({ credentials }));
  };

  return (
    <div>
      <h1>Registration</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
}
