import React from 'react';

function ContactCard({contact}) {
  return (
    <tr>
    <td>{contact.name}</td>
    <td>{contact.tel}</td>
    <td>{contact.email}</td>
    <td><i class=" small material-icons">create</i>
    <i class=" small material-icons">delete_forever</i></td>
  </tr>
      
  );
}

export default ContactCard;
