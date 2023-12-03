<script>
    import { capitalizeFirstLetterOfTheWord } from "$lib/helpers/capitalizeFirstLetterOfTheWord"
    export let data
    let bookParts = data.requiredBookData.bookParts
    let requiredBookName = data.requiredBookName
</script>

{#each bookParts as bookPart, i (i)}
    <a href="/audiobook/{requiredBookName}/{bookPart.name}"><h1>{capitalizeFirstLetterOfTheWord(bookPart.name.replaceAll("_", " "))}</h1></a>
{/each}