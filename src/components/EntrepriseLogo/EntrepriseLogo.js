import React from 'react';

import { Container } from './styles';

export default function EntrepriseLogo({ name, Logo }) {
  return (
    <Container>
      <Logo />
      <span>{name}</span>
    </Container>
  );
}
