import React, { useState, useEffect } from 'react';

import { MdEventNote } from 'react-icons/md';

import { Form } from '@unform/web';
import Textarea from '~/components/Form/Textarea';

import {
  CardButton,
  CardHeader,
  CardBody,
  WindowMessage,
  DivButton,
} from '../styles/styles';

import api from '~/services/api';

function About(props) {
  const [aboutText, setAboutText] = useState('');
  const [tagWindow, setTagWindow] = useState(false);

  useEffect(() => {
    async function loadAbout() {
      const response = await api.get('user');
      const { about } = response.data;

      setAboutText(props);
    }
    loadAbout();
  }, []);

  function handleWindow() {
    setTagWindow(!tagWindow);
  }

  return (
    <>
      <CardButton onClick={handleWindow}>
        <span>
          <div />
        </span>
        <CardHeader>
          <MdEventNote color="#FFF" size={35} />
        </CardHeader>
        <CardBody>
          <strong>Sobre nós</strong>
          <p>É neste campo que seus clientes podem conhecer um pouco mais</p>
        </CardBody>
      </CardButton>
      <WindowMessage tag={tagWindow}>
        <Form>
          <h2>
            Edite aqui o campo Sobre nós, para dizer melhor aos seus clientes,
            para eles saberem um pouco mais sobre wifgwlfbdskaçfuwieb
          </h2>

          <Textarea rows="20" cols="80" maxLength="500" name="response" />
        </Form>
        <DivButton>
          <button className="btn btn1" type="button">
            <strong>Salvar</strong>
          </button>
          {/* <button type="button">Cancelar</button> */}
        </DivButton>
      </WindowMessage>
    </>
  );
}

export default About;
