<template>
  <TheNavbar
    :navigation="[
      {
        name: 'Discover',
        href: '/#',
        current: isPathActive('/'),
      },
      {
        name: 'Random',
        href: '/#random',
        current: isPathActive('/random'),
      },
      {
        name: 'GitHub',
        href: 'https://gh.godi.se/image-gallery',
        current: false,
      },
    ]"
    @navigate="path = $event"
  />
  <div>
    <Discover v-show="isPathActive('/')" />
    <Random v-show="isPathActive('/random')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import Discover from "@/views/Discover.vue";
import Random from "@/views/Random.vue";

const paths: Record<string, Array<string>> = {
  "/": ["", "/", "/#"],
  "/random": ["/#random", "#random"],
};

export default defineComponent({
  name: "App",
  components: { Random, Discover, TheNavbar },
  data() {
    return {
      path: window.location.hash,
    };
  },

  setup() {
    return {
      paths,
    };
  },

  computed: {
    pageFound(): boolean {
      const mapped = Object.keys(paths).map((testPath) => {
        return paths[testPath].indexOf(this.path) != -1;
      });
      console.log(mapped);
      return mapped.some(Boolean);
    },
  },

  methods: {
    isPathActive(testPath: string): boolean {
      return paths[testPath].indexOf(this.path) != -1;
    },
  },
});
</script>
