import { doc, collection } from "@firebase/firestore"
import { db } from "$lib/firebase/firebaseConfig"

export const generateAudioRef = (userName, audioString) => {
    return doc(collection(doc(collection(db, "users"), userName), "savedTime"), audioString)
}