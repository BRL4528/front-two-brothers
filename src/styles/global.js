import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}


body {
  -webkit-font-smoothing: antialiased;
  background: #eee;

}

body, input, button {
font: 14px 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}
`;
