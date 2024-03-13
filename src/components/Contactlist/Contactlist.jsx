import { selectFilter, selectContacts } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import css from './Contactlist.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const visibleContacts = contacts.filter(
    contact => contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contact} key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
