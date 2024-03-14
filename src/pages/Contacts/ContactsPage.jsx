import { ContactList } from '../../components/ContactList/ContactLis';
import { SearchBox } from '../../components/SearchBox/Search';
import { fetchContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './ContactsPage.module.css';
import { ContactForm } from '../../components/ContactForm/ContactFormу';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1 className={css.text}>Phone Book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
