import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../../styles/colors';

export interface GridBasePageProps {
    children: React.ReactNode;
}

const GridBasePage: React.FC<GridBasePageProps> = ({children}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
           {children}
           </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.white,
    },
});

export default GridBasePage;