<template>
  <section id="section02" class="snap-center py-20">
    <div
      class="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-3 lg:flex-row"
    >
      <!-- left items -->
      <div class="col-span-1 hidden lg:block">
        <div class="mx-auto max-w-[260px]">
          <img :src="section02.hero" class="w-full" />
        </div>
      </div>
      <!-- right items -->
      <div class="container col-span-2">
        <div class="mb-32 flex flex-col items-center space-y-8 lg:items-start">
          <h2 class="text-center text-4xl font-bold lg:text-left">
            {{ section02.titre }}
          </h2>
          <!-- container card -->
          <div class="col-auto grid gap-4 md:grid-cols-2">
            <div v-for="(card, index) in cards" :key="card" :index="index">
              <Card :card="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// composant
import Card from "/src/components/_Cards/Card.vue";
// Data
import Data from "../../Data";
export default {
  name: "section02",
  data() {
    return {
      cards: Data.cards,
    };
  },
  props: {
    section02: {
      typeof: Object,
      default: () => Data.section02,
    },
  },
  components: { Card },
};
</script>
