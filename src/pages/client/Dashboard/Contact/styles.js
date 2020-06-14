import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
  background: #333;
  padding: 27px 0 32px;
  align-items: center;
  justify-content: center;
`;

export const Information = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-right: 10px;

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    color: #f7eb04;
    margin: 5px 0;

    ::before {
      content: '';
      width: 75px;
      height: 3px;
      background-color: #f6f6f6;
      display: block;
      margin: 5px 0 5px 25px;
    }

    ::after {
      content: '';
      width: 75px;
      height: 3px;
      background-color: #f6f6f6;
      display: block;
      margin: 5px 0 5px 25px;
    }
  }

  p {
    color: #f6f6f6;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 470px) {
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: column;

    .title {
      color: #f7eb04;
      padding: 5px 10px;
      font-size: 32px;
    }

    strong {
      color: #f6f6f6;
      padding: 5px 10px;
      margin: 0;
      font-size: 24px;
      text-align: center;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5px;

      a {
        color: #f7eb04;
        cursor: pointer;
        transition: color 0.5s;

        :hover {
          color: #54dc54;
        }
      }

      svg {
        color: #54dc54;
        margin-right: 5px;
        width: 20px;
        justify-self: center;
      }
    }

    @media (max-width: 665px) {
      .title {
        font-size: 24px;
      }

      strong {
        font-size: 16px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 290px;

    input {
      width: 100%;
      height: 30px;
      padding-left: 5px;
      color: #333;
      font-weight: bold;
      border: none;
      margin: 5px 0;
      border-radius: 4px;
      background: #f6f6f6;
    }

    span {
      color: #f7eb04;
      font-weight: bold;
      margin-top: 10px;
      align-self: center;
    }

    .contact {
      display: flex;
      justify-content: space-between;

      > input {
        width: 123px;
      }
    }

    textarea {
      width: 100%;
      height: 70px;
      padding-left: 5px;
      color: #333;
      font-weight: bold;
      border: none;
      margin: 5px 0;
      border-radius: 4px;
      background: #f6f6f6;
      padding-top: 5px;
      resize: none;
    }

    button {
      height: 30px;
      background: #f7eb04;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      color: #333;
      opacity: 0.6;
      margin-top: 15px;
      cursor: pointer;
      transition: opacity 0.6s;

      :hover {
        opacity: 1;
      }
    }
  }
`;
