<template>
  <div id="app">
    <Loader :isLoading="isLoading" />
    <div v-if="!isLoading">
      <HomeView />
    </div>
  </div>
</template>

<script>
import HomeView from "./Views/HomeView.vue";
import Loader from "./components/loader/loader.vue";
export default {
  name: "app",
  components: { HomeView, Loader },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
};
</script>
