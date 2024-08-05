import realm from '../../schema/checklist_schema';

const createChecklist = (
  id: string,
  farmerName: string,
  farmName: string,
  city: string,
  supervisorName: string,
  checklistType: string,
  milkProduction: number,
  cattleCount: number,
  hadSupervision: boolean
) => {
  realm.write(() => {
    const newChecklist = realm.create('Checklist', {
      _id: id,
      farmerName: farmerName,
      farmName: farmName,
      city: city,
      supervisorName: supervisorName,
      checklistType: checklistType,
      milkProduction: milkProduction,
      cattleCount: cattleCount,
      hadSupervision: hadSupervision,
      createdAt: new Date(),
      updatedAt: null,
      synced: false,
    });
    console.log('New checklist created:', newChecklist);
  });
};

export default createChecklist;