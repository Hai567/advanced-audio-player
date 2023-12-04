import { storage } from "$lib/firebase/firebaseConfig"
import { json } from "@sveltejs/kit"
import { ref, getDownloadURL } from "firebase/storage"

export const GET = async ({params}) => {
    let returnObj = {}
    let requiredSeriesName = params.seriesName
    let requiredBookName = params.bookName
    let requiredChapter = params.chapter
    let requiredAudioString = params.audioString

    try {
        let requiredAudioRef = ref(storage, `/${requiredSeriesName}/${requiredBookName}/${requiredChapter}/${requiredAudioString}`)
        let audioUrl = await getDownloadURL(requiredAudioRef)
        returnObj = {
            msg: "Success",
            status: 200,
            data: {audioUrl}
        }
    } catch (error) {
        returnObj = {
            msg: "Can not find the audio for the specified chapter of the book",
            status: 500,
            data: null
        }
    }
    return json(returnObj)
}