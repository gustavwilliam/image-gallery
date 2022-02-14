<template>
  <TheMainContentFrame>
    <div class="px-1 pb-10">
      <h1
        class="leading-6 my-2 font-bold tracking-tight text-gray-900 dark:text-gray-100 text-2xl"
      >
        Discover images
      </h1>
      <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
        Browse all the available categories below.
      </p>
    </div>
    <GridFeatured :categories="categories" />
  </TheMainContentFrame>
</template>

<script lang="ts">
import GridFeatured from "@/components/Grids/GridFeatured/GridFeatured.vue";
import TheMainContentFrame from "@/components/TheMainContentFrame.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    GridFeatured,
    TheMainContentFrame,
  },
  props: {
    categories: { string: {} },
  },
});
</script>
