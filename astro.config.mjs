import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://kch-astro-init.netlify.app/",
  integrations: [react()]
});