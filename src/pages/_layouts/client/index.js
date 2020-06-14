import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

// eslint-disable-next-line react/prop-types
export default function LayoutClient({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

LayoutClient.prototype = {
  children: PropTypes.element.isRequired,
};
