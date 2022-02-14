<template>
  <a href="#">
    <div class="rounded-xl shadow-lg h-full w-full overflow-hidden relative">
      <div class="z-10 w-full absolute bottom-0 left-0">
        <div
          class="z-10 item-bg-gradient w-full px-6 py-4 text-white text-left"
        >
          <p class="mt-1 uppercase text-sm">{{ yearSpan }}</p>
          <h3 class="text-lg leading-6 font-medium">{{ name }}</h3>
        </div>
      </div>
      <div class="z-0 w-full h-full">
        <img
          :src="`https://cdn.godi.se/${
            thumbnail ? thumbnail : 'image-gallery/image_not_found.svg'
          }`"
          :alt="name + ' category'"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </a>
</template>

<script>
import { defineComponent } from "vue";

function getDateString(date) {
  return `${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;
}

export default defineComponent({
  data() {
    return {
      noImageURL: "",
    };
  },
  props: {
    name: String,
    description: String,
    dates: {
      start: String,
      end: String,
    },
    thumbnail: String,
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    yearSpan() {
      const start = getDateString(new Date(this.dates.start));
      const end = getDateString(new Date(this.dates.end));

      if (start === end) {
        return start;
      } else {
        return `${start} – ${end}`;
      }
    },
  },
});
</script>

<style scoped>
.item-bg-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
  );
}
</style>
