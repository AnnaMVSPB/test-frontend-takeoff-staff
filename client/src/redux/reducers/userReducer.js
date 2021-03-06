import { userAT } from '../actionType/userAT'

const initialState = { user: [] };

function userReducer(state = initialState, action) {

  switch (action.type) {
    case userAT.USER_INIT_LOGIN:
      return { ...state, user: action.payload }

    case userAT.USER_LOGOUT:
      return { ...state, user: [] }

    default:
      return state;
  }
};


export default userReducer;
