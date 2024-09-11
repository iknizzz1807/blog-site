<script lang="ts">
  import { getFirestore, collection, addDoc } from "firebase/firestore";
  import { app } from "$lib/firebase";
  import { goto } from "$app/navigation";
  import { error } from "@sveltejs/kit";

  const db = getFirestore(app);

  let title = "";
  let previewText = "";
  let content = "";
  let thumbnailImageUrl = "";
  let authorImageUrl = "https://i.imgur.com/63oj53J.jpeg";
  let datePublished = "";
  let readTime = "";
  let authorName = "";

  async function handleSubmit() {
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        previewText,
        content,
        authorName,
        thumbnailImage: thumbnailImageUrl,
        authorImage: authorImageUrl,
        datePublished,
        readTime,
        likeNumber: 0,
        commentNumber: 0,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Tạo post thành công");
      goto(`/blog/${docRef.id}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
</script>

<main>
  <div class="min-h-screen flex items-center justify-center py-6">
    <div
      class="max-w-3xl w-full mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-md"
    >
      <h2 class="text-2xl font-bold mb-4">Create a New Post</h2>
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div>
          <label
            for="title"
            class="block text-sm font-medium text-muted-foreground">Title</label
          >
          <input
            bind:value={title}
            type="text"
            id="title"
            name="title"
            class="mt-1 block w-full p-2 sm:p-3 border border-border rounded-md bg-input text-foreground"
            placeholder="Enter the title"
            required
          />
        </div>
        <div>
          <label
            for="previewText"
            class="block text-sm font-medium text-muted-foreground"
            >Preview Text</label
          >
          <input
            bind:value={previewText}
            type="text"
            id="previewText"
            name="previewText"
            class="mt-1 block w-full p-2 sm:p-3 border border-border rounded-md bg-input text-foreground"
            placeholder="Enter the preview text"
            required
          />
        </div>
        <div>
          <label
            for="content"
            class="block text-sm font-medium text-muted-foreground"
            >Content</label
          >
          <textarea
            bind:value={content}
            id="content"
            name="content"
            rows="8"
            class="mt-1 block w-full p-2 sm:p-3 border border-border rounded-md bg-input text-foreground min-h-[200px]"
            placeholder="Write your post content in markdown"
            required
          ></textarea>
        </div>
        <div>
          <label
            for="previewText"
            class="block text-sm font-medium text-muted-foreground"
            >Author Name</label
          >
          <input
            bind:value={authorName}
            type="text"
            id="previewText"
            name="previewText"
            class="mt-1 block w-full p-2 sm:p-3 border border-border rounded-md bg-input text-foreground"
            placeholder="Enter the author name"
            required
          />
        </div>
        <div>
          <label
            for="thumbnailImageUrl"
            class="block text-sm font-medium text-muted-foreground"
            >Thumbnail Image URL</label
          >
          <input
            bind:value={thumbnailImageUrl}
            type="url"
            id="thumbnailImageUrl"
            name="thumbnailImageUrl"
            class="mt-1 block w-full p-2 sm:p-3 border border-border rounded-md bg-input text-foreground"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div>
          <label
            for="authorImageUrl"
            class="block text-sm font-medium text-muted-foreground"
            >Author Image URL</label
          >
          <input
            bind:value={authorImageUrl}
            type="url"
            id="authorImageUrl"
            name="authorImageUrl"
            class="mt-1 block w-full p-2 sm:p-3 border border-border rounded-md bg-input text-foreground"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div>
          <label
            for="datePublished"
            class="block text-sm font-medium text-muted-foreground"
            >Date Published</label
          >
          <input
            bind:value={datePublished}
            type="text"
            id="datePublished"
            name="datePublished"
            class="mt-1 block w-full p-2 sm:p-3 border border-border rounded-md bg-input text-foreground"
            placeholder="August 8"
            required
          />
        </div>
        <div>
          <label
            for="readTime"
            class="block text-sm font-medium text-muted-foreground"
            >Read Time</label
          >
          <input
            bind:value={readTime}
            type="text"
            id="readTime"
            name="readTime"
            class="mt-1 block w-full p-2 sm:p-3 border border-border rounded-md bg-input text-foreground"
            placeholder="Enter the number of read time"
            required
          />
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-md"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  </div>
</main>
