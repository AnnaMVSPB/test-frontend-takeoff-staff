import { contactAT } from '../actionType/contactAT'

const initialState = { contacts: [{id:1,name:'Александр', tel:'8987587456', email:'alex@alex.ru'}] };

function  contactReduser (state = initialState, action) {

  switch (action.type) {
    case contactAT.CONTACT_ADD:
      return{...state,contacts:[...state.contacts, {id:new Date(),...action.payload}]}

    default:
      return state;
  }
};


export default contactReduser;
