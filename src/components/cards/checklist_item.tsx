import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

interface ChecklistItemProps {
  farmerName: string;
  farmName: string;
  city: string;
  checklistType: string;
  milkProduction: number;
  cattleCount: number;
  hadSupervision: boolean;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({
  farmerName,
  farmName,
  city,
  checklistType,
  milkProduction,
  cattleCount,
  hadSupervision,
}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{farmerName}</Text>
      <Text style={styles.itemSubText}>{farmName}</Text>
      <Text style={styles.itemSubText}>{city}</Text>
      <Text style={styles.itemSubText}>{checklistType}</Text>
      <Text style={styles.itemSubText}>{milkProduction} L de leite</Text>
      <Text style={styles.itemSubText}>{cattleCount} cabeças de gado</Text>
      <Text style={styles.itemSubText}>
        Supervisionado: {hadSupervision ? 'Sim' : 'Não'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: colors.neutral,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemSubText: {
    fontSize: 16,
    color: colors.dark,
  },
});

export default ChecklistItem;