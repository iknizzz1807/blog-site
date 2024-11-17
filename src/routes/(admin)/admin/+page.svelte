<script lang="ts">
  import CreatePostForm from "$lib/components/+CreatePostForm.svelte";
  import LoginForm from "$lib/components/+LoginForm.svelte";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  let isAdminUser = $state(false);
  let isLoading = $state(true);

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user && user.uid === "dRpNaqWYpxZiKETe2rg8lRqGR7L2") {
        isAdminUser = true;
      } else {
        isAdminUser = false;
      }
      isLoading = false;
    });
  });
</script>

<svelte:head>
  <title>Admin dashboard</title>
</svelte:head>

<div class="w-4/5 mx-auto">
  {#if isLoading}
    <p
      style="display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 40px"
    >
      <strong>Loading...</strong>
    </p>
  {:else if isAdminUser}
    <CreatePostForm />
  {:else}
    <LoginForm />
  {/if}
</div>
