<script context="module">
  export async function preload(page, session) {
    const {
      params: { slug }
    } = page;
    let res = await this.fetch(`${slug}/page.json`);
    const data = await res.json();

    if (slug === "en" || slug === "pt") {
      return { slug, description: data.description };
    }
    this.error(404, "Not Found");
  }
</script>

<script>
  export let slug;
  export let description;
</script>

<a href="{slug}/countdown">{description}</a>
