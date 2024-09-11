<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { blog } = data;
</script>

<h1>This is blog with id <strong>{blog.id}</strong></h1>
<h2>This is blog with title <strong>{blog.title}</strong></h2>
<h2>This is blog with author name <strong>{blog.authorName}</strong></h2>
