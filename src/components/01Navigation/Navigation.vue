<template>
  <nav
    id="navigation"
    class="fixed z-50 w-full bg-neutral-100/70 backdrop-blur-md"
  >
    <div class="container relative mx-auto p-3 lg:p-6">
      <!-- Container flex -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="w-fit">
          <Logo />
        </div>
        <!-- Menu items -->
        <ul class="hidden items-center space-x-6 lg:flex">
          <li v-for="(link, index) in links" :key="link" :index="index">
            <a :href="'#' + link.href.toLowerCase()">{{ link.text }}</a>
          </li>
        </ul>
        <!-- Button -->
        <Primary />
        <!-- Menu -->
        <Menu />
      </div>
    </div>
  </nav>
</template>

<script>
// composants
import Logo from "../_Svg/Logo.vue";
import Menu from "../_Svg/Menu.vue";
// data
import Data from "../../Data";
import Primary from "../../components/_Buttons/Primary.vue";
export default {
  name: "navigation",
  data() {
    return {
      primary: Data.primary,
    };
  },
  props: {
    links: {
      type: Array,
      default: () => {
        Data.links, Data.primary;
      },
    },
  },
  components: { Logo, Menu, Primary },
};
</script>
