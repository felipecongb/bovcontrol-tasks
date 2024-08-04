import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {ChecklistItem} from '../cards/';

const ChecklistListScreen = () => {
  const [checklists, setChecklists] = useState([
    {
      _id: '1',
      farmerName: 'João Silva',
      farmName: 'Fazenda Boa Vista',
      city: 'São Paulo',
      supervisorName: 'Carlos Souza',
      checklistType: 'Mensal',
      milkProduction: 1200,
      cattleCount: 150,
      hadSupervision: true,
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-15'),
      synced: true,
    },
    {
      _id: '2',
      farmerName: 'Maria Oliveira',
      farmName: 'Fazenda Esperança',
      city: 'Rio de Janeiro',
      supervisorName: 'Ana Lima',
      checklistType: 'Semanal',
      milkProduction: 800,
      cattleCount: 100,
      hadSupervision: false,
      createdAt: new Date('2023-02-01'),
      updatedAt: new Date('2023-02-10'),
      synced: false,
    },
    {
      _id: '3',
      farmerName: 'Pedro Santos',
      farmName: 'Fazenda Verde',
      city: 'Belo Horizonte',
      supervisorName: 'Marcos Pereira',
      checklistType: 'Quinzenal',
      milkProduction: 950,
      cattleCount: 120,
      hadSupervision: true,
      createdAt: new Date('2023-03-01'),
      updatedAt: new Date('2023-03-05'),
      synced: true,
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={checklists}
        style={{ width: '100%', height: '100%' }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ChecklistItem
            farmerName={item.farmerName}
            farmName={item.farmName}
            city={item.city}
            checklistType={item.checklistType}
            milkProduction={item.milkProduction}
            cattleCount={item.cattleCount}
            hadSupervision={item.hadSupervision}
          />
        )}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default ChecklistListScreen;