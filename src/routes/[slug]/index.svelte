<script context="module">
  export async function preload(page, session) {
    const {
      params: { slug }
    } = page;
    return { slug };
  }
</script>

<script>
  export let slug;
</script>

<p>
  <strong>This is slug page</strong>
</p>
<a href="{slug}/news">news</a>
