import { takeEvery, put, call } from 'redux-saga/effects';


async function fetchJson(path, options = {}) {
  const responce = await fetch(path, {
    ...options,
  });
  const data = await responce.json();
  return data;
}





export function* myWatcher() {
  

}

export default myWatcher;
