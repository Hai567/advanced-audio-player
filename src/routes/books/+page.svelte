<script>
    import { onDestroy, onMount } from "svelte";
    import { getDoc, doc, updateDoc } from "@firebase/firestore"
    import { db } from "$lib/firebase/firebaseConfig"
    let audio
    onMount(async () => {
        await continueWhereUserLeftOff()
        window.addEventListener("beforeunload", () => saveWhereUserLeftOff(true))
    })
    
    async function saveWhereUserLeftOff(onExit) {
        if (audio){
            let playbackData = {
                time: audio.currentTime,
                src: audio.src
            }
            if (onExit){
                navigator.sendBeacon("/API/save_on_exit_page", JSON.stringify(playbackData))
            }else{
                await updateDoc(doc(db, "user", "danielHo"), playbackData)
            }
        }
    }
    async function continueWhereUserLeftOff() {
        if (audio){
            let savedPlaybackData = (await getDoc(doc(db, "user", "danielHo"))).data()
            audio.src = savedPlaybackData["src"]
            audio.currentTime = savedPlaybackData["time"]
        }
    }
</script>

<div>
    <audio 
        on:change={()=>saveWhereUserLeftOff(false)} 
        on:pause={()=>saveWhereUserLeftOff(false)} 
        src="/audio/1.1.mp3" type="audio/mp3" bind:this={audio} controls
    >
        Your browser does not support the audio element.
    </audio>
</div>