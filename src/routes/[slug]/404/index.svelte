<script context="module">
  export async function preload(page, session) {
    const {
      params: { slug }
    } = page;
    let res = await this.fetch(`${slug}/404/page.json`);
    const data = await res.json();
    return { data, slug };
  }
</script>

<script>
  export let data;
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
</p>
