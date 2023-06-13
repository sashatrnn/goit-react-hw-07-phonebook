import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as store from 'components/redux/store';
import { getContactsThunk } from 'components/redux/store';
import { getFilterList } from 'components/redux/filterSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const getfilter = useSelector(getFilterList);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(getfilter.toLowerCase())
  );

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id} className={css.listItem}>
          <p className={css.listName}>
            {name} : {phone}
          </p>
          <button
            className={css.listBtn}
            onClick={() => dispatch(store.deleteContactThunk(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
