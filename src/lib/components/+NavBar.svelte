<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let siteName = "ikniz Blog";
  let menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  let prevScrollPos = 0;
  let visible = true;
  let isOpen = false;

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    const currentScrollPos = window.scrollY;
    visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
    prevScrollPos = currentScrollPos;
  }

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<main>
  <nav
    class="navbar bg-base-100 shadow-lg fixed top-0 left-0 right-0 transition-transform duration-300 z-50"
    style="transform: translateY({visible ? '0' : '-100%'});"
  >
    <div class="navbar-start md:flex-1">
      <a href="/" class="btn btn-ghost text-xl">{siteName}</a>
    </div>

    <div class="navbar-center flex-none">
      <ul class="menu menu-horizontal px-1 hidden md:flex">
        {#each menuItems as item}
          <li>
            <button on:click={() => goto(`${item.href}`)}>{item.name}</button>
          </li>
        {/each}
      </ul>
    </div>

    <div class="navbar-end md:flex-1 flex justify-end">
      <button on:click={toggleMenu} class="btn btn-ghost md:hidden">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  </nav>

  {#if isOpen}
    <div
      class="fixed top-16 left-0 right-0 bg-base-100 shadow-lg z-40 md:hidden"
    >
      <ul class="menu p-2">
        {#each menuItems as item}
          <li>
            <button
              on:click={() => {
                goto(`${item.href}`);
                isOpen = false;
              }}>{item.name}</button
            >
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</main>

<style>
  :global(body) {
    padding-top: 64px;
  }
</style>
