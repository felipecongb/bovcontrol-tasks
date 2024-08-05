// src/realm/realmConfig.js
import {Realm} from 'realm';

export const ChecklistSchema = {
  name: 'Checklist',
  properties: {
    _id: 'objectId',
    farmerName: 'string',
    farmName: 'string',
    city: 'string',
    supervisorName: 'string?',
    checklistType: 'string',
    milkProduction: 'int',
    cattleCount: 'int',
    hadSupervision: 'bool',
    createdAt: 'date',
    updatedAt: 'date?',
    synced: 'bool',
  },
  primaryKey: '_id',
};

const realm = new Realm({schema: [ChecklistSchema]});
export default realm;
