import { storage } from "$lib/firebase/firebaseConfig"
import { json } from "@sveltejs/kit"
import { ref, listAll } from "firebase/storage"

export const GET = async ({params}) => {
    let returnObj = {}
    let bookChapters = []
    let requiredSeriesName = params.seriesName
    let requestedBookName = params.bookName
    let requestedBookRef = ref(storage, `${requiredSeriesName}/${requestedBookName}`)
    try {
        let fetchedBookChapters = (await listAll(requestedBookRef)).prefixes
        fetchedBookChapters.forEach(chapter => {
            bookChapters.push({name: chapter.name})
        })
        returnObj = {
            msg: "Success",
            status: 200,
            data: {bookChapters}
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