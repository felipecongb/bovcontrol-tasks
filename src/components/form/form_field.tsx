import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import {default as  TextInput }from '../input/input_text';

const FormField = () => {
    const [formData, setFormData] = useState({
        _id: '',
        farmerName: '',
        farmName: '',
        city: '',
        supervisorName: '',
        checklistType: '',
        milkProduction: 0,
        cattleCount: 0,
        hadSupervision: false,
        createdAt: new Date(),
        updatedAt: null,
        synced: false,
    });

    const handleChange = (name: string, value: any) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <View>
            <Text>Fazendeiro:</Text>
            <TextInput
                value={formData.farmerName}
                onChangeText={(value) => handleChange('farmerName', value)}
            />
            <Text>Fazenda Nome:</Text>
            <TextInput
                value={formData.farmName}
                onChangeText={(value) => handleChange('farmName', value)}
            />
            <Text>Cidade:</Text>
            <TextInput
                value={formData.city}
                onChangeText={(value) => handleChange('city', value)}
            />
            <Text>Supervisor:</Text>
            <TextInput
                value={formData.supervisorName}
                onChangeText={(value) => handleChange('supervisorName', value)}
            />
            <Text>checklistType:</Text>
            <TextInput
                value={formData.checklistType}
                onChangeText={(value) => handleChange('checklistType', value)}
            />
            <Text>Produção Leiteira:</Text>
            <TextInput
                value={formData.milkProduction.toString()}
                onChangeText={(value) => handleChange('milkProduction', parseInt(value))}
                keyboardType="numeric"
            />
            <Text>cattleCount:</Text>
            <TextInput
                value={formData.cattleCount.toString()}
                onChangeText={(value) => handleChange('cattleCount', parseInt(value))}
                keyboardType="numeric"
            />
            <Text>hadSupervision:</Text>
            {/* <CheckBox
                value={formData.hadSupervision}
                onValueChange={(value) => handleChange('hadSupervision', value)}
            /> */}
            <Text>updatedAt:</Text>
            <TextInput
                value={formData.updatedAt ? formData.updatedAt.toISOString().split('T')[0] : ''}
                onChangeText={(value) => handleChange('updatedAt', value ? new Date(value) : null)}
                keyboardType="numeric"
            />
            <Text>synced:</Text>
            {/* <CheckBox
                value={formData.synced}
                onValueChange={(value) => handleChange('synced', value)}
            /> */}
            <Button title="Salvar" onPress={handleSubmit} />
        </View>
    );
};

export default FormField;