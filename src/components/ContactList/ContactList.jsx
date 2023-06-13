import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContactList } from 'components/redux/contactSlice';
import { getFilterList } from 'components/redux/filterSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactList);
  const getfilter = useSelector(getFilterList);

  const visibleContacts = [
    ...contacts.filter(contact =>
      contact.name.toLowerCase().includes(getfilter.toLowerCase())
    ),
  ];

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          <p className={css.listName}>
            {name} : {number}
          </p>
          <button
            className={css.listBtn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
