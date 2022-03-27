import {contactAT} from '../actionType/contactAT'


export const addContactAC = (payload) => ({
  type: contactAT.CONTACT_ADD,
  payload,
});

export const delContactAC = (payload) => ({
  type: contactAT.CONTACT_DEL,
  payload,
});

export const statusContactAC = (payload) => ({
  type: contactAT.CONTACT_STATUS,
  payload,
});

export const changeContactAC = (payload) => ({
  type: contactAT.CONTACT_CHANGE,
  payload,
});

