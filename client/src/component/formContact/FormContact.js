import React from 'react';
import { useDispatch } from 'react-redux';
import { addContactAC } from '../../redux/actionCreators/contactAC'

function FormContact({closeFormContact}) {
  const dispatch = useDispatch()
  const addContacts =(e)=>{
e.preventDefault();
const data ={ 
  name:e.target.name.value,
  tel: e.target.tel.value,
  email: e.target.email.value,
}
dispatch(addContactAC(data))
closeFormContact()
  }
  return (
    <div class="row">
      <form class="col s12" onSubmit={addContacts}>
        <div class="row">
          <div class="input-field col s6">
            <input id="name" type="text" class="validate" />
            <label for="input_text">Имя</label>
          </div>
          <div class="input-field col s6">
            <input id="tel" type="tel" class="validate" />
            <label for="input_text">Телефон</label>
          </div>
          <div class="input-field col s6">
            <input id="email" type="email" class="validate" />
            <label for="input_text">@Почта</label>
          </div>
          <div class="input-field col s6">

            <button class="btn waves-effect waves-light" type="submit" name="action">Сохранить контакт
              <i class="material-icons right">file_download</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
