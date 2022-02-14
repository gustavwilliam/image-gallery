<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    <GridFeaturedItem
      v-for="(category, id) in categories"
      v-bind="category"
      :key="id"
    />
  </div>
</template>

<script>
import GridFeaturedItem from "@/components/Grids/GridFeatured/GridFeaturedItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    GridFeaturedItem,
  },
  props: {
    categories: { string: {} },
  },
});
</script>
