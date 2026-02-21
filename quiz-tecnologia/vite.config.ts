import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
// Importamos o plugin que acabamos de instalar para ler o tsconfig.json
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
   // Adicionamos o tsconfigPaths() na lista de plugins
   plugins: [react(), tsconfigPaths()],
   test: {
      globals: true,
      environment: "jsdom",
      include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      coverage: {
         reporter: ["text", "json", "html"],
      },
   },
});
