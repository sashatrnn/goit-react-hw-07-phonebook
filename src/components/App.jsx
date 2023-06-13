import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

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
