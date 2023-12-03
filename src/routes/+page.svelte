<script>
	import { onMount } from "svelte";
    export let data
    let isBookFetched = false
    let books = []

    onMount(() => {
        if (data.status == 200){
            isBookFetched = true
            books = data.data
        }
    })
</script>

<div>
    {#if isBookFetched}
        <h1>Books</h1>
    {/if}
    {#each books as book, i (i)}
        <h1>{book.bookName}</h1>
    {/each}
</div>