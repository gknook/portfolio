import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
import store from "./store/index.js";

import ParagraphHeader from "/src/components/atoms/ParagraphHeader.vue";
import ParagraphContent from "/src/components/atoms/ParagraphContent.vue";

const app = createApp(App);

app.component("ParagraphHeader", ParagraphHeader);
app.component("ParagraphContent", ParagraphContent);
app.use(router).use(store).mount("#app");
