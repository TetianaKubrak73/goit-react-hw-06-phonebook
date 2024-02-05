import React from 'react';

import style from './ContactList.module.css';

// Компонент списка контактов
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.list}>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          // Кнопка удаления контакта
          <button
            type="button"
            name="delete"
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

export default ContactList;
