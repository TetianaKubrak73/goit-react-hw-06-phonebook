import { useSelector, useDispatch } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import style from './PhoneBook.module.css';
import { addContacts, deleteContacts } from '../redux/contacts/contact-slice';
import { setFilter } from '../redux/filter/filter-slice';
const PhoneBook = () => {
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  //   Добавление нового контакта в список контактов
  const isDuplicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const duplicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      const normalizedCurrentNumber = item.number.toLowerCase();

      return (
        normalizedCurrentName === normalizedName &&
        normalizedCurrentNumber === normalizedNumber
      );
    });
    return Boolean(duplicate);
  };

  const onAddContact = data => {
    if (isDuplicate(data)) {
      return alert(
        `This contact ${data.name}: ${data.number} is already in the book`
      );
    }
    const action = addContacts(data);
    dispatch(action);
  };
  // Изменение значения фильтра
  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  // Получение отфильтрованных контактов
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Удаление контакта из списка
  const onDeleteContact = id => {
    const action = deleteContacts(id);
    dispatch(action);
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>

      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        // Фильтр для отображения контактов
        <Filter value={filter} onChangeFilter={changeFilter} />
      ) : (
        <div className="style.wrapper">
          Your phonebook is empty. Add first contact!
        </div>
      )}
      {contacts.length > 0 && (
        // Список контактов
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      )}
    </div>
  );
};

export default PhoneBook;
