<script>
    let searchForm;
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
            searchForm.requestSubmit();
        }, 600)}
        name="q"
        type="text"
        value={queryTerm}
        autofocus="true"
        placeholder="svelte, react, ..."
    />
    <button>submit</button>
</form>

<ul>
    {#each hits as { title, url }}
        <li>
            <a href={url} {title} target="_blank">{title}</a>
        </li>
    {/each}
</ul>

<noscript>
    <style>
        button {
            display: block !important;
        }
    </style>
</noscript>

<style>
    form {
        display: flex;
    }
    button {
        display: none;
        margin-left: 0.25rem;
    }
    input {
        font-size: 24px;
    }
</style>
