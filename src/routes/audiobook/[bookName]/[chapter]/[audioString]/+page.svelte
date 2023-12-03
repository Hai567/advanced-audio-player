<script>
    export let data
    let requiredAudioUrl = data.audioUrl
</script>

<h1>Audio</h1>
<audio src="{requiredAudioUrl}" controls>
    Your browser does not support the audio element.
</audio>