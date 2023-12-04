<script>
    export let data
    let books = data.books
    import { capitalizeFirstLetterOfTheWord } from "$lib/helpers/capitalizeFirstLetterOfTheWord"

</script>

<div>
    <h1>Series</h1>
    {#each books as book, i (i)}
        <a href="/audiobook/{book.name}"><h1>{capitalizeFirstLetterOfTheWord(book.name)}</h1></a>
    {/each}
</div>