import {contactAT} from '../actionType/contactAT'


export const addContactAC = (payload) => ({
  type: contactAT.CONTACT_ADD,
  payload,
});
