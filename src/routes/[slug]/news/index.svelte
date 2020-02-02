<script context="module">
  export async function preload(page, session) {
    const {
      params: { slug }
    } = page;
    let res = await this.fetch(`${slug}/news/page.json`);
    const data = await res.json();
    return { data, slug };
  }
</script>

<script>
  export let data;
  export let slug;
</script>

<style>
  p {
    margin: 1em auto;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<p>
  <strong>{data.title}</strong>
  <a href="{slug}/news/mydetail">detail news</a>
</p>
