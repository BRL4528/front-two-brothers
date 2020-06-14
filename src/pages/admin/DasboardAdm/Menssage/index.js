import React, { useState, useEffect } from 'react';

import { MdInsertComment, MdCancel } from 'react-icons/md';

import api from '~/services/api';

import {
  CardHeader,
  CardBody,
  CardButton,
  WindowMessage,
  Close,
  ButtonContact,
} from './styles';

function Post() {
  const [tagWindow, setTagWindow] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function loadContact() {
      const response = await api.get('contacts');
      setContacts(response.data);
    }
    loadContact();
  }, []);

  function handleWindow() {
    setTagWindow(!tagWindow);
  }

  async function handleMarkAsRead(_id) {
    await api.put(`contacts/${_id}`);

    setContacts(
      contacts.map((contact) =>
        contact._id === _id ? { ...contact, read: true } : contact
      )
    );
  }

  return (
    <>
      <CardButton onClick={handleWindow}>
        <span>
          <div />
        </span>
        <CardHeader>
          <MdInsertComment color="#FFF" size={35} />
        </CardHeader>
        <CardBody>
          <strong>Mensagens</strong>
          <p>
            É neste campo que seus clientes podem conhecer um pouco mais sobre
            você
          </p>
        </CardBody>
      </CardButton>
      <WindowMessage tag={tagWindow}>
        <Close>
          <MdCancel color="red" size={20} onClick={() => handleWindow([])} />
        </Close>
        <fieldset>
          <table cellSpacing={0}>
            <tbody>
              {contacts.map((contact) => (
                <ButtonContact
                  key={contact._id}
                  unread={contact.read}
                  type="button"
                  onClick={() => handleMarkAsRead(contact._id)}
                >
                  <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.cel}</td>
                    <td>{contact.tel}</td>
                    <td>{contact.message}</td>
                    <td>
                      <div>
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                        <p>{contact.cel}</p>
                        <p>{contact.tel}</p>
                        <p>{contact.message}</p>
                      </div>
                    </td>
                  </tr>
                </ButtonContact>
              ))}
            </tbody>
          </table>
        </fieldset>
      </WindowMessage>
    </>
  );
}

export default Post;
