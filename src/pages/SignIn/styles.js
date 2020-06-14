import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 11%;
  text-align: center;
  background: #eee;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  form {
    display: flex;
    width: 360px;
    height: 420px;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    align-items: center;
  }
  img {
    width: 86px;
    height: 98px;
    margin-top: 23px;
    margin-bottom: 10px;
  }
  input {
    margin-top: 15px;
    width: 300px;
    height: 40px;
    border: 1px solid #eee;
    font-weight: bold;
    color: #666;
    border-radius: 4px;
    padding: 4px;
  }

  button {
    margin-top: 30px;
    background: #f7eb06;
    border: none;
    width: 300px;
    height: 40px;
    color: #333;
    border-radius: 4px;
    font-weight: bold;
    transition: background 0.6s;
    transition: color 0.6s;
    &:hover {
      background: ${darken(0.1, '#f7eb06')};
      color: #eee;
    }
  }
`;
