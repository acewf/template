<script context="module">
  export async function preload(page, session) {
    const {
      params: { slug }
    } = page;
    let res = await this.fetch(`${slug}/countdown/page.json`);
    const data = await res.json();
    return { data };
  }
</script>

<script>
  import { onMount } from "svelte";
  import calculateDifference from "./calculateDifference";
  export let data;
  let interval;

  const dateTarget = new Date(data.date);
  let { days, hours, minutes, seconds } = calculateDifference(dateTarget);

  let timeLeft = `${hours}h ${minutes} m ${seconds} s`;

  onMount(async () => {
    interval = setInterval(() => {
      let { days, hours, minutes, seconds } = calculateDifference(dateTarget);
      timeLeft = `${hours}h ${minutes} m ${seconds} s`;
      if (days + hours + minutes + seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);
  });
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
  <strong>{data.title}:</strong>
  <span>{timeLeft}</span>
</p>
