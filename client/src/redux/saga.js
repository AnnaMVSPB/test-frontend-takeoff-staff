import { takeEvery, put, call } from 'redux-saga/effects';
import { userAT } from './actionType/userAT'

async function fetchJson(path, options = {}) {
  const host = process.env.REACT_APP_FETCH_HOST
  const responce = await fetch((`${host}${path}`), {
    ...options,
  });
  const data = await responce.json();
  return data;
}

function* initUser(action) {
  try {
    const response = yield call(fetchJson, `/user?last_name=${action.payload.last_name}`, {
      method: 'GET',
    });
    yield put({ type: userAT.USER_INIT_LOGIN, payload: response });
  } catch (e) {
    yield put(alert('Connection error'));
  }
}




export function* myWatcher() {
  yield takeEvery(userAT.USER_LOGIN_FETCH, initUser);

}

export default myWatcher;
