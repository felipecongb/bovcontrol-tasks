export const ChecklistSchema = {
  name: 'ChecklistOne',
  properties: {
    _id: "string",
    farmerName: 'string',
    farmName: 'string',
    city: 'string',
    cep: 'string?',
    supervisorName: 'string?',
    checklistType: 'string',
    milkProduction: 'int',
    cattleCount: 'int',
    hadSupervision: 'bool',
    createdAt: 'date',
    updatedAt: 'date?',
    // location: {
    //   latitude: 'float',
    //   longitude: 'float',
    // },
    synced: 'bool',
  },
  primaryKey: "_id",
};

