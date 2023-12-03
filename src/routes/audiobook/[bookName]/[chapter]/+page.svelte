<script>
    export let data
    let requiredBookName = data.requiredBookName
    let requiredChapter = data.requiredChapter
    let audioInChapter = data.audioInChapter
</script>

<div>
    {#each audioInChapter as audio, i (i)}
        <a href="/audiobook/{requiredBookName}/{requiredChapter}/{audio.name.replaceAll(" ", "_")}"><h1>{audio.name}</h1></a>
    {/each}
</div>