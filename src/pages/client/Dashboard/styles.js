import styled from 'styled-components';
import backgroundImg from '~/assets/23.jpg';

export const Intro = styled.div`
  display: table;
  width: 100%;
  height: 800px;

  text-align: center;
  color: #fff;

  background-color: #000;
`;

export const Banner = styled.div`
  position: relative;
  animation-direction: alternate;

  div {
    position: absolute;

    width: 100%;
    height: 100vh;
    padding: 100px 0;
    background-position: 30% 45%;
    background-size: cover;
    background-image: ${(props) =>
      props.urlImg ? `url(${props.urlImg})` : `url(${backgroundImg})`};
    overflow: hidden;
    /* filter: brightness(20%); */
    filter: ${(props) =>
      props.opacity ? `brightness(${props.opacity}%)` : 'brightness(95%)'};
    background-repeat: no-repeat;

    animation: ${(props) => (props.tag ? 'div' : 'div2')} 4s forwards;
  }

  @keyframes div {
    from {
      transform: translate3d(0px, 0px, 0px);
      opacity: 0;
      width: 10px;
    }

    to {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
      width: 100%;
    }
  }

  @keyframes div2 {
    from {
      transform: translate3d(0px, 0px, 0px);
      opacity: 0;
      width: 0;
    }

    to {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
      width: 100%;
    }
  }
`;

export const Filter = styled.div``;

export const IntroBody = styled.div`
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 76px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    margin-top: 40px;
    font-family: 'Oswald', sans-serif;
    font-style: italic;
  }

  span {
    color: #f7eb06;
    text-shadow: 0 0px #f7eb06;
    font-family: 'Oswald', sans-serif;
    font-style: italic;
  }

  p {
    font-size: 18px;
    margin-bottom: 45px;
  }

  a {
    color: #333;
    font-weight: 800;
    background: #f7eb06;
    border-radius: 4px;
    border: 0;
    padding: 12px 24px;
    margin: 0 8px;
    font-size: 18px;
    transition: all 0.5s;

    :hover,
    :focus {
      color: #f7eb06;
      font-weight: 900;
      background-color: #333;
    }
  }

  @media (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 100px;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

export const Coll = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: 8.33333333%;

  display: ${(props) => (props.display ? '' : 'none')};

  animation: div3 5s forwards;
  @keyframes div3 {
    from {
      transform: translate3d(0px, 0px, 0px);
      opacity: 0;
    }

    to {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }
  }

  img {
    height: 220px;
    width: 250px;
    margin-top: 130px;
  }

  @media (max-width: 640px) {
    > div {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;

export const DivBottomBanner = styled.div`
  position: relative;
  z-index: 10;
  float: right;
  display: flex;
  align-items: center;
  button {
    float: right;
    border-radius: 50%;
    border: none;
    padding: 10px;
    margin-top: -155px;
    background: transparent;
    transition: background 3s;
    svg {
      width: 45px;
      height: 45px;
      transition: width 3s;
      color: #999;
    }
    :hover {
      svg {
        width: 80px;
        height: 80px;
        color: #eee;
      }
    }
  }
`;

export const Footer = styled.footer`
  div {
    display: flex;
    justify-content: center;
    color: #666;
    background: #f6d001;
    padding: 25px 10px;
  }

  strong {
    color: #333;
    margin-right: 5px;

    a {
      color: #333;
      margin-left: 5px;
    }
  }
`;
