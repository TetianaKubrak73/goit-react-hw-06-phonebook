import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selector';
import style from './ContactList.module.css';
import { deleteContacts } from '../../redux/contacts/contact-slice';

// Компонент списка контактов
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // Удаление контакта из списка
  const onDeleteContact = id => {
    const action = deleteContacts(id);
    dispatch(action);
  };
  // Получение отфильтрованных контактов
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();
  return (
    <ul className={style.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ' : ' + contact.number}
          <button
            type="button"
            name="delete"
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
