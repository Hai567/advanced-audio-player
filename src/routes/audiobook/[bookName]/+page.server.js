import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
    let requiredBookName = params.bookName
    let requiredBookData = await (await fetch(`/API/get_single_book_data/${requiredBookName}`)).json()
    if (requiredBookData.status == 200){
        return {requiredBookName, "requiredBookData": requiredBookData.data}
    }else{
        throw error (404, {
            msg: "Specified book not found"
        })
    }
} 