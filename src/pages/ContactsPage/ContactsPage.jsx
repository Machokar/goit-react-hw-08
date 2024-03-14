import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Contactform } from '../../components/Contactform/Contactform';
import { Searchbox } from '../../components/Searchbox/Searchbox';
import { ContactList } from '../../components/Contactlist/Contactlist';
import { fetchContact } from '../../redux/contacts/operation';

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
      <p>Your contacts</p>
      <Contactform />
      <Searchbox />
      <ContactList />
    </div>
  );
}
