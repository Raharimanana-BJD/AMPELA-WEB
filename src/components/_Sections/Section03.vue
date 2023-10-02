<template>
  <section
    id="section03"
    class="h-auto snap-center space-y-12 bg-accents-400 py-20 lg:h-screen"
  >
    <div class="container space-y-8">
      <h2 class="text-center text-4xl font-bold">{{ section03.titre }}</h2>
      <p class="mx-auto max-w-3xl">{{ section03.paragraphe }}</p>
    </div>
    <!-- container carousel -->
    <div>
      <Carousel :v-bind="settings" :breakpoints="breakpoints">
        <!-- slide -->
        <Slide v-for="profile in profiles" :key="profile" class="flex gap-8">
          <!-- card -->
          <Profile :profile="profile" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import Profile from "../_Cards/Profile.vue";
// carousel
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

// data
import Data from "../../Data";
export default {
  name: "section03",
  data: () => ({
    profiles: Data.profiles,

    // settings car
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
  props: {
    section03: {
      type: Object,
      default: () => Data.section03,
    },
  },
  components: { Profile, Carousel, Navigation, Slide },
};
</script>
