import React from 'react';

import { IconButton } from '../IconButton';

import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {

  return (
    <Container>
      <Greeting>
        <Title>Bov Task</Title>
        <SubTitle>Liste das Terefas aqui.</SubTitle>
      </Greeting>

      <IconButton icon="logout" />
    </Container>
  );
}
