import { storage } from "$lib/firebase/firebaseConfig"
import { ref, listAll } from "firebase/storage"
import { json } from "@sveltejs/kit"
export const GET = async function() {
    let totalBooks = []
    let allBooksRef = ref(storage)
    let returnObj = {}
    try{
        let booksData = (await listAll(allBooksRef, "")).prefixes
        booksData.forEach(book => {
            let bookPath = book.fullPath // Can be used as book's name as well
            totalBooks.push({bookName: bookPath})
        })
        returnObj = {
            msg: "success",
            status: 200,
            data: totalBooks
        }
    }catch(err){
        returnObj = {
            msg: "error",
            status: 500,
            data: []
        }
    }
    return json(returnObj)
} 