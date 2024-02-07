import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selector';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import style from './PhoneBook.module.css';

const PhoneBook = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <div className="style.wrapper">
          Your phonebook is empty. Add first contact!
        </div>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default PhoneBook;
