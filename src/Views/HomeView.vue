<template>
  <div id="homeView">
    <Navigation :links="links" />
    <Main />
    <CustomFooter />
  </div>
</template>

<script>
// Components
import Navigation from "../components/01Navigation/Navigation.vue";
import Main from "../components/02Main/Main.vue";
import CustomFooter from "../components/03Footer/Footer.vue";
// Data
import Data from "../Data";
export default {
  name: "homeView",
  components: { Navigation, Main, CustomFooter },
  data() {
    return {
      links: Data.links,
    };
  }
};
</script>