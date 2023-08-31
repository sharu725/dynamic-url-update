<script>
    let searchForm;
    let btn;
    let timeout;

    const debounce = (callback, wait) => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            callback.apply(null, {});
        }, wait);
    };

    export let data;
    $: ({ hits, queryTerm } = data);
</script>

<form bind:this={searchForm} method="GET">
    <input
        on:input={debounce(() => {
            btn.click();
        }, 600)}
        name="q"
        type="text"
        value={queryTerm}
        autofocus="true"
        placeholder="svelte, react, ..."
    />
    <button bind:this={btn}>submit</button>
</form>

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
    input {
        font-size: 24px;
    }
</style>
