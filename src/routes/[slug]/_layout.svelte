<script context="module">
  export async function preload(page, session) {
    const {
      params: { slug }
    } = page;
    let res = await this.fetch(`${slug}/page.json`);
    const data = await res.json();
    return { data, slug };
  }
</script>

<script>
  import Title from "../../components/Title.svelte";
  export let data = { title: "no slug title" };
  export let slug;
</script>

<div>
  <div>this is the layout file</div>
  <Title {data} />
  <h1>{slug}</h1>
  {#if slug === 'abc'}
    <h1>404</h1>
  {/if}
</div>
<main>
  <slot />
</main>
