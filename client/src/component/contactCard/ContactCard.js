import React from 'react';
import { useDispatch } from 'react-redux';
import { delContactAC, statusContactAC } from '../../redux/actionCreators/contactAC'
import FormContact from '../formContact/FormContact';

function ContactCard({ contact }) {
  const dispatch = useDispatch()
  return (
    <tr>
      {contact.statusChange
        ?
        <FormContact contact={contact} />
        :
        <>
          <td>{contact.name}</td>
          <td>{contact.tel}</td>
          <td>{contact.email}</td>
          <td onClick={() => dispatch(statusContactAC(contact.id))}><i className=" small material-icons">create</i>
            <i onClick={() => dispatch(delContactAC(contact.id))} className=" small material-icons">delete_forever</i></td>
        </>
      }
    </tr>

  );
}

export default ContactCard;
