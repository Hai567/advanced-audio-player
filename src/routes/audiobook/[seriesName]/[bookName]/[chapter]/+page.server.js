import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
    let requiredSeriesName = params.seriesName
    let requiredBookName = params.bookName
    let requiredChapter = params.chapter
    let audioInChapter = await (await fetch(`/API/get_single_book_data/${requiredSeriesName}/${requiredBookName}/${requiredChapter}`)).json()
    if (audioInChapter.status == 200){
        return {requiredSeriesName, requiredBookName, requiredChapter, "audioInChapter": audioInChapter.data.audioNames}
    }else{
        throw error (404, {
            msg: "Specified book not found"
        })
    }
} 