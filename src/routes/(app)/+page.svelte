<script lang="ts">
  import type { PageData } from "./$types";
  import BlogPreviewCard from "$lib/components/+BlogPreviewCard.svelte";

  export let data: PageData;

  const { blogs } = data;
</script>

<svelte:head>
  <title>ikniz Blog</title>
  <meta
    name="description"
    content="This is a Blog Site of a CS student from Viet Nam. I share my thoughts, choices on tech trends and tools here."
  />
</svelte:head>

<main>
  <div class="w-4/5 mx-auto my-5">
    {#each blogs as blog (blog.id)}
      <BlogPreviewCard
        id={blog.id}
        title={blog.title}
        previewText={blog.previewText}
        authorImage={blog.authorImage}
        thumbnailImage={blog.thumbnailImage}
        authorName={blog.authorName}
        datePublished={blog.datePublished}
        readTime={blog.readTime}
      />
    {/each}
  </div>
</main>
