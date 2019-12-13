import React from 'react';

import { Container } from './styles';

export default function EntrepriseLogo({ name, Logo }) {
  return (
    <Container to="/">
      <Logo />
      <span>{name}</span>
    </Container>
  );
}
