import React from 'react';
import { useTheme } from 'styled-components/native';

import { Filter } from '../Filter';
import { Container, Title, Options } from './styles';

type Props = {
  onFilter: (status: string) => void;
}

export function Filters({ onFilter }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Options>
        <Filter
          title="A Fazer"
          backgroundColor={theme.COLORS.SECONDARY}
          onPress={() => onFilter('open')}
        />

        <Filter
          title="Feito"
          backgroundColor={theme.COLORS.PRIMARY}
          onPress={() => onFilter('closed')}
        />
      </Options>
    </Container>
  );
}