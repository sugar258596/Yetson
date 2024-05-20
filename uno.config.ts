// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

const remRE = /^-?[\.\d]+rem$/;

export default defineConfig({
  shortcuts: [
    {
      "flex-center": "flex justify-center items-center",
      full: "w-full h-full",
    },
    [/^grid-(\d+)-(\d+)$/, ([, c, g = 0]) => `grid grid-cols-${c}  gap-${g}`],
    [/^img-(.*)$/, ([, c]) => `full object-${c}`],
    [/^ma-(\d+)-(\d+)$/, ([, i, b]) => `mx-${i} my-${b}`],
    [/^pa-(\d+)-(\d+)$/, ([, i, b]) => `px-${i} py-${b}`],
    [/^bor-(\d+)-(.*)$/, ([, b, c]) => `b-${b} b-solid b-${c}`],
    [/^bor-rd-(.*)$/, ([, b]) => `b-rd-${b} overflow-hidden`],
    [
      /^border-([tblr])-(\d+)-(.*)$/,
      ([, t, b, c]) => `b-${t}-${b} b-${t}-solid b-${t}-${c}`,
    ],
    [/^t-(.*)$/, ([, s]) => `text-${s} color-zinc-500 `],
  ],
  rules: [
    ["page", { width: "100vw", height: "100%", "min-height": "100vh" }],
    ["bg-linear", { background: "linear-gradient(to right,#9f9fd9, pink)" }],
  ],
  theme: {
    // 解决小程序不支持 * 选择器
    preflightRoot: ["page,::before,::after"],
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  variants: [],
  postprocess(utile) {
    utile.selector = utile.selector
      .replace(/#|\\/g, "")
      .replace(/%/g, "-bf")
      .replace(/(?<=\..*?)\./g, "-");
    // utile.entries.map((i) => {
    //   console.log(i);
    // });
  },
});
