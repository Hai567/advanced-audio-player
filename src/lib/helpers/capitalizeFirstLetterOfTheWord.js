export const capitalizeFirstLetterOfTheWord = (word) => {
    let totalWords = word.split(" ")
    let final = ""
    totalWords.forEach(singleWord => {
        final = final.concat(singleWord.replace(/^./, singleWord[0].toUpperCase()), " ")
    })
    return final
}