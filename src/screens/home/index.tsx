import React, {useEffect} from 'react';
import { Container } from './styles';
import NetInfo from '@react-native-community/netinfo';
import {syncData}  from '../../database/syncRealm';

import { Header } from '../../components/Header';
import { Tasks } from '../../components/Tasks';
import {Button} from '../../components/Button'; 

export function Home({ navigation }) {
  const data ={
    "_id": "", 
    "cattleCount": 0, 
    "cep": "", 
    "checklistType": "", 
    "city": "", "createdAt": 0, 
    "farmName": "", 
    "farmerName": "", 
    "hadSupervision": false, 
    "milkProduction": 0, 
    "supervisorName": "", 
    "synced": false, 
    "updatedAt": null
  }

  function handlePress() {
    navigation.navigate('NewCheckList', { checklist: data });
  }
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        syncData();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container>                 
      <Header />
      <Tasks />

      <Button
        title="Novo"
        onPress={handlePress}
      />
    </Container>
  );
}