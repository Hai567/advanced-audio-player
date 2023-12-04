import { storage } from "$lib/firebase/firebaseConfig"
import { json } from "@sveltejs/kit"
import { ref, listAll } from "firebase/storage"
export const GET = async ({params}) => {
    let audioNames = []
    let returnObj= {}
    let requiredSeriesName = params.seriesName
    let requiredBookName = params.bookName
    let requiredChapter = params.chapter
    let audioInChapterRef = ref(storage, `/${requiredSeriesName}/${requiredBookName}/${requiredChapter}`)
    try {
        let audioInChapter = (await listAll(audioInChapterRef)).items
        audioInChapter.forEach(audio => {
            audioNames.push({name: audio.name})
        });
        returnObj = {
            msg: "success",
            status: 200,
            data: {audioNames}
        }
    } catch (error) {
        returnObj = {
            msg: "Can not find any chapter in the specified book",
            status: 500,
            data: null
        }
    }
    return json(returnObj)
}