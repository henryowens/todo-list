import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";

import App from "./App.vue";
import "@/service/fontawsome";
import "./app.scss";

createApp(App).use(VueQueryPlugin).mount("#app");
