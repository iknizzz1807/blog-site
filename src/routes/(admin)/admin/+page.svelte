<script lang="ts">
  import CreatePostForm from "$lib/components/+CreatePostForm.svelte";
  import LoginForm from "$lib/components/+LoginForm.svelte";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  let isAdminUser = false;

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user && user.uid === "dRpNaqWYpxZiKETe2rg8lRqGR7L2") {
        isAdminUser = true;
      } else {
        isAdminUser = false;
      }
    });
  });
</script>

<div class="w-4/5 mx-auto">
  {#if isAdminUser}
    <CreatePostForm />
  {:else}
    <LoginForm />
  {/if}
</div>
