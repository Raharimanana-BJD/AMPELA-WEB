<template>
  <header class="fixed z-40 w-full bg-neutral-100/70 backdrop-blur-md transition-all duration-300 ease-in-out">
    <div class="container flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="w-fit z-50">
        <a href="#">
          <img src="/logo.svg" alt="Logo Ampela">
        </a>
      </div>
      <!-- Hamburger -->
      <div @click="toggleMenu" class="toggle | w-8 h-6 inline-block cursor-pointer relative z-50 md:hidden">
        <span :class="{ active: isMenuOpen }" class="top"></span>
        <span :class="{ active: isMenuOpen }" class="middle | top-1/2 transform -translate-y-1/2"></span>
        <span :class="{ active: isMenuOpen }" class="bottom | bottom-0"></span>
      </div>
      <!-- list items -->
      <ul class="hidden items-center gap-6 z-40 | md:flex">
        <li v-for="(link, index) in links" :key="link" :index="index">
          <a :href="'#' + link.href.toLowerCase()">{{ link.text }}</a>
        </li>
      </ul>
    </div>
    <!-- list items mobile -->
    <ul :class="{ 'hidden': !isMenuOpen, 'md:flex': !isMenuOpen, 'md:flex-col': isMenuOpen, 'translate-y-0': isMenuOpen }"
      class="w-full h-screen absolute transform -translate-y-full inset-0 bg-white pt-[15rem] text-center text-2xl space-y-6 z-30 | md:flex-col">
      <li v-for="(link, index) in links" :key="link" :index="index">
        <a @click.stop="closeMenuAndNavigate(link)" :href="'#' + link.href.toLowerCase()">{{ link.text }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
import Data from "../../Data";

export default {
  name: "navigation",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  props: {
    links: {
      type: Array,
      default: () => Data.links,
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.classList.toggle('overflow-hidden', this.isMenuOpen);
    },
    closeMenuAndNavigate(link) {
      this.isMenuOpen = false;
      document.body.classList.remove('overflow-hidden');
    },
  },
};
</script>