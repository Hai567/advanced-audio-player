<script>
	import { onMount } from "svelte";
    export let data
    console.log(data)
    let books = data.books
    import { capitalizeFirstLetterOfTheWord } from "$lib/helpers/capitalizeFirstLetterOfTheWord"

</script>

<div>
    <h1>Books</h1>
    {#each books as book, i (i)}
        <a href="/audiobook/{book.name}"><h1>{capitalizeFirstLetterOfTheWord(book.name.replaceAll("_", " "))}</h1></a>
    {/each}
</div>