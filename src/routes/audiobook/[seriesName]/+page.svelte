<script>
    export let data
    let allBooks = data.requiredBookData.books
    let requiredSeriesName = data.requiredSeriesName
</script>

{#each allBooks as book, i (i)}
    <a href="/audiobook/{requiredSeriesName}/{book.name}"><h1>{book.name.replaceAll("_", " ")}</h1></a>
{/each}