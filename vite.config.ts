import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Custom plugin to inject "built by capy" tag
function injectBuiltByCapyPlugin() {
  return {
    name: 'inject-built-by-capy',
    transformIndexHtml(html: string) {
      // Inject the capy tag script reference
      const scriptTag = '<script defer src="/capy-tag.js"></script>';
      
      // Inject the script before the closing body tag
      return html.replace('</body>', scriptTag + '\n  </body>');
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), injectBuiltByCapyPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
