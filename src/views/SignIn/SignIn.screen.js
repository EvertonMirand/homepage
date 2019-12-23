import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import AuthLayout from '~/pages/_layouts/AuthLayout';
import FloatingButton from '~/components/FloatingButton';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit() {}

  return (
    <AuthLayout>
      <>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <FloatingButton type="submit">Logar</FloatingButton>
        </Form>
      </>
    </AuthLayout>
  );
}
