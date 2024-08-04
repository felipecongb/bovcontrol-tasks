import Realm from 'realm';
import {ChecklistSchema} from './schema/checklist_schema';

const realm = new Realm({ schema: [ChecklistSchema], schemaVersion: 1 });

export default realm;

