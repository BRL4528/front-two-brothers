import React from 'react';

import { MdStarBorder } from 'react-icons/md';

import { CardHeader, CardBody, CardButton } from '../styles/styles';

function Evaluention() {
  return (
    <CardButton>
      <span>
        <div />
      </span>
      <CardHeader>
        <MdStarBorder color="#FFF" size={35} />
      </CardHeader>
      <CardBody>
        <strong>Avaliações</strong>
        <p>
          É neste campo que seus clientes podem conhecer um pouco mais sobre
          você
        </p>
      </CardBody>
    </CardButton>
  );
}

export default Evaluention;
