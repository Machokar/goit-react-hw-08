import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/operation';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.namenumber}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <div>
        <button onClick={() => dispatch(deleteContact(id))} className={css.button}>
          Delete
        </button>
      </div>
    </>
  );
};
