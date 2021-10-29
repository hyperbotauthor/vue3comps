import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import buble from "@rollup/plugin-buble";

const plugins = [vue(), postcss(), typescript(), buble()];

const external = ["vue"];

const name = "Labeled";

export default [
  // Universal Module Definition, works as amd, cjs and iife all in one
  {
    input: "src/index.ts",
    external,
    output: {
      name,
      file: `dist/index.umd.js`,
      format: "umd",
      sourcemap: true,
      exports: "named",
      globals: {
        vue: "Vue",
      },
    },
    plugins,
  },
];
