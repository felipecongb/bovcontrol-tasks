import { getRealm } from "./realm";
import api from "../services/api";

async function syncData() {
    const realm = await getRealm();
    const unsyncedChecklists = realm.objects('ChecklistOn2').filtered('synced == false');

    if (unsyncedChecklists.length > 0) {
        try {
            const checklists = unsyncedChecklists.map(checklist => ({
                _id: checklist._id,
                type: checklist.checklistType,
                amount_of_milk_produced: checklist.milkProduction,
                number_of_cows_head: checklist.cattleCount,
                had_supervision: checklist.hadSupervision,
                farmer: {
                    name: checklist.farmName,
                    city: checklist.city
                },
                from: {
                    name: checklist.farmerName
                },
                to: {
                    name: checklist.supervisorName
                },
                location: {
                    latitude: -23.5505,// Este dado tem de ser Tratado para pegar a localização do dispositivo na hora do cadastro !!!!
                    longitude: -46.6333,
                },
                created_at: checklist.createdAt,
                updated_at: checklist.updatedAt
            }));
            console.log('Checklists:', checklists);
            const response = await api.post('/v1/checkList', {
                checklists
            });
            console.log('Response:', response);

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