<script>
    export let data
    let requiredSeriesName = data.requiredSeriesName
    let requiredBookName = data.requiredBookName
    let bookChapters = data.bookChapters
</script>
<h1>Chapters</h1>
{#each bookChapters as chapter, i (i)}
    <a href="/audiobook/{requiredSeriesName}/{requiredBookName}/{chapter.name}"><h1>{chapter.name}</h1></a>
{/each}