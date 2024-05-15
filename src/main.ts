import "virtual:uno.css";
import { createSSRApp } from "vue";

import Card from "@/components/Card/index.vue";

import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);

  app.component("Card", Card);

  return {
    app,
  };
}
