import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import Header from '~/components/Header/Header';
import FloatingButton from '~/components/FloatingButton';
import { updateProfileRequest } from '~/store/modules/user/actions';

const fieldWithOldPassword = (oldPassword, field, fieldMessage) =>
  oldPassword ? field.required(fieldMessage) : field;

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatorio.'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    fieldWithOldPassword(oldPassword, field, 'A senha é obrigatória.')
  ),
  confirmPassword: Yup.string().when('oldPassword', (oldPassword, field) =>
    fieldWithOldPassword(
      oldPassword,
      field,
      'A confirmação da senha é obrigatória.'
    )
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Header />

      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <FloatingButton type="submit">Atualizar perfil</FloatingButton>
      </Form>
    </Container>
  );
}
