import styled from 'styled-components';
import testimonial from '~/assets/twobrobuy.jpg';

export const Wrapper = styled.section`
  width: 100%;
  background: #f6f6f6;
  padding-bottom: 90px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  justify-content: center;
  h2 {
    margin-bottom: 30px;
    color: #333;
    font-size: 24px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, auto));
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Review = styled.div`
  width: 370px;
  height: 270px;
  background: url(${testimonial}) no-repeat scroll 0 0;
  position: relative;
  background-size: cover;
  border-radius: 4px;

  ::before {
    content: '';
    position: absolute;
    background: rgba(51, 51, 51, 0.95);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 4px;
  }

  & + div {
    margin-left: 30px;
  }

  span {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    box-sizing: border-box;

    div {
      margin: 15px 0;

      p {
        position: relative;
        color: #eee;
        font-size: 16px;
      }

      :first-child::before {
        content: ',,';
        position: absolute;
        left: calc(13% - 20px);
        top: calc(12% + 16px);
        color: #f7eb06;
        font-family: 'Times New Roman', Times, serif;
        font-size: 40px;
        transform: rotateY(180deg);
      }
    }

    strong {
      display: block;
      position: relative;

      color: #f7eb06;
      font-size: 13px;
    }

    p {
      position: relative;
      font-size: 12px;
      color: #999;
    }
  }
`;
