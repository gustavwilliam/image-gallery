<template>
  <div
    class="sm:bg-gray-100 sm:p-5 flex flex-row justify-center rounded-2xl md:h-96 lg:h-128"
  >
    <img
      :src="`https://cdn.godi.se/${activeImageURL}`"
      alt="Random image"
      class="rounded-xl shadow-lg h-full object-contain"
    />
  </div>
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
        let index = Math.floor(Math.random() * this.images.length);
        if (this.activeImageURL === this.images[index]) {
          if (index + 1 === this.images.length) {
            // When at the final item, loop back to first
            index = 0;
          } else {
            index += 1;
          }
        }

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
