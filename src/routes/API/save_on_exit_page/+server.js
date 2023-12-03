import { db } from "$lib/firebase/firebaseConfig"
import { doc, updateDoc } from "firebase/firestore"

export const POST = async function({request}) {
    let playbackData = await request.json()
    await updateDoc(doc(db, "user", "danielHo"), playbackData)
    return new Response()
}