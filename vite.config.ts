import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";
import UnoCSS from "unocss/vite";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    generouted({
      source: {
        routes: [
          "./src/pages/**/[\\w[-]*.{jsx,tsx}",
          "!./src/pages/**/[\\w[-]*.test.{jsx,tsx}",
        ],
        modals: "",
      },
    }),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    environment: "jsdom",
    globals: true,
    setupFiles: "src/setupTests.ts",
    // shows the output of all tests even if they passed
    reporters: "verbose",
  },
});
