import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
    let requiredSeriesName = params.seriesName
    let requiredBookData = await (await fetch(`/API/get_single_book_data/${requiredSeriesName}`)).json()
    if (requiredBookData.status == 200){
        return {requiredSeriesName, "requiredBookData": requiredBookData.data}
    }else{
        throw error (404, {
            msg: "Specified book not found"
        })
    }
} 