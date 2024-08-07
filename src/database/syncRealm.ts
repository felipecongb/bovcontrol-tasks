import { getRealm } from "./realm";
import api from "../services/api";

async function syncData() {
    const realm = await getRealm();
    const unsyncedChecklists = realm.objects('ChecklistOne').filtered('synced == false');

    if (unsyncedChecklists.length > 0) {
      try {
        const response = await api.post('/', unsyncedChecklists);
        if (response.status === 200) {
          realm.write(() => {
            unsyncedChecklists.forEach(checklist => {
              checklist.synced = true;
              checklist.updatedAt = new Date();
            });
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        realm.close();
      }
    }
  }
  export { syncData };