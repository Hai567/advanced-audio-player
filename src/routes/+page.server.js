import { error } from '@sveltejs/kit';
export const load = async ({fetch}) => {
    let bookFetchingData = await (await fetch("/API/get_all_books")).json()
    if (bookFetchingData.status === 200){
        return bookFetchingData.data
    }else{
        throw error (400, {
            msg: "Can not find any book"
        })
    }
}