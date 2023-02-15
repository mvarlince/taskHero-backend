import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
import service_account from "./service_account.json" assert {type: "json"}

export default function getFirestoreInstance() {
    //check if app has already been initialized
    const isInitialized = getApps().length > 0
    if (!isInitialized){ // if not initialized, connect to firebase
        initializeApp({
            credential: cert(service_account)
        })
    }
    return getFirestore()
}