<template>
  <nav
    id="navigation"
    class="fixed z-50 w-full bg-neutral-100/70 backdrop-blur-md"
  >
    <div class="container relative mx-auto p-3 lg:p-6">
      <!-- Container flex -->
      <div class="flex flex-col items-center justify-between lg:flex-row">
        <!-- Logo -->
        <div class="w-fit">
          <a href="#">
            <img src="/logo.svg" alt="Logo Ampela">
          </a>
        </div>
        <!-- Menu items -->
        <ul class="flex items-center space-x-6">
          <li v-for="(link, index) in links" :key="link" :index="index">
            <a :href="'#' + link.href.toLowerCase()">{{ link.text }}</a>
          </li>
        </ul>
        <!-- Button -->
        <Primary />
        <!-- Menu -->
        <!-- <div class="absolute right-6 top-8">
          <Menu />
        </div> -->
      </div>
    </div>
  </nav>
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
  methods: {},
  components: {  Primary },
};
</script>
