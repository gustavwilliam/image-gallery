<template>
  <TheMainContentFrame>
    <GridFeatured>
      <GridFeaturedItem v-bind="categories[0]" />
      <GridFeaturedItem v-bind="categories[1]" />
      <GridFeaturedItem v-bind="categories[0]" />
      <GridFeaturedItem v-bind="categories[1]" />
    </GridFeatured>
  </TheMainContentFrame>
</template>

<script lang="ts">
import GridFeatured from "@/components/Grids/GridFeatured/GridFeatured.vue";
import GridFeaturedItem from "@/components/Grids/GridFeatured/GridFeaturedItem.vue";
import TheMainContentFrame from "@/components/TheMainContent.vue";

const categories = [
  {
    name: "Prague",
    description:
      "Prague is the capital of and largest city in the Czech Republic",
    dates: {
      start: new Date("2018-07-26"),
      end: new Date("2019-07-28"),
    },
    height: 2,
  },
  {
    name: "Schwerin",
    description:
      "Prague is the capital of and largest city in the Czech Republic",
    dates: {
      start: new Date("2018-07-26"),
      end: new Date("2018-07-28"),
    },
  },
];

export default {
  components: {
    GridFeaturedItem,
    GridFeatured,
    TheMainContentFrame,
  },
  data() {
    return {
      categories: categories,
    };
  },
};
</script>
