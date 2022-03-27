import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContactCard from '../contactCard/ContactCard'
import FormContact from '../formContact/FormContact'

function ContactsList() {
  const navigate = useNavigate()
  const [addContact, setAddContact] = useState(false)
  const { serchContacts } = useSelector(state => state.contactReduser)
  const { user } = useSelector(state => state.userReducer)
  useEffect(() => {
    if (user.length < 1) {
      navigate('/')
    }
  }, [user])
  return (
    <div className="row z-depth-4">
      <button onClick={() => setAddContact(true)} className="btn waves-effect teal lighten-5 black-text" type="submit" name="action">
        Добавить контакт
        <i className="material-icons right">send</i>
      </button>
      {addContact && <FormContact closeFormContact={() => setAddContact(false)} />}
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
          {serchContacts.map((contact, i) => <ContactCard key={i} contact={contact} />)}
        </tbody>
      </table>
    </div>

  );
}

export default ContactsList;
