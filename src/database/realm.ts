import Realm from "realm";

import { ChecklistSchema } from "./schema/checklist_schema";

export const getRealm = async () => 
    await Realm.open({
        path: "cheklist",
        schema: [ChecklistSchema],
        schemaVersion: 3,
    });
  