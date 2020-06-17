import styled from 'styled-components';
import portfolio from '~/assets/fundo1.jpg';

export const Wrapper = styled.div`
  background: #f6f6f6;
  padding-bottom: 45px;
`;

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0;
  justify-content: center;
  h2 {
    margin-bottom: 30px;
    color: #333;
    font-size: 24px;
  }
`;

export const Content = styled.div`
  text-align: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, auto));
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  @media (max-width: 1360px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, auto));
    justify-content: center;
  }
`;

export const Service = styled.div`
  display: flex;
  width: 180px;
  height: 246px;
  flex-direction: column;
  padding: 20px;
  background: url(${portfolio}) no-repeat scroll 0 0;
  position: relative;
  background-size: cover;
  margin-bottom: 10px;
  border-radius: 4px;
  justify-content: space-around;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    background: rgba(255, 203, 15, 0.95);
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  img {
    position: relative;
    width: 91px;
    border-radius: 4px;
  }

  strong {
    position: relative;
    display: flex;
    font-size: 22px;
    color: #000;
  }

  p {
    color: #666;
  }
`;
