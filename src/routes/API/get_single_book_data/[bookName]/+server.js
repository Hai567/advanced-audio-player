import { storage } from "$lib/firebase/firebaseConfig"
import { json } from "@sveltejs/kit"
import { ref, listAll } from "firebase/storage"

export const GET = async ({params}) => {
    let returnObj = {}
    let requestedBookName = params.bookName
    let bookRef = ref(storage, requestedBookName)
    try{
        let bookData = (await listAll(bookRef)).prefixes
        let bookParts = []
        bookData.forEach(part => {
            bookParts.push({name: part.name})
        })
        returnObj = {
            msg: "success",
            status: 200,
            data: {bookParts}
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