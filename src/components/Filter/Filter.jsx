import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getFilterList } from 'components/redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterList);

  const handleFilterChange = event =>
    dispatch(filterContacts(event.currentTarget.value));

  return (
    <div className={css.filter}>
      <h2 className={css.inputTitle}> Search Contact by Name </h2>
      <input
        className={css.inputSearch}
        type="text"
        value={filter}
        placeholder="Enter name"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
