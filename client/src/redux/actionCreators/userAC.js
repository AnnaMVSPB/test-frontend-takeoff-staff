import {userAT} from '../actionType/userAT'


export const initUserAC = (payload) => ({
  type: userAT.USER_LOGIN_FETCH,
  payload,
});
