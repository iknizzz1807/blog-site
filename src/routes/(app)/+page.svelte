<script lang="ts">
  import type { PageData } from "./$types";
  import BlogPreviewCard from "$lib/components/+BlogPreviewCard.svelte";

  export let data: PageData;

  const { blogs } = data;
</script>

<main>
  <div class="w-4/5 mx-auto my-5">
    {#each blogs as blog (blog.id)}
      <BlogPreviewCard
        title={blog.title}
        previewText={blog.previewText}
        authorImage={blog.authorImage}
        thumbnailImage={blog.thumbnailImage}
        authorName={blog.authorName}
        datePublished={blog.datePublished}
        readTime={blog.readTime}
        likeNumber={blog.likeNumber}
        commentNumber={blog.commentNumber}
      />
    {/each}
  </div>
</main>
