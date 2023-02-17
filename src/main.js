import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Make BootstrapVue available throughout your project

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
