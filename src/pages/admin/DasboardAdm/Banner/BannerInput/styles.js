import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-left: 100px;

  .btn {
    border: 1px solid red;
    border-radius: 4px;
    background: none;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    margin: 10px;
    transition: 0.8s;

    overflow: hidden;
    position: absolute;
  }
  .btn1 {
    color: red;
  }
  .btn1:hover {
    strong {
      color: #fff;

      position: relative;
    }
  }

  .btn::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: red;

    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  .btn1::before {
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  .btn1:hover::before {
    height: 180%;
  }

  input {
    display: none;
  }
`;
