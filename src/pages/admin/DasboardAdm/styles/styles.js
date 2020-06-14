import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    max-width: 500px;
  }
`;

export const Grid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(8, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(12, 2fr));
  grid-gap: 20px;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  border-radius: 4px;
  background: #fff;
  margin: 10px 0 10px;
  padding: 20px;
  transition: background 0.5s;
  border: none;
  /* transition: border-bottom 0.5s ease-out; */

  span {
    > div {
      height: 3px;
      width: 0px;
      margin-left: -20px;
      margin-top: 42px;
      border-radius: 4px;
      background: red;
      position: absolute;
      transition: width 0.5s ease-out;
    }
  }
  :hover {
    span {
      > div {
        width: 900px;
      }
    }
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: initial;
  margin-top: -90px;
  margin-left: -10px;
  background: red;
  /* position: absolute; */
  padding: 5px;
  border-radius: 4px;
`;

export const CardBody = styled.div`
  margin-top: 15px;
  text-align: initial;

  > strong {
    color: #333;
  }

  p {
    margin-top: 10px;
  }
`;

export const WindowMessage = styled.div`
  /* display: none; */
  background-color: #fff;
  border: 2px solid red;
  color: #999;
  padding: 50px 25px 100px 25px;
  border-radius: 4px;
  /* margin-top: 40px; */
  margin-left: 45px;
  z-index: 1;
  display: ${(props) => (props.tag ? 'flex' : 'none')};
  align-items: center;
  text-align: center;
  flex-direction: column;
  /* opacity: 0.9; */
  position: absolute;
  width: 50%;
  max-height: 600px;
  /* overflow: auto; */
  animation: slide-mensagem 1s;

  /* @media all and (max-height: 768px) {
    #divContent{
     overflow:auto;
    } */

  @keyframes slide-mensagem {
    from {
      transform: translate3d(0px, -100px, 0px);
      opacity: 0;
    }

    to {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }
  }

  textarea {
    margin-top: 80px;
  }

  h2 {
    height: 40px;
  }

  img {
    width: 120px;
    border-radius: 4px;
  }
`;

export const Close = styled.div`
  position: absolute;
  /* margin-top: -25px; */
  top: 0;
  left: 0;

  svg {
    cursor: pointer;
    margin: none;
  }
`;

export const WindowBannerImg = styled.div`
  /* display: none; */
  background-color: #fff;
  border: 2px solid red;
  color: #999;
  padding: 50px 25px 100px 25px;
  border-radius: 4px;
  /* margin-top: 40px; */
  margin-left: 45px;
  z-index: 1;
  display: ${(props) => (props.tag ? 'flex' : 'none')};
  align-items: center;
  text-align: center;
  flex-direction: column;
  /* opacity: 0.9; */
  position: absolute;
  width: 50%;
  max-height: 600px;
  /* overflow: auto; */
  animation: slide-mensagem 1s;

  /* @media all and (max-height: 768px) {
    #divContent{
     overflow:auto;
    } */

  /* @keyframes slide-mensagem {
    from {
      transform: translate3d(0px, -100px, 0px);
      opacity: 0;
    }

    to {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }
  } */

  textarea {
    margin-top: 80px;
  }

  h2 {
    height: 40px;
  }

  img {
    width: 120px;
    border-radius: 4px;
    cursor: pointer;

    @keyframes slide-mensagem {
      from {
        transform: translate3d(0px, -5px, 0px);
        opacity: 0;
      }

      to {
        transform: translate3d(0px, 0px, 0px);
        opacity: 1;
      }
    }
  }

  a {
    z-index: 1;
  }

  button {
    border: none;
    background: none;
    margin: 10px;
  }

  fieldset {
    display: flex;
    align-items: center;
    border-radius: 4px;
    max-height: 400px;
    overflow: auto;
    /* position: relative; */
  }

  form {
    input {
      margin-top: 10px;
      display: flex;
      position: absolute;
      width: 150px;
      text-align: center;
    }
    select {
      margin-top: 40px;
      display: flex;
      position: absolute;
      width: 150px;
      text-align: center;
      color: #999;
    }
  }
`;

export const DivButton = styled.div`
  text-align: center;
  margin-left: -100px;

  .btn {
    border: 1px solid red;
    border-radius: 4px;
    background: none;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    margin: 10px;
    transition: 0.8s;
    /* flex-direction: row */
    overflow: hidden;
    position: relative;
  }
  .btn1 {
    color: red;
  }
  .btn1:hover {
    strong {
      color: #fff;
      /* z-index: 1; */
      position: relative;
    }
  }
  .btn2 {
    color: red;
  }
  .btn2:hover {
    strong {
      color: #fff;
      /* z-index: 1; */
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
    /* z-index: 1; */
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
  .btn2::before {
    top: 0;
    border-radius: 0 0 50% 50%;
  }
  .btn2:hover::before {
    height: 180%;
  }
`;

// export const Option = styled.div`
//   z-index: 1;
//   background: red;
// `;
