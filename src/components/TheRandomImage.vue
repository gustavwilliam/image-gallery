<template>
  <img
    :src="`https://cdn.godi.se/${activeImageURL}`"
    alt="Random image"
    class="rounded-xl shadow-lg"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    categories: {
      type: Object,
    },
  },

  data() {
    return {
      activeImageURL: "image-gallery/image_not_found.svg",
    };
  },

  computed: {
    images(): Array<string> | undefined {
      if (this.categories) {
        const nested = Object.values(this.categories).map((category) => {
          return category["images"];
        });
        return nested.flat();
      } else {
        return undefined;
      }
    },
  },

  methods: {
    updateImage(): void {
      if (this.images) {
        const index = Math.floor(Math.random() * this.images.length);
        this.activeImageURL = this.images[index];
      } // Else, don't update
    },
  },

  watch: {
    categories() {
      // Show a random image, when categories are finally fetched
      this.updateImage();
    },
  },
});
</script>
