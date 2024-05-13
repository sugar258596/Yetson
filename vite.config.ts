import { defineConfig, loadEnv } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const UnoCSS = await import("unocss/vite").then((i) => i.default);

  return {
    plugins: [
      uni(),
      UnoCSS({
        configFile: "./uno.config.ts",
      }),
    ],
  };
});
