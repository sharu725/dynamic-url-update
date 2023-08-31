<script>
    let btn;

    const debounce = (callback, wait) => {
        let timeoutId = null;
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                callback.apply(null, args);
            }, wait);
        };
    };
</script>

<form method="GET">
    <input name="q" on:input={debounce(() => btn.click(), 1000)} />
    <button type="submit" bind:this={btn}>Submit</button>
</form>

<style>
    button {
        display: none;
    }
</style>
