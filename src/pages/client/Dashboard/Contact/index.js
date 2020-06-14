import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { FaWhatsapp } from 'react-icons/fa';
import * as Yup from 'yup';

import api from '~/services/api';

import { Wrapper, Information, Container } from './styles';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  cel: Yup.string(),
  tel: Yup.string(),
  message: Yup.string().required('Mensagem é obrigatória'),
});

function Contact() {
  async function handleSubmit({ name, email, cel, tel, message }) {
    await api.post('contacts', {
      name,
      email,
      cel,
      tel,
      message,
    });

    toast.success('Messagem enviado com sucesso');
  }

  return (
    <Wrapper>
      <Container>
        <Information>
          <img src={logo} alt="TwoBrothers" />
          <h3>LOCALIZAÇÃO</h3>
          <p>
            Rua São Paulo, 1600, centro - São Gabriel do Oeste - MS - CEP:
            79490-000
          </p>
        </Information>
        <div className="row">
          <strong className="title" id="contatos">
            Você tem alguma dúvida?
          </strong>
          <strong>Sinta-se livre para nos contatar!</strong>
          <span>
            <FaWhatsapp size={19} />
            <a href="https://api.whatsapp.com/send?phone=5567998408117">
              (67) 9 9840-8117
            </a>
          </span>
        </div>
        <Form onSubmit={handleSubmit} schema={schema}>
          <div>
            <Input name="name" placeholder="Nome" />
          </div>
          <div>
            <Input name="email" type="email" placeholder="E-mail" />
          </div>
          <div className="contact">
            <Input name="cel" placeholder="Celular" />
            <Input name="tel" placeholder="Telefone" />
          </div>
          <div>
            <Textarea name="message" placeholder="Messagem" />
          </div>
          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default Contact;
