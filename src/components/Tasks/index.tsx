import React, { useState, useEffect, useCallback} from "react";
import { Alert, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { Load } from "../Load";
import { Taks, taskProps } from "../Task";

import { Container} from "./styles";
import { getRealm } from "../../database/realm";

export function Tasks() {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<taskProps[]>([]);



  async function fetchTasks() {
    setIsLoading(true);
    const realm = await getRealm();
    try {
      const response = realm
        .objects<taskProps[]>("ChecklistOne")
        .sorted("createdAt", true)
        .toJSON() as taskProps[];
      setOrders(response);
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel buscar as tarefas");
    } finally {
      realm.close();
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchTasks();
  }, []));

  return (
    <Container>

      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Taks data={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      )}
    </Container>
  );
}
