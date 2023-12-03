export const load = async ({fetch}) => {
    let bookFetchingData = await (await fetch("/API/get_all_books")).json()
    if (bookFetchingData.status === 200){
        let books = await bookFetchingData.books
        return { status: 200, books }
    }else{
        return bookFetchingData
    }
}