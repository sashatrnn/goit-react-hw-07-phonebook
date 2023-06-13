import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });
  return [state, setState];
};

const App = () => {
  return (
    <section className="container">
      <h1 className="title"> Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 className="subTitle">Contacts</h2>
      <ContactList />
    </section>
  );
};

export default App;
