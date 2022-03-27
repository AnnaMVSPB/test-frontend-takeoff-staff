import React from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import { logoutUserAC } from '../../redux/actionCreators/userAC'
import Search from '../Search/Search';

function Nav() {
  const dispatch = useDispatch()
  const {user} = useSelector(state=>state.userReducer)
  return (

    <nav width="650">
    <div className="nav-wrapper light-blue darken-4">
    {user.length 
      ?
       <><div className="brand-logo">Список контактов</div>
      <ul className="right hide-on-med-and-down">
     <li><Search/></li> 
        <li onClick={() =>dispatch(logoutUserAC())}><a classNameName="right hide-on-med-and-down">Выйти</a></li>
      </ul></> 
      : 
      <a href='/' className="brand-logo">Войти в телефонную книжку</a>}
    </div>
  </nav>




  //   <nav>
  //   <div className="row teal lighten-2">
  //     {user.length 
  //     ?
  //      <><a className="col s12 m4 l2">Список контактов</a>
  //     <li className="col s12 m4 l8"><Search/></li> 
  //     <ul id="nav-mobile" className="col s12 m4 l2">
  //       <li onClick={() =>dispatch(logoutUserAC())}><a>Выйти</a></li>
  //     </ul></> 
  //     : 
  //     <a href='/' className="brand-logo">Войти в телефонную книжку</a>}
     
  //   </div>
  // </nav>
  );
}

export default Nav;
