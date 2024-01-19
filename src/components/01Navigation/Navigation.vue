<template>
  <header class="fixed z-50 w-full bg-neutral-100/70 backdrop-blur-md">
    <div class="container flex items-center justify-between py-4 px-6 transition-all duration-300 ease-in-out">
      <!-- Logo -->
      <div class="w-fit">
        <a href="#">
          <img src="/logo.svg" alt="Logo Ampela">
        </a>
      </div>
      <!-- Hamburger -->
      <div @click="toggleMenu" class="toggle | w-8 h-5 inline-block cursor-pointer relative z-50 md:hidden md:z-50">
        <span class="top | origin-center"></span>
        <span class="middle | top-1/2 transform -translate-y-1/2"></span>
        <span class="bottom | bottom-0 origin-center"></span>
      </div>
      <!-- list items -->
      <ul class=" hidden items-center gap-6 z-40 | md:flex">
        <li v-for="(link, index) in links" :key="link" :index="index">
          <a :href="'#' + link.href.toLowerCase()">{{ link.text }}</a>
        </li>
      </ul>
    </div>
    <ul
      class="menuOpen | hidden w-full h-screen absolute transform -translate-y-full inset-0 bg-red-500 border pt-[20rem] text-center text-2xl space-y-6 z-40 | md:flex-col">
      <li v-for="(link, index) in links" :key="link" :index="index">
        <a :href="'#' + link.href.toLowerCase()">{{ link.text }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
// data
import Data from "../../Data";
import Primary from "../../components/_Buttons/Primary.vue";
export default {
  name: "navigation",
  data() {
    return {
      primary: Data.primary,
      active: false,
    };
  },
  props: {
    links: {
      type: Array,
      default: () =>
        Data.links,
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  components: { Primary },
};
</script>

<style>
.menuOpen {
  transform: translateY(0);
}
</style>