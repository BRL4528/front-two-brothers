import React from 'react';

import polish from '~/assets/polish.png';
import detailing from '~/assets/detailing.png';
import lavagemeco from '~/assets/lavagemeco.png';
import insulfilm from '~/assets/insulfilm.png';
import tratamento from '~/assets/carseat.png';
import vendas from '~/assets/vendas.png';
import consignacao from '~/assets/consignacao.png';
import financiamento from '~/assets/financiamento.png';
import { Wrapper, Container, Title, Content, Grid, Service } from './styles';

function Services() {
  return (
    <Wrapper>
      <Container>
        <Title>
          <h2 id="servicos">Serviços oferecido</h2>
        </Title>
        <Content className="content">
          <Grid>
            <Service className="service">
              <img src={polish} alt="Polimento" />
              <strong>Polimento Cristalizado</strong>
            </Service>
            <Service>
              <img src={lavagemeco} alt="Polimento" />
              <strong>Lavagem ecológica</strong>
            </Service>
            <Service>
              <img src={detailing} alt="Polimento" />
              <strong>Detalhamento</strong>
            </Service>
            <Service>
              <img src={insulfilm} alt="Polimento" />
              <strong>Insulfilme</strong>
            </Service>
            <Service>
              <img src={tratamento} alt="Polimento" />
              <strong>Tratamento de couro</strong>
            </Service>
            <Service>
              <img src={vendas} alt="Polimento" />
              <strong>Venda de motos</strong>
            </Service>
            <Service>
              <img src={consignacao} alt="Polimento" />
              <strong>Consignação</strong>
            </Service>
            <Service>
              <img src={financiamento} alt="Polimento" />
              <strong>Financiamento</strong>
            </Service>
          </Grid>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Services;
