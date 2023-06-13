import { useLocalStorage } from 'components/App';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'components/redux/store';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const names = contacts.map(obj => obj.name);

  const [name, setName] = useLocalStorage('name', ' ');
  const [phone, setPhone] = useLocalStorage('phone', ' ');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const newContact = { name, phone };
    if (!names.includes(name)) {
      dispatch(addContactThunk(newContact));
    } else {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    }
    setName('');
    setPhone('');
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
          placeholder="xxx-xxx-xxxx"
          name="phone"
          value={phone}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Phone number must be in the format xxx-xxx-xxxx"
          required
          onChange={handleChange}
        />
      </div>

      <button className={css.formBtn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
