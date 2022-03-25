import React from 'react';

function Login() {
  return (
   
  <div style={{width:'400px'}}>
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input id="first_name" type="text" className="validate"/>
        <label for="first_name">Имя</label>
      </div>
      <div className="input-field col s6">
        <input id="last_name" type="text" className="validate"/>
        <label for="last_name">Фамилия</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="password" type="password" className="validate"/>
        <label for="password">Пароль</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="email" type="email" className="validate"/>
        <label for="email">@Почта</label>
      </div>
    </div>
    <a className="waves-effect waves-light btn">Войти</a>
  </form>
</div>
  );
}

export default Login;
