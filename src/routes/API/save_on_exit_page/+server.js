import { updateDoc } from "firebase/firestore"
import {generateAudioRef} from "$lib/helpers/generateAudioRef"

export const POST = async function({request}) {
    let data = await request.json()
    await updateDoc(generateAudioRef("Daniel", data.audioString), {time: data.time})
    return new Response()
}