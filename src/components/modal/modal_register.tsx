import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FormField } from '../form';

interface ModalRegisterProps {
    modalVisible: boolean;
    closeModal: () => void;
}

const ModalRegister: React.FC<ModalRegisterProps> = ({ modalVisible, closeModal }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => closeModal()}>
                <Text style={styles.openButton}>Open Modal</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => closeModal()}
            >
                <View style={styles.modalContainer}>
                <SafeAreaView >
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                        <FormField/>
                    </View>
                </SafeAreaView>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    openButton: {
        fontSize: 16,
        color: 'blue',
        marginBottom: 20,
    },
    modalContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    closeButton: {
        fontSize: 16,
        color: 'red',
    },
});

export default ModalRegister;