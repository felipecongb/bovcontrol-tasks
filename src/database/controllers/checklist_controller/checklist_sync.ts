import api from "../../../services/api";
import realm from "../../realm_config";

const syncWithServer = async () => {
    try {
      const items = realm.objects('ChecklistItem');
      await api.post('/sync', { items });
      console.log('Dados sincronizados com sucesso!');
    } catch (error) {
      console.error('Erro ao sincronizar os dados:', error);
    }
  };