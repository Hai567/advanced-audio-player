<script>
    import { getDoc, doc, setDoc, collection, updateDoc } from "@firebase/firestore"
    import { onDestroy, onMount } from "svelte";
    import { db } from "$lib/firebase/firebaseConfig"
    import {generateAudioRef} from "$lib/helpers/generateAudioRef"

    export let audioData
    export let audioRewind = 5

    let {requiredSeriesName, requiredBookName, requiredChapter, requiredAudioString, requiredAudioUrl} = audioData
    let audio
    let currentAudioRef = generateAudioRef("Daniel", requiredAudioString)


    onMount(async () => {
        if (!(await getDoc(currentAudioRef)).exists()){
            await setDoc(currentAudioRef, {time: 0})
        }
        await continueWhereUserLeftOff()
        window.addEventListener("beforeunload", () => saveWhereUserLeftOff(true))
    })
    async function saveWhereUserLeftOff(onExit) {
        if (audio){
            if (onExit){
                navigator.sendBeacon("/API/save_on_exit_page", JSON.stringify({time: audio.currentTime, audioString: requiredAudioString}))
            }else{
                await updateDoc(currentAudioRef, {time: audio.currentTime})
            }
        }
    }
    async function continueWhereUserLeftOff() {
        if (audio){
            let savedPlaybackData = (await getDoc(currentAudioRef)).data()
            audio.currentTime = savedPlaybackData["time"]
        }
    }
</script>

<div>
    <audio 
        on:change={()=>saveWhereUserLeftOff(false)} 
        on:pause={()=>saveWhereUserLeftOff(false)} 
        src={requiredAudioUrl} bind:this={audio} controls
    >
        Your browser does not support the audio element.
    </audio>
</div>