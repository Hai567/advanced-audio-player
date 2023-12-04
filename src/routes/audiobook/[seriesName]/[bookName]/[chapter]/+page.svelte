<script>
    export let data
    let requiredSeriesName = data.requiredSeriesName
    let requiredBookName = data.requiredBookName
    let requiredChapter = data.requiredChapter
    let audioInChapter = data.audioInChapter
</script>

<div>
    {#each audioInChapter as audio, i (i)}
        <a href="/audiobook/{requiredSeriesName}/{requiredBookName}/{requiredChapter}/{audio.name}"><h1>{audio.name}</h1></a>
    {/each}
</div>