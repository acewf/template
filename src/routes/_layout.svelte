<script context="module">
  export async function preload(page, session) {
    const {
      params: { slug }
    } = page;

    let res = await this.fetch("index.json");
    const data = await res.json();
    return { data };
  }
</script>

<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
  export let data = [{ title: "notitle" }];
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} titles={data} />
<main>
  <slot />
</main>
