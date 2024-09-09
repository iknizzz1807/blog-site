<script lang="ts">
  export let title: string;
  export let previewText: string;
  export let authorImage: string;
  export let thumbnailImage: string;
  export let authorName: string;
  export let datePublished: string;
  export let readTime: string;
  export let likeNumber: string;
  export let commentNumber: string;
</script>

<div class="article flex justify-between mb-8 pb-5 border-b border-gray-300">
  <div class="content flex-1 mr-5">
    <h2 class="text-2xl text-gray-800 mb-1">{title}</h2>
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
    <div class="engagement flex items-center">
      <div class="likes flex items-center mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-500 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
          />
        </svg>
        <span class="text-sm text-gray-500">{likeNumber}</span>
      </div>
      <div class="comments flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-500 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-sm text-gray-500">{commentNumber}</span>
      </div>
    </div>
  </div>
  <img
    src={thumbnailImage}
    alt="Medium Day"
    class="thumbnail w-36 h-36 object-cover rounded-lg"
  />
</div>

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
