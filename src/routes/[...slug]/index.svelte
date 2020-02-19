<script context="module">
  export async function preload(page, session) {
    const {
      params: { slug }
    } = page;
    let res = await this.fetch(`${page.path}/page.json`);
    const data = await res.json();
    return { slug, description: data.description };
  }
</script>

<script>
  export let slug;
  export let description;
</script>

<div>{slug} / {description}</div>
