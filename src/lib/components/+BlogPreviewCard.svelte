<script lang="ts">
  import { goto } from "$app/navigation";

  export let id: string;
  export let title: string;
  export let previewText: string;
  export let authorImage: string;
  export let thumbnailImage: string;
  export let authorName: string;
  export let datePublished: string;
  export let readTime: string;
</script>

<main>
  <button
    class="article flex justify-between mb-8 pb-5 border-b border-gray-300 w-full text-left"
    on:click={() => goto(`/blog/${id}`)}
  >
    <div class="content flex-1 mr-5">
      <h2 class="text-2xl font-bold text-gray-800 mb-1">
        {title}
      </h2>
      <p class="subtitle text-base text-gray-500 mb-4">{previewText}</p>
      <div class="author flex items-center mb-4">
        <img
          src={authorImage}
          alt="Author"
          class="w-10 h-10 rounded-full mr-2.5"
        />
        <div>
          <p class="author-name text-sm text-blue-700">{authorName}</p>
          <p class="author-info text-xs text-gray-500">
            {datePublished} · {readTime} min read
          </p>
        </div>
      </div>
    </div>
    <img
      src={thumbnailImage}
      alt="Medium Day"
      class="thumbnail w-36 h-36 object-cover rounded-lg"
    />
  </button>
</main>

<style>
  /* Responsive Design - Tailwind */
  @media (max-width: 768px) {
    .article {
      flex-direction: column;
    }

    .thumbnail {
      width: 100%;
      height: auto;
      margin-top: 15px;
    }
  }
</style>
