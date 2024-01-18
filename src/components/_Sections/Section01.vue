<template>
  <section id="section01" class="scroll-m-80 bg-accents-400 py-20">
    <div
      class="container mx-auto flex flex-col-reverse items-center gap-20 lg:flex-row lg:items-start lg:gap-12"
    >
      <!-- left items -->
      <div class="mb-32 flex w-full flex-col items-center space-y-8 lg:w-1/2">
        <h1 class="text-center text-4xl font-bold lg:text-left lg:text-5xl">
          {{ section01.titre }}
        </h1>
        <p class="text-center text-primary-500 lg:text-left">
          {{ section01.paragraphe }}
        </p>
        <i data-feather="download" class="text-2xl text-primary-500"></i>
        <div class="flex w-full flex-col items-center gap-2 md:flex-row">
          <Secondary
            :newsItem="newsItem"
            v-for="(newsItem, index) in secondary"
            :key="index"
          />
        </div>
      </div>
      <!-- right items -->
      <div class="flex w-full items-center justify-center lg:w-1/2">
        <img
          :src="'/' + section01.hero"
          class="min-w-[10px] max-w-[332px]"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Data from "../../Data";
import Secondary from "../../components/_Buttons/Secondary.vue";

export default {
  name: "section01",
  components: { Secondary },
  data() {
    return {
      secondary: Data.secondary,
    };
  },
  props: {
    section01: {
      type: Object,
      default: () => Data.section01,
    },
  },
};
</script>
