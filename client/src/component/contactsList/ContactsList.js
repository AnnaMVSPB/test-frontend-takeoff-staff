import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactCard from '../contactCard/ContactCard'
import FormContact from '../formContact/FormContact'

function ContactsList() {
  const [addContact, setAddContact] = useState(false)
  const { contacts } = useSelector(state => state.contactReduser)

  return (
    <div className="row">
      <button onClick={() => setAddContact(true)} className="btn waves-effect waves-light" type="submit" name="action">
        Добавить контакт
        <i className="material-icons right">send</i>
      </button>
{addContact && <FormContact closeFormContact={() => setAddContact(false)}/>}
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>@Почта</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => <ContactCard key={i} contact={contact} />)}
        </tbody>
      </table>
    </div>

  );
}

export default ContactsList;
