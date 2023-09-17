<template>
  <section id="section04" class="snap-center py-20">
    <div class="container">
      <!-- heading -->
      <div>
        <h2 class="text-center text-4xl font-bold lg:text-left">
          {{ section04.titre }}
        </h2>
        <p>{{ section04.paragraphe }}</p>
      </div>
    </div>
  </section>
</template>

<script>
// composants
// Data
import Data from "../../Data.json";
export default {
  name: "section04",
  data() {
    return {
      section04: Data.section04,
    };
  },
};
</script>
