import NetInfo from "@react-native-community/netinfo";
import realm from '../database/schema/checklist_schema';
import api from './api';

let syncInterval: NodeJS.Timeout | null = null;

function startSync() {
  syncInterval = setInterval(syncData, 5000);
  NetInfo.addEventListener(handleConnectivityChange);
}

function stopSync() {
  if (syncInterval) {
    clearInterval(syncInterval);
  }
  NetInfo.removeEventListener(handleConnectivityChange);
}

function handleConnectivityChange(state: any) {
  if (state.isConnected) {
    syncData();
  }
}

async function syncData() {
  try {
    const items = realm.objects('ChecklistItem');
    const unsyncedItems = items.filtered('synced == false');

    if (unsyncedItems.length > 0) {
      await api.post('/sync', { items: unsyncedItems });
      realm.write(() => {
        unsyncedItems.forEach(item => {
          item.synced = true;
        });
      });
      console.log('Dados sincronizados com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao sincronizar os dados:', error);
  }
}

export { startSync, stopSync };
