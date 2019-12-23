import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import AuthLayout from '~/pages/_layouts/AuthLayout';
import FloatingButton from '~/components/FloatingButton';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit() {}

  return (
    <AuthLayout>
      <>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Seu nome" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <FloatingButton type="submit">Logar</FloatingButton>
          <Link to="/login">Já tenho login</Link>
        </Form>
      </>
    </AuthLayout>
  );
}
