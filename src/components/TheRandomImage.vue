<template>
  <div
    class="sm:bg-gray-100 sm:dark:bg-gray-800 sm:p-5 flex flex-row justify-center rounded-2xl md:h-96 lg:h-128"
  >
    <div class="shadow-lg h-full rounded-xl overflow-hidden relative">
      <div class="z-10 w-full absolute bottom-0 left-0">
        <div
          class="z-10 item-bg-gradient w-full px-6 py-4 text-white text-left"
        >
          <h3 class="text-md mt-1 leading-6 font-medium">
            {{ activeCategory }}
          </h3>
        </div>
      </div>
      <img
        :src="`https://cdn.godi.se/${activeImage}`"
        alt="Random image"
        class="h-full object-contain object-contain z-0"
      />
    </div>
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
      activeImage: "image-gallery/image_not_found.svg",
      activeCategory: "",
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
        if (this.activeImage === this.images[index]) {
          if (index + 1 === this.images.length) {
            // When at the final item, loop back to first
            index = 0;
          } else {
            index += 1;
          }
        }

        this.activeImage = this.images[index];
        const category = this.activeImage.split("/")[1];
        this.activeCategory = // Make category uppercase
          category.charAt(0).toUpperCase() + category.slice(1);
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

<style scoped>
.item-bg-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0)
  );
}
</style>
