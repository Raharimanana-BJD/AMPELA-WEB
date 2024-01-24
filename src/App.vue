<template>
  <div id="app">
    <loader :isLoading="isLoading" />
    <div v-if="!isLoading">
      <HomeView />
    </div>
  </div>
</template>

<script>
import loader from "./components/loader/loader.vue"
import HomeView from "./Views/HomeView.vue";

export default {
  name: "app",
  components: { HomeView, loader },
  data() {
    isLoading: true
  }, mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
};
</script>
