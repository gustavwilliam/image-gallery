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
  data() {
    return {
      categories: null,
    };
  },
  created() {
    fetch("https://cdn.godi.se/image-gallery/data.json")
      .then((res) => res.json())
      .then((out) => {
        this.categories = out;
      })
      .catch((err) => {
        throw err;
      });
  },
});
</script>
