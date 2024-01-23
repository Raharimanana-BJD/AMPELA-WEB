// main.js
import { createApp } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import "boxicons/css/boxicons.css"
import App from "./App.vue";

const app = createApp(App);

app.mount("#app");

// Initialize AOS after mounting the app
app.config.globalProperties.$nextTick(() => {
    AOS.init();
});
