<script>
    let btn;
</script>

<form method="GET">
    <input name="q" on:input={() => btn.click()} />
    <button type="submit" bind:this={btn}>Submit</button>
</form>

<style>
    button {
        display: none;
    }
</style>
