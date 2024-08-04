import Realm from "realm";
import { App, Credentials } from "realm";
import { ChecklistSchema } from "./schema/checklist_schema";

const app = new App({ id: "bovcontrol-hjkkago" });

let realmInstance = null;

export async function initializeRealm() {
  try {
    const credentials = Credentials.anonymous();
    const user = await app.logIn(credentials);

    // Abra o Realm com sincronização habilitada
    realmInstance = await Realm.open({
      schema: [ChecklistSchema],
      sync: {
        user: user,
        partitionValue: "user=" + user.id,
        onError: (error) => {
          console.error("Error with Realm Sync:", error);
        },
      },
    });

    return realmInstance;
  } catch (err) {
    console.error("Failed to open Realm:", err);
  }
}

export function getRealmInstance() {
  if (!realmInstance) {
    throw new Error("Realm is not initialized. Call initializeRealm() first.");
  }
  return realmInstance;
}
