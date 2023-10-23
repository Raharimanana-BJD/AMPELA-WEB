<template>
  <div
    id="profile"
    class="relative flex h-72 w-full max-w-[260px] cursor-pointer rounded-lg bg-neutral-100/70 px-4 py-8 backdrop-blur-md"
  >
    <!-- image -->
    <img
      :src="'../public/' + profile.image"
      class="absolute left-0 right-0 top-0 mx-auto my-4 h-16 w-16"
    />
    <div
      class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col justify-start"
    >
      <h4 class="text-center text-lg font-bold uppercase text-primary-500">
        {{ profile.name }}
      </h4>
      <p class="text-md mx-auto w-[150px] text-primary-500/50">
        {{ profile.role }}
      </p>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 flex w-full items-center justify-center space-x-6 p-4"
    >
      <a
        :href="item.url"
        v-for="(item, index) in profile.contact"
        :key="item"
        :index="index"
        ><i :class="item.icon" class="bx rounded-md bg-neutral-100 p-2"></i>
      </a>
    </div>
  </div>
</template>

<script>
// data
import Data from "../../Data";
export default {
  name: "Profile",
  props: {
    profile: {
      type: Object,
      default: () => Data.profiles,
    },
  },
};
</script>
