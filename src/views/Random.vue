<template>
  <TheMainContentFrame>
    <div class="px-1 pb-10">
      <h1
        class="leading-6 my-2 font-bold tracking-tight text-gray-900 dark:text-gray-100 text-2xl"
      >
        Random image
      </h1>
      <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
        Here's a random image from the collections:
      </p>
    </div>
  </TheMainContentFrame>
</template>

<script>
import TheMainContentFrame from "@/components/TheMainContentFrame";
export default {
  components: { TheMainContentFrame },
  props: {
    categories: { string: {} },
  },
};
</script>
