<template>
  <div id="app">
    <HomeView />
    <!-- <CalculatView /> -->
  </div>
</template>

<script>
import CalculatView from "./Views/CalculatView.vue";
import HomeView from "./Views/HomeView.vue";

export default {
  name: "app",
  components: { HomeView, CalculatView },
};
</script>

<style></style>
