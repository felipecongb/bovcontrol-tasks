import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Pressable, PressableProps } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  home: undefined;
  new: undefined;
  NewCheckList: { checklist: ChecklistProps }; // Adicione esta linha
};

import {
  Container,
  Status,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer,
  OrderStyleProps
} from './styles';

// Tipagem para os dados do Checklist
export type ChecklistProps = OrderStyleProps & {
  _id: string;
  farmerName: string;
  farmName: string;
  city: string;
  cep?: string;
  supervisorName?: string;
  checklistType: string;
  milkProduction: number;
  cattleCount: number;
  hadSupervision: boolean;
  createdAt: Date;
  updatedAt?: Date;
  synced: boolean;
}

type Props = PressableProps & {
  data: ChecklistProps;
};

export function Taks({ data, ...rest }: Props) {
  const theme = useTheme();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function handlePress() {
    navigation.navigate('NewCheckList', { checklist: data });
  }

  return (
    <Container {...rest} onPress={handlePress}>
      <Content>
        <Header>
          <Title>{data.farmName}</Title>
          <MaterialIcons
            name="sync"
            size={24}
            color={data.synced ? 'green' : 'red'}
          />
        </Header>
        {data.farmerName && (
            <Info>
              <MaterialIcons name="person" size={16} color={theme.COLORS.SUBTEXT} />
              <Label>
                {data.farmerName}
              </Label>
            </Info>
          )}

        <Footer>
          <Info>
            <MaterialIcons name="schedule" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {moment(data.createdAt).format("DD/MM - HH:MM")}
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="place" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {data.city}
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}