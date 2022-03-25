import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {initUserAC} from '../../redux/actionCreators/userAC'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.userReducer)
  useEffect(() => {
    if (user.length) {
      navigate('/contactsList')
    }
  }, [user])
  const dataForm = (e) => {
    e.preventDefault();
    const data = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      password: e.target.password.value,
    }
dispatch(initUserAC(data))
  }
  return (

    <div style={{ width: '400px' }}>
      <form className="col s12" onSubmit={dataForm}>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label for="first_name">Имя</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label for="last_name">Фамилия</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label for="password">Пароль</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Войти</button>
      </form>
    </div>
  );
}

export default Login;
