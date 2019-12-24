import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function ProfileHeaderContainer({ profile }) {
  const dispatch = useDispatch();
  const onClickSignOut = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <span>{profile.name}</span>
      <div>
        <Link to="/">Meu perfil</Link>
        <button type="button" onClick={onClickSignOut}>
          Sair
        </button>
      </div>
    </Container>
  );
}
