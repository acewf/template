<script context="module">
  export async function preload(page, session) {
    const {
      params: { slug }
    } = page;
    let res = await this.fetch(`${slug}/layout.json`);
    const data = await res.json();
    return { data };
  }
</script>

<script>
  import Title from "../../components/Title.svelte";
  export let segment;
  export let data = { title: "no slug title" };
</script>

<div>
  <Title {data} />
</div>
<main>
  <slot />
</main>
