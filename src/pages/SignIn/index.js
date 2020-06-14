import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

import { Content, Wrapper } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail Inválido').required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Wrapper>
      <Content>
        <Form onSubmit={handleSubmit} schema={schema}>
          <img src={logo} alt="GoBarber" />

          <Input type="email" name="email" placeholder="E-mail" />
          <Input type="password" name="password" placeholder="Senha" />

          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        </Form>
      </Content>
    </Wrapper>
  );
}
