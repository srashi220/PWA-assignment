import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: false, 
    }),
  ],
  server: {
    host: true,  // This makes the server accessible to other devices on the network
  }
});

// VAPID -
//   BETf8SxGWaKcmlAddqSfIpZEe45BCajvmDiKIrwbojLhdMlhT5aXrPSr_ILhQnQQWzbPiHr13asjcadxPhpDNVk;
