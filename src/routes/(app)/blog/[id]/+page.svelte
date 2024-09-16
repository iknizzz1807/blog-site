<script lang="ts">
  import type { PageData } from "./$types";
  import { marked } from "marked";

  export let data: PageData;
  const { blog } = data;

  // Convert Markdown to HTML
  const contentHtml = marked(blog.content);
</script>

<svelte:head>
  <title>{blog.title}</title>
  <meta name="description" content={blog.title} />
</svelte:head>

<main class="max-w-3xl mx-auto px-4 py-8">
  <article class="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={blog.thumbnailImage}
      alt={blog.title}
      class="w-full h-64 object-cover"
    />
    <div class="p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
      <div class="flex items-center mb-4">
        <img
          src={blog.authorImage}
          alt={blog.authorName}
          class="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p class="text-sm font-medium text-gray-900">{blog.authorName}</p>
          <p class="text-sm text-gray-500">
            {blog.datePublished} · {blog.readTime} min read
          </p>
        </div>
      </div>
      <div class="prose max-w-none">
        {@html contentHtml}
      </div>
    </div>
  </article>
</main>
