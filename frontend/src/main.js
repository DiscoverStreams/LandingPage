import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Highcharts from 'highcharts';
import boost from "highcharts/modules/boost";

boost(Highcharts);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");