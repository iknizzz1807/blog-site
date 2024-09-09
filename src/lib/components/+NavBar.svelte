<script>
  import { onMount } from "svelte";

  let siteName = "My Blog";
  let menuItems = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
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
        <li><a href={item.href}>{item.name}</a></li>
      {/each}
    </ul>
  </div>

  <div class="navbar-end">
    <div class="form-control">
      <input
        type="text"
        placeholder="Search"
        class="input input-bordered w-full min-w-[150px] max-w-xs"
      />
    </div>
    <div class="dropdown dropdown-end">
      <div
        tabindex="0"
        role="button"
        class="btn btn-ghost btn-circle avatar ml-2"
      >
        <div class="w-10 rounded-full">
          <img
            alt="User avatar"
            src="https://api.dicebear.com/6.x/initials/svg?seed=JD"
          />
        </div>
      </div>
      <ul
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>

<style>
  :global(body) {
    padding-top: 64px; /* Adjust this value based on your navbar height */
  }
</style>
