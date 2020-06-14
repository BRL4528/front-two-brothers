import styled from 'styled-components';
import testimonial from '~/assets/testimonial_bg.jpg';
import portfolio from '~/assets/portfolio_bg.jpg';

export const Wrapper = styled.div`
  /* background: url(${testimonial}) no-repeat scroll 0 0;
  background-size: cover;
  position: relative; */
  background: #f6f6f6;
  padding-bottom: 45px;

  /* ::before {
    background: #f6f6f6;
    opacity: 0.8;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  } */
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
  /* background: #f6d001; */
  margin-bottom: 10px;
  border-radius: 4px;
  justify-content: space-around;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    background: rgba(255, 203, 15, 0.83);
    width: 100%;
    height: 100%;
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
