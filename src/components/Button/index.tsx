import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Load } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  enabled?: boolean; // Add the enabled prop
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}