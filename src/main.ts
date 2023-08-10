import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";

import App from "./App.vue";
import "@/service/fontawsome";
import "./index.scss";
import store from "./store";

createApp(App).use(store).use(VueQueryPlugin).mount("#app");
