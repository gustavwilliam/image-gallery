<template>
  <a href="#">
    <div class="rounded-xl h-full w-full overflow-hidden relative">
      <div class="z-10 w-full absolute bottom-0 left-0">
        <div class="item-bg-gradient w-full px-6 py-4 text-white text-left">
          <p class="mt-1 uppercase text-sm">{{ yearSpan }}</p>
          <h3 class="text-lg leading-6 font-medium">{{ name }}</h3>
        </div>
      </div>
      <div class="z-0 w-full h-full">
        <img
          src="https://via.placeholder.com/200x150.png"
          :alt="name + ' category'"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </a>
</template>

<script>
function getDateString(date) {
  return `${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;
}

export default {
  props: {
    name: String,
    description: String,
    dates: {
      start: Date,
      end: Date,
    },
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    yearSpan: function () {
      const start = getDateString(this.dates.start);
      const end = getDateString(this.dates.end);

      if (start === end) {
        return start;
      } else {
        return `${start} – ${end}`;
      }
    },
  },
};
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
