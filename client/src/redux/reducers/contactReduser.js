import { contactAT } from '../actionType/contactAT'

const model ={ id: 1, name: 'Александр', tel: '8987587456', email: 'alex@alex.ru', statusChange: false }
const initialState = { serchContacts:[model],contacts: [model] };

function contactReduser(state = initialState, action) {

  switch (action.type) {
    case contactAT.CONTACT_ADD:
      return { ...state, serchContacts: [...state.serchContacts, { id: new Date(), ...action.payload, statusChange: false }],
      contacts: [...state.contacts, { id: new Date(), ...action.payload, statusChange: false }] }

    case contactAT.CONTACT_DEL:
      return { ...state, serchContacts: [...state.contacts.filter(contact => contact.id !== action.payload)] }

    case contactAT.CONTACT_STATUS:
      return { ...state, serchContacts: [...state.contacts.map(contact => contact.id === action.payload ? { ...contact, statusChange: true } : contact)] }

    case contactAT.CONTACT_CHANGE:
      const newContact = [...state.contacts].map(contact => {
      if(contact.id === action.payload.id){
        return {id: contact.id,name: action.payload.data.name,tel: action.payload.data.tel,email: action.payload.data.email,statusChange: false }
      }else{
        return contact
      }
      })
      return { ...state, serchContacts: newContact}
      
      case contactAT.CONTACT_SEARCH:
        const copyContacts = [...state.contacts]
        const contactFilter = copyContacts.filter(contact => contact.name.slice(0, action.payload.length) === action.payload[0].toUpperCase() + action.payload.slice(1))
        return {
          ...state, 
          serchContacts:contactFilter
        }

    default:
      return state;
  }
};


export default contactReduser;
