<script lang="ts">
  import "../../app.css";
  import NavBar from "$lib/components/+NavBar.svelte";
  import ProgressBar from "$lib/components/+ProgressBar.svelte";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import { onMount, onDestroy } from "svelte";

  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();

  let progress: number = $state(0);
  let isNavigating: boolean = $state(false);
  let interval: any;

  const startProgress = () => {
    progress = 0;
    isNavigating = true;

    interval = setInterval(() => {
      if (progress < 90) {
        progress += 10;
      }
    }, 200);
  };

  const stopProgress = () => {
    clearInterval(interval);
    progress = 100;
    setTimeout(() => {
      isNavigating = false;
      progress = 0;
    }, 200);
  };

  beforeNavigate(() => {
    if (interval) clearInterval(interval);
    startProgress();
  });

  afterNavigate(() => {
    stopProgress();
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });

</script>

<main>
  <NavBar />
  {@render children?.()}
  {#if isNavigating}
    <ProgressBar progress={progress} />
  {/if}
</main>

<style>
  /* Customizing the scrollbar */
  :global(::-webkit-scrollbar) {
    width: 8px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #f1f1f1;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #888;
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: #555;
  }

  /* For Firefox */
  :global(html) {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }
</style>
