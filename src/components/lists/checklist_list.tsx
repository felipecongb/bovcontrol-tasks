import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useQuery  from 'realm';
import {ChecklistItem} from '../cards/';

const ChecklistListScreen = () => {
  const [checklists, setChecklists] = useState([]);

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