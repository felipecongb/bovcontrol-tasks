import React from 'react';
import { Text, StyleSheet } from 'react-native';

export interface TitleTextProps {
    text: string;
    }

const TitleText: React.FC<TitleTextProps> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default TitleText;