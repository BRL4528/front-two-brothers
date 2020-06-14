/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;
  // const signed = false;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboardAdm" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.prototype = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
