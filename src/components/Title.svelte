<script>
  export let data;

  $: title = data.title || "";
  $: image = data.image || "";
</script>

<h1>{title}</h1>
<img src={image} alt="abc" />
