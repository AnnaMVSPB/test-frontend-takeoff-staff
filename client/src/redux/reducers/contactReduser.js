import { contactAT } from '../actionType/contactAT'

const initialState = { contacts: [{ id: 1, name: 'Александр', tel: '8987587456', email: 'alex@alex.ru', statusChange: false }] };

function contactReduser(state = initialState, action) {

  switch (action.type) {
    case contactAT.CONTACT_ADD:
      return { ...state, contacts: [...state.contacts, { id: new Date(), ...action.payload, statusChange: false }] }

    case contactAT.CONTACT_DEL:
      return { ...state, contacts: [...state.contacts.filter(contact => contact.id !== action.payload)] }

    case contactAT.CONTACT_STATUS:
      return { ...state, contacts: [...state.contacts.map(contact => contact.id === action.payload ? { ...contact, statusChange: true } : contact)] }

    case contactAT.CONTACT_CHANGE:
      const newContact = [...state.contacts].map(contact => {
      if(contact.id === action.payload.id){
        return {id: contact.id,name: action.payload.data.name,tel: action.payload.data.tel,email: action.payload.data.email,statusChange: false }
      }else{
        return contact
      }
      })

      return { ...state, contacts: newContact}

    default:
      return state;
  }
};


export default contactReduser;
