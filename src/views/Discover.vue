<template>
  <TheMainContentFrame>
    <GridFeatured :categories="categories" />
  </TheMainContentFrame>
</template>

<script lang="ts">
import GridFeatured from "@/components/Grids/GridFeatured/GridFeatured.vue";
import TheMainContentFrame from "@/components/TheMainContent.vue";
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
