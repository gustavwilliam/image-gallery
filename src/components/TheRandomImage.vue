<template>
  <img :src="activeImageURL" alt="Random image" />
  <button @click="this.updateImage">Update image</button>
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
      activeImageURL: "https://cdn.godi.se/image-gallery/image_not_found.svg",
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
      const index = Math.floor(Math.random() * this.images.length);
      this.activeImageURL = `https://cdn.godi.se/${this.images[index]}`;
    },
  },
});
</script>
