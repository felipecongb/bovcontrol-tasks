import realm from "../../realm_config";

 function deleteChecklist(id) {
    const checklist = realm.objects("Checklist").filtered(`id = ${id}`);
    realm.write(() => {
        realm.delete(checklist);
    });
}

export default deleteChecklist;