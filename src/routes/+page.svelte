<script>
    let searchForm;
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

    export let data;
    $: ({ hits, queryTerm } = data);
</script>

<form bind:this={searchForm} method="GET">
    <input
        on:input={() => btn.click()}
        name="q"
        type="text"
        value={queryTerm}
        autofocus="true"
    />
    <button bind:this={btn}>submit</button>
</form>
<!-- <form bind:this={searchForm} method="GET">
    <input
        on:input={debounce(() => {
            btn.click();
        }, 100)}
        name="q"
        type="text"
        value={queryTerm}
        autofocus="true"
    />
    <button bind:this={btn}>submit</button>
</form> -->

<ul>
    {#each hits as { title, url }}
        <li>
            <a href={url} {title} target="_blank">{title}</a>
        </li>
    {/each}
</ul>

<style>
    button {
        display: none;
    }
</style>
