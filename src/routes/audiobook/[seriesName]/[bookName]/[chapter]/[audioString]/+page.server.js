import { error } from '@sveltejs/kit'

export const load = async ({ params, fetch }) => {
    let requiredSeriesName = params.seriesName
    let requiredBookName = params.bookName
    let requiredChapter = params.chapter
    let requiredAudioString = params.audioString

    let requiredAudio = await (await fetch(`/API/get_single_book_data/${requiredSeriesName}/${requiredBookName}/${requiredChapter}/${requiredAudioString}`)).json()
    if (requiredAudio.status == 200){
        return {requiredSeriesName, requiredBookName, requiredChapter, requiredAudioString, requiredAudioUrl: requiredAudio.data.audioUrl}
    }else{
        throw error (404, {
            msg: "Can not find the audio for the specified chapter of the book"
        })
    }
}