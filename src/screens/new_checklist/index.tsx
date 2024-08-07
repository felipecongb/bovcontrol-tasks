import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { View, Text, Switch, Alert, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { IconButton } from '../../components/IconButton';

interface RouteParams {
  checklist: {
    _id: string; // Adicione o identificador do checklist
    farmerName: string;
    farmName: string;
    cep?: string;
    city: string;
    supervisorName?: string;
    checklistType: string;
    milkProduction: number;
    cattleCount: number;
    hadSupervision: boolean;
  };
  [key: string]: any; // Add index signature
}

import { getRealm } from '../../database/realm';
import ViaCep from '../../services/cep';

export function NewCheckList() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const [farmerName, setFarmerName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [checklistType, setChecklistType] = useState('');
  const [milkProduction, setMilkProduction] = useState('');
  const [cattleCount, setCattleCount] = useState('');
  const [hadSupervision, setHadSupervision] = useState(false);

  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParams>>();
  const { checklist } = route.params;

  useEffect(() => {
    if (checklist) {
      setFarmerName(checklist.farmerName);
      setFarmName(checklist.farmName);
      setCep(checklist.cep || '');
      setCity(checklist.city);
      setSupervisorName(checklist.supervisorName || '');
      setChecklistType(checklist.checklistType);
      setMilkProduction(String(checklist.milkProduction));
      setCattleCount(String(checklist.cattleCount));
      setHadSupervision(checklist.hadSupervision);
    }
  }, [checklist]);

  function handleBack() {
    navigation.goBack();
  }

  function handleNextStep() {
    if (farmerName && farmName && city) {
      setStep(2);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  async function handleCepChange(value: string): Promise<void> {
    let formattedCep = value.replace(/\D/g, '');
    if (formattedCep.length > 5) {
      formattedCep = formattedCep.replace(/(\d{5})(\d)/, '$1-$2');
    }
  
    setCep(formattedCep);
  
    if (formattedCep.length === 9) {
      try {
        const response = await ViaCep.get(`/ws/${formattedCep.replace('-', '')}/json/`);
        const data = response.data;
        if (data.localidade) {
          setCity(data.localidade);
        } else {
          alert('CEP não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        alert('Não Foi Possível Encontrar a Cidade.');
      }
    } else {
      setCity('');
    }
  }

  async function handleSave() {
    if (
      farmerName &&
      farmName &&
      city &&
      checklistType &&
      milkProduction &&
      cattleCount &&
      hadSupervision !== null
    ) {
      const realm = await getRealm();
      try {
        setIsLoading(true);

        realm.write(() => {
          const checklistId = checklist?._id;
          if (checklistId) {
            const existingChecklist = realm.objectForPrimaryKey('ChecklistOne', checklistId);
            if (existingChecklist) {
              existingChecklist.farmerName = farmerName;
              existingChecklist.farmName = farmName;
              existingChecklist.city = city;
              existingChecklist.cep = cep || null;
              existingChecklist.supervisorName = supervisorName || null;
              existingChecklist.checklistType = checklistType;
              existingChecklist.milkProduction = Number(milkProduction);
              existingChecklist.cattleCount = Number(cattleCount);
              existingChecklist.hadSupervision = hadSupervision;
              existingChecklist.updatedAt = new Date();
              existingChecklist.synced = false;
              console.log('Checklist atualizado:', existingChecklist);
            } else {
              Alert.alert('Checklist não encontrado.');
            }
          } else {
            // Criar novo checklist
            const created = realm.create("ChecklistOne", {
              _id: uuid.v4(), 
              farmerName,
              farmName,
              city,
              cep: cep || null,
              supervisorName: supervisorName || null,
              checklistType,
              milkProduction: Number(milkProduction),
              cattleCount: Number(cattleCount),
              hadSupervision,
              createdAt: new Date(),
              updatedAt: null,
              synced: false,
            });
            console.log('Checklist salvo:', created);
          }
        });

        Alert.alert('Checklist salvo com sucesso!');
        setIsLoading(false);
        handleBack();
      } catch (error) {
        console.error('Erro ao salvar o checklist:', error);
        Alert.alert('Não foi possível criar o checklist.');
      } finally {
        setIsLoading(false);
        realm.close();
      }
    } else {
      Alert.alert("Por favor, preencha todos os campos obrigatórios.");
    }
  }
  
  const checklistOptions = ["BPA", "Antibiótico", "BPF"];

  return (
    <Container>
      <Header>
        <Title>Nova Tarefa</Title>
        <IconButton icon="chevron-left" onPress={handleBack} />
      </Header>

      <Form>
        {step === 1 && (
          <>
            <Input
              placeholder="Nome do Agricultor"
              value={farmerName}
              onChangeText={setFarmerName}
            />

            <Input
              placeholder="Nome da Fazenda"
              value={farmName}
              onChangeText={setFarmName}
            />

            <Input
              placeholder="CEP"
              value={cep}
              onChangeText={handleCepChange}
              keyboardType="numeric"
            />

            {city && (
              <Input
                value={city}
                editable={false}
              />
            )}

            <Button
              title="Próximo"
              onPress={handleNextStep}
            />
          </>
        )}

        {step === 2 && (
          <>
            <Input
              placeholder="Nome do Supervisor"
              value={supervisorName}
              onChangeText={setSupervisorName}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
              {checklistOptions.map(option => (
                <TouchableOpacity
                  key={option}
                  style={{
                    padding: 10,
                    backgroundColor: checklistType === option ? 'blue' : 'grey',
                    borderRadius: 5,
                  }}
                  onPress={() => setChecklistType(option)}
                >
                  <Text style={{ color: 'white' }}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Input
              placeholder="Produção de Leite"
              value={milkProduction}
              onChangeText={setMilkProduction}
              keyboardType="numeric"
            />

            <Input
              placeholder="Contagem de Gado"
              value={cattleCount}
              onChangeText={setCattleCount}
              keyboardType="numeric"
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text>Teve supervisão no mês</Text>
              <Switch
                value={hadSupervision}
                onValueChange={setHadSupervision}
              />
            </View>

            <Button
              title="Salvar"
              isLoading={isLoading}
              onPress={handleSave}
            />
          </>
        )}
      </Form>
    </Container>
  );
}
