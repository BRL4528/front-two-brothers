import React from 'react';

import {
  About,
  Container,
  SectionTitle,
  Row,
  Coll,
  ImageAbout,
  IntroText,
  Description,
} from './styles';

import junp from '~/assets/r.png';

function AboutClient() {
  return (
    <About>
      <Container>
        <SectionTitle>
          <h2 id="sobre">Sobre Nós</h2>
        </SectionTitle>
        <Row>
          <Coll>
            <ImageAbout src={junp} />
          </Coll>
          <IntroText>
            <Description>
              <h4>Quem nós somos</h4>
              <p>
                Somos uma empresa especizada em dar aquele grau em seu carro ou
                moto, todos os nossos serviços, são prestados por ótimos
                proficionais, trabalhamos de diversas formas, entre em contato
                para mais informações.
              </p>
            </Description>
          </IntroText>
          <IntroText>
            <Description>
              <h4>O que fazemos</h4>
              <p>
                Nosso complexo de reprodução genética, conta com um sistema de
                distribuição de ração automatizado e de climatização que
                garantem o conforto e a expressão máxima do potencial genético
                suíno, contribuindo assim para os conceitos difundidos da
                política de bem-estar animal. Sua rotina de trabalho garante o
                alto nível sanitário do rebanho de suínos por meio de recursos
                tais como, mas não somente, cortina vegetal, veículo exclusivo
                para transbordo e a constante higienização das vestimentas dos
                empregados e utensílios de trabalho, prevenindo a contaminação
                cruzada. A produção por meio de auto reposição é independente e
                dispensa a introdução de animais externos, o que reduz a
                probabilidade de infecção por agentes biológicos nocivos ao
                ambiente da granja. A responsabilidade socioambiental é
                garantida por meio da destinação racional de dejetos da produção
                e a utilização de efluentes da biodigestão como biofertilizante
                e do biogás como fonte energética. A utilização de cisternas que
                representam o sistema de captação de água de chuva, reduzem a
                necessidade de água potável na higienização das instalações.
              </p>
            </Description>
          </IntroText>
        </Row>
      </Container>
    </About>
  );
}

export default AboutClient;
