import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";

import App from "./App.vue";
import "@/service/fontawsome";
import "./index.scss";

createApp(App).use(VueQueryPlugin).mount("#app");
