import React from 'react';
import { useDispatch } from 'react-redux';
import { addContactAC, changeContactAC } from '../../redux/actionCreators/contactAC'

function FormContact({ closeFormContact, contact }) {
  const dispatch = useDispatch()
  const contacts = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      tel: e.target.tel.value,
      email: e.target.email.value,
    }
    if (contact?.statusChange) {
      dispatch(changeContactAC({data,id:contact.id}))
    }else{
      dispatch(addContactAC(data))
      closeFormContact()
    }
  }
  return (
    <div className="row">
      <form className="col s12" onSubmit={contacts}>
        <div className="row">
          <div className="input-field col s6">
            {!contact?.statusChange && <label for="input_text">Имя</label>}
            <input id="name" type="text" className="validate" defaultValue={contact?.name}/>
          </div>
          <div className="input-field col s6">
            {!contact?.statusChange && <label for="input_text">Телефон</label>}
            <input id="tel" type="tel" className="validate" pattern="[0-9]{3,10}" defaultValue={contact?.tel} />
          </div>
          <div className="input-field col s6">
          {!contact?.statusChange && <label for="input_text">@Почта</label>}
            <input id="email" type="email" className="validate" defaultValue={contact?.email} />
          </div>
          <div className="input-field col s6">
            {contact?.statusChange ? <button className="btn waves-effect waves-light" type="submit" name="action">Изменить контакт
              <i className="material-icons right">file_download</i>
            </button> 
            : <button className="btn waves-effect waves-light" type="submit" name="action">Сохранить контакт
              <i className="material-icons right">file_download</i>
            </button>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
