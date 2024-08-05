import realm from '../../schema/checklist_schema';

function updateChecklist(id, farmerName, farmName, city, supervisorName, milkProduction, cattleCount) {
  realm.write(() => {
    let checklist = realm.objectForPrimaryKey('Checklist', id);
    if (checklist) {
      checklist.farmerName = farmerName;
      checklist.farmName = farmName;
      checklist.city = city;
      checklist.supervisorName = supervisorName;
      checklist.milkProduction = milkProduction;
      checklist.cattleCount = cattleCount;
      checklist.updatedAt = new Date();
    }
  });
}

export default updateChecklist;