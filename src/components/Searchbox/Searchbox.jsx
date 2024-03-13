import { useDispatch, useSelector } from 'react-redux';
import css from './Searchbox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

export const Searchbox = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector(state => state.filters);

  return (
    <div>
      <p className={css.searchbox}>SearchBar</p>
      <input
        type="text"
        className={css.searchbar}
        value={currentFilter}
        onChange={evt => {
          dispatch(changeFilter(evt.target.value));
        }}
      />
    </div>
  );
};
