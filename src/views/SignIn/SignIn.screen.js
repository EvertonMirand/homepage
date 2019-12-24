import React from 'react';

import { useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import AuthLayout from '~/pages/_layouts/AuthLayout';
import FloatingButton from '~/components/FloatingButton';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <AuthLayout>
      <>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <FloatingButton type="submit">Logar</FloatingButton>
          <Link to="/register">Criar conta gratuita</Link>
        </Form>
      </>
    </AuthLayout>
  );
}
