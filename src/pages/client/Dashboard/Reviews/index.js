import React from 'react';

import { Wrapper, Container, Title, Content, Review } from './styles';

function Reviews() {
  return (
    <Wrapper>
      <Container>
        <Title>
          <h2>Avaliações</h2>
        </Title>
        <Content>
          <Review>
            <span>
              <div>
                <p>
                  Excelente serviço meu porshe ficou zero, recomendo para todos,
                  sucesso twobrothers
                </p>
              </div>
              <strong>Alessandro Silva</strong>
              <p>1h atrás</p>
            </span>
          </Review>
          <Review>
            <span>
              <div>
                <p>Excelente serviço meu porshe ficou zero</p>
              </div>
              <strong>Alessandro Silva</strong>
              <p>1h atrás</p>
            </span>
          </Review>
          <Review>
            <span>
              <div>
                <p>
                  Excelente serviço meu porshe ficou zero, recomendo para todos,
                  sucesso twobrothers
                </p>
              </div>
              <strong>Alessandro Silva</strong>
              <p>1h atrás</p>
            </span>
          </Review>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Reviews;
