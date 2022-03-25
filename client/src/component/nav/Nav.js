import React from 'react';
import { useSelector } from 'react-redux';

function Nav() {
  const {user} = useSelector(state=>state.userReducer)
  console.log(user,'user')
  return (
    <nav>
    <div className="nav-wrapper">
      {user.length ? <> <a className="brand-logo">Список контактов</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a>Выйти</a></li>
      </ul></> : <a href='/' className="brand-logo">Войти в телефонную книжку</a>}
     
    </div>
  </nav>
  );
}

export default Nav;
