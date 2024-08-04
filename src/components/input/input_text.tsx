import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface TextInputProps {
    value: string;
    onChangeText: (value: string) => void;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

const InputText: React.FC<TextInputProps> = ({ value, onChangeText, keyboardType}) => {
    const handleChange = (text: string) => {
        onChangeText(text);
    };

    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={handleChange}
            keyboardType='default'
        />
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontSize: 16,
    },
});

export default InputText;