import type { App } from "vue";

import { setupGlobLazy } from "./lazy";

export function setupGlobDirectives(app: App) {
  setupGlobLazy(app);
}
