<script>
    export let data
    let {requiredSeriesName, requiredBookName, requiredChapter, requiredAudioUrl, requiredAudioString} = data
    import AudioWithSaveTime from '$lib/components/audioWithSaveTime.svelte';

</script>

<h1>Audio</h1>
<AudioWithSaveTime audioData={data} />