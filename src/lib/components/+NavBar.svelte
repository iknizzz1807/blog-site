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
</script>

<main>
  <nav
    class="navbar bg-base-100 shadow-lg fixed top-0 left-0 right-0 transition-transform duration-300 z-50"
    style="transform: translateY({visible ? '0' : '-100%'});"
  >
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost text-xl">{siteName}</a>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        {#each menuItems as item}
          <li>
            <button on:click={() => goto(`${item.href}`)}>{item.name}</button>
          </li>
        {/each}
      </ul>
    </div>

    <div class="navbar-end">
      <div class="form-control mr-4">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-full min-w-[150px] max-w-xs"
        />
      </div>
    </div>
  </nav>
</main>

<style>
  :global(body) {
    padding-top: 64px; /* Adjust this value based on your navbar height */
  }
</style>
