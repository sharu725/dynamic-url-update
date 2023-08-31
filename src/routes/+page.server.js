export const load = async ({ url, fetch }) => {
    const queryTerm = url.searchParams.get("q")
    const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${queryTerm}&tags=story`)
    const { hits } = await res.json();
    return {
        hits,
        queryTerm
    }
}