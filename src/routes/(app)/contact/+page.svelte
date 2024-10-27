<script>
  import { enhance } from "$app/forms";

  /** @type {{form: any}} */
  let { form } = $props();

  let isSubmitting = $state(false);
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Contact me using these infomation." />
</svelte:head>

<main>
  <div class="max-w-2xl mx-auto my-8 mt-8">
    <fieldset class="p-8 shadow-lg rounded-lg">
      <legend class="font-bold text-3xl px-1 text-gray-800">Contact us</legend>
      <form
        method="POST"
        class="max-w-md"
        use:enhance={() => {
          isSubmitting = true;
          return ({ result, update }) => {
            isSubmitting = false;
            update();
          };
        }}
      >
        <div class="mb-6">
          <label for="email" class="block font-semibold mb-1 text-gray-700"
            >Your email:</label
          >
          <input
            name="to"
            type="email"
            id="email"
            placeholder="abc123@gmail.com"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-6">
          <label for="subject" class="block font-semibold mb-1 text-gray-700"
            >Subject:</label
          >
          <input
            name="subject"
            type="text"
            id="subject"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-6">
          <label for="message" class="block font-semibold mb-1 text-gray-700"
            >Message:</label
          >
          <textarea
            name="body"
            id="message"
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full md:w-32 h-10 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          disabled={isSubmitting}
        >
          {#if isSubmitting}
            Submitting...
          {:else}
            Send
          {/if}</button
        >
      </form>
      <p class="text-green-600 mt-4"><strong>{form?.success || ""}</strong></p>
      <p class="text-red-600 mt-4"><strong>{form?.error || ""}</strong></p>
    </fieldset>
  </div>
</main>
