import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contactSlice';
import { getContactList } from 'components/redux/contactSlice';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactList);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const formName = event.currentTarget.name.value;
    const formNumber = event.currentTarget.number.value;

    if (contacts.some(({ name }) => name === formName)) {
      return Notiflix.Notify.failure(`${name} is already in contacts`);
    }

    dispatch(addContact(formName, formNumber));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div>
        <p className={css.inputType}>Name</p>
        <input
          className={css.input}
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <p className={css.inputType}>Number</p>
        <input
          className={css.input}
          type="tel"
          placeholder="xxx-xx-xx"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </div>

      <button className={css.formBtn} type="submit">
        {' '}
        Add Contact{' '}
      </button>
    </form>
  );
};

export default ContactForm;
