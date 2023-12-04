import { error } from '@sveltejs/kit'

export let load = async ({ params, fetch }) => {
    let requiredSeriesName = params.seriesName
    let requiredBookName = params.bookName
    let chaptersInBook = await (await fetch(`/API/get_single_book_data/${requiredSeriesName}/${requiredBookName}`)).json()
    if (chaptersInBook.status == 200){
        return {requiredSeriesName, requiredBookName, "bookChapters": chaptersInBook.data.bookChapters}
    }else{
        throw error (404, {
            msg: "Specified book not found"
        })
    }
}