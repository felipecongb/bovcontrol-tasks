import realm from "../../schema/checklist_schema";

const getAllChecklists = () => {
    try {
        const checklists = realm.objects('Checklist');
        console.log('Fetched checklists:', checklists);
        
        if (checklists.length > 0) {
            return checklists;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Failed to fetch checklists:', error);
        return [];
    }
};

export default {getAllChecklists};