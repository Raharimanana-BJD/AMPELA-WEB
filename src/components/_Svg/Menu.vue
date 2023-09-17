<template>
  <div id="menu" class="block lg:hidden">
    <div class="relative space-y-1">
      <span
        class="line | block h-1 w-8 bg-primary-500"
        v-for="line in 3"
        :key="line"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
};
</script>

<style></style>
