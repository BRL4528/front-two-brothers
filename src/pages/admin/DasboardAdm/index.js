/**
 * OS COMPONENTE ABOUT E EVALUENTION ESTA DISPONIVEL PARA FUTUROS UPGRADES
 */

import React from 'react';

import { Container, Grid } from './styles/styles';

import Header from '~/components/HeaderAdm';
import BannerFunction from './Banner';
// import AboutFunction from './About';
// import EvaluentionFunction from './Evaluention';
import MenssageFunction from './Menssage';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Grid>
          <BannerFunction />
          {/* <AboutFunction /> */}
          {/* <EvaluentionFunction /> */}
          <MenssageFunction />
        </Grid>
      </Container>
    </>
  );
}
