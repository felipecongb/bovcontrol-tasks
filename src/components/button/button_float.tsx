import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import colors from '../../styles/colors';

export interface FloatButtonProps {
    onPress?: () => void;
}


const FloatButton: React.FC<FloatButtonProps > = ({onPress}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={styles.containner}
  >
    <Entypo name="plus" size={24} color={colors.white} />
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    containner:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 70,
        right: 30,
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 100,
      }
});

export default FloatButton;