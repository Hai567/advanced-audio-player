import { getDoc, doc, setDoc, collection } from "@firebase/firestore"
import { db } from "$lib/firebase/firebaseConfig"

export const createInitialAudioRef = async (userName, audioString) => {
    /**
     * Check if user has not listened to the audio. If yes, then skip. If not, then create an initial audio reference for that one.
     *
     * @param {string} audioString The audio string (name) for the audio (what the audio is called)
     * @returns true if need to create a new one
     * @returns false if no need to create a new one
     */
    let currentAudioRef = doc(collection(doc(collection(db, "users"), userName), "savedTime"), audioString)
    if (!(await getDoc(currentAudioRef)).exists()){
        await setDoc(currentAudioRef, {time: 0})
        return false
    }else{
        return true
    }
}