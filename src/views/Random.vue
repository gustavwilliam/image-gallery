<template>
  <TheMainContentFrame>
    <div class="px-1 pb-10 my-2 flex flex-col sm:flex-row justify-between">
      <div class="mb-5 sm:mb-0">
        <h1
          class="leading-6 mb-2 font-bold tracking-tight text-gray-900 dark:text-gray-100 text-2xl"
        >
          Random image
        </h1>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
          Here's a random image from any collection.
        </p>
      </div>
      <button
        @click="$refs.image.updateImage"
        class="inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-twitter text-base font-medium text-white hover:bg-blue-twitter-dark focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-800 focus:ring-blue-twitter sm:ml-3 sm:w-auto sm:text-sm"
      >
        Update
      </button>
    </div>
    <TheRandomImage :categories="categories" ref="image" />
  </TheMainContentFrame>
</template>

<script lang="ts">
import TheMainContentFrame from "@/components/TheMainContentFrame.vue";
import TheRandomImage from "@/components/TheRandomImage.vue";

export default {
  components: { TheRandomImage, TheMainContentFrame },
  props: {
    categories: Object,
  },
};
</script>
