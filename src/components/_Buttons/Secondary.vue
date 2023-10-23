<template>
  <div class="w-full">
    <a
      :href="newsItem.href"
      class="flex w-full items-center justify-center gap-5 rounded-md bg-primary-500 p-3 px-6 py-2 pt-2 text-neutral-100 md:gap-6"
    >
      <div>
        <img
          :src="'../src/assets/' + newsItem.imgIcon"
          class="w-10 lg:w-8"
        />
      </div>
      <div class="flex flex-col">
        <span class="block text-sm md:text-base">{{ newsItem.textSm }}</span>
        <span class="block text-xl font-bold md:text-lg">
          {{ newsItem.textLg }}
        </span>
      </div>
    </a>
  </div>
</template>

<script>
import Data from "../../Data";

export default {
  name: "secondary",
  props: {
    newsItem: {
      type: Object,
      default: () => Data.secondary,
    },
  },
};
</script>
