import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operationAuth';
import css from './RegisterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

const registerSchema = Yup.object().shape({
  email: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  password: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const Registerform = () => {
  const dispatch = useDispatch();

  const name_Id = useId();
  const email_Id = useId();
  const password_Id = useId();

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
      <Form className={css.form} onSubmit={handleSubmit}>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={name_Id}>
            Name:
          </label>
          <Field type="text" name="name" id={name_Id} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={email_Id}>
            Email:
          </label>
          <Field type="text" name="email" id={email_Id} autoComplete="username" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={password_Id}>
            Password:
          </label>
          <Field type="password" name="password" id={password_Id} autoComplete="current-password" />
          <ErrorMessage className={css.error} name="password" component="span" />
        </div>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
    // bob
  );
};
