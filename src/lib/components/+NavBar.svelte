<script>
  let siteName = "My Blog";
  let menuItems = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
</script>

<nav class="navbar bg-base-100 shadow-lg">
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
        class="input input-bordered w-24 md:w-auto"
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
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
