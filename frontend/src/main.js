import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HighchartsVue from "highcharts-vue";

createApp(App)
.use(HighchartsVue)
  .use(store)
  .use(router)
  .mount("#app");