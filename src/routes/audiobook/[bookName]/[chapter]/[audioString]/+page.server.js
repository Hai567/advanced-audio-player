import { error } from '@sveltejs/kit'

export const load = async ({ params, fetch }) => {
    let requiredBookName = params.bookName
    let requiredChapter = params.chapter
    let requiredAudioString = params.audioString

    let requiredAudio = await (await fetch(`/API/get_single_book_data/${requiredBookName}/${requiredChapter}/${requiredAudioString}`)).json()
    if (requiredAudio.status == 200){
        return requiredAudio.data
    }else{
        throw error (404, {
            msg: "Can not find the audio for the specified chapter of the book"
        })
    }
}