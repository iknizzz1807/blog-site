<script>
  import "../../app.css";
  import NavBar from "$lib/components/+NavBar.svelte";
  /** @type {{children?: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<main>
  <NavBar />
  {@render children?.()}
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
