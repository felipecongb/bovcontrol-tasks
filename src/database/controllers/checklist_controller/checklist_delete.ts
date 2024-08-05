import realm from "../../schema/checklist_schema";

 function deleteChecklist(id) {
    const checklist = realm.objects("Checklist").filtered(`id = ${id}`);
    realm.write(() => {
        realm.delete(checklist);
    });
}

export default deleteChecklist;