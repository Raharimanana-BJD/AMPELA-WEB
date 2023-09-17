<template>
  <main id="main" class="snap-y pt-24 lg:pt-28">
    <Section01 :section01="section01" />
    <Section02 :section02="section02" />
    <Section03 :section03="section03" />
    <Section04 />
  </main>
</template>

<script>
// composant
import Section01 from "../../components/_Sections/Section01.vue";
import Section02 from "../../components/_Sections/Section02.vue";
import Section03 from "../_Sections/Section03.vue";
import Section04 from "../_Sections/Section04.vue";
// Data
import Data from "../../Data";

export default {
  name: "main",
  components: { Section01, Section02, Section03, Section04 },
  data() {
    return {
      primary: Data.primary,
      secondary: Data.secondary,
      section01: Data.section01,
      section02: Data.section02,
      section03: Data.section03,
    };
  },
};
</script>

<style></style>
