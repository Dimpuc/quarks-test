import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@icons", replacement: "/src/assets/icons" },
      { find: "@features", replacement: "/src/features" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@components", replacement: "/src/common/components" },
      { find: "@app", replacement: "/src/app" },
    ],
  },
});
