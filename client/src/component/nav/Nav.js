import React from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { logoutUserAC } from '../../redux/actionCreators/userAC'

function Nav() {
  const dispatch = useDispatch()
  const {user} = useSelector(state=>state.userReducer)
  return (
    <nav>
    <div className="nav-wrapper teal lighten-2">
      {user.length ? <><a className="brand-logo">Список контактов</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li onClick={() =>dispatch(logoutUserAC())}><a>Выйти</a></li>
      </ul></> : <a href='/' className="brand-logo">Войти в телефонную книжку</a>}
     
    </div>
  </nav>
  );
}

export default Nav;
