<template>
  <footer id="footer">
    <div class="container py-20">
      <!-- list -->
      <ul
        class="flex w-full flex-col items-start justify-between gap-10 lg:flex-row"
      >
        <li
          class="flex w-full flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div class="space-y-6" v-for="item in footers" :key="item">
            <h1 class="text-center text-base font-bold uppercase md:text-left">
              {{ item.titre }}
            </h1>
            <div class="flex flex-col gap-2">
              <a
                href=""
                v-for="link in item.links"
                :key="link"
                class="text-md text-center md:text-left"
                >{{ link }}</a
              >
            </div>
          </div>
        </li>
        <li class="m-auto w-1/2 min-w-max space-y-6">
          <h3 class="text-center text-base font-bold uppercase lg:text-left">
            Telecharge
          </h3>
          <div class="flex flex-col gap-4">
            <Secondary
              :newsItem="newsItem"
              v-for="newsItem in secondary"
              :key="newsItem"
            />
          </div>
        </li>
      </ul>
      <!-- copyright -->
      <div class="mt-20 text-center">
        <span class="text-center text-neutral-400"
          >&copy;Copyright Ampela 2023
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
// composants
import Secondary from "../_Buttons/Secondary.vue";
// Data
import Data from "../../Data";
export default {
  name: "footer",
  data() {
    return {
      secondary: Data.secondary,
      footers: Data.footers,
    };
  },
  components: { Secondary },
};
</script>

<style></style>
