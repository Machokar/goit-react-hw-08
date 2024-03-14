import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { NavLink } from 'react-router-dom';
import { register } from '../../redux/auth/operation';

const registerSchema = Yup.object().shape({
  email: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  password: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const passId = useId();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
    >
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={nameId}>Name:</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={emailId}>Email:</label>
          <Field type="text" name="email" id={emailId} autoComplete="username" />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label htmlFor={passId}>Password:</label>
          <Field type="password" name="password" id={passId} autoComplete="current-password" />
          <ErrorMessage name="password" component="span" />
        </div>
        <button type="submit">Register</button>
        <button>
          <NavLink to="/login">Already have an account? Login here</NavLink>
        </button>
      </Form>
    </Formik>
  );
};
