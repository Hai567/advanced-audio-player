import { storage } from "$lib/firebase/firebaseConfig"
import { json } from "@sveltejs/kit"
import { ref, listAll } from "firebase/storage"

export const GET = async ({params}) => {
    let returnObj = {}
    let requestedSeriesName = params.seriesName
    let bookRef = ref(storage, requestedSeriesName)
    try{
        let bookData = (await listAll(bookRef)).prefixes
        let books = []
        bookData.forEach(book => {
            books.push({name: book.name})
        })
        returnObj = {
            msg: "success",
            status: 200,
            data: {books}
        }
    }catch(err){
        returnObj = {
            msg: "Can not find the specified book",
            status: 500,
            data: null
        }
    }
    return json(returnObj)
}