// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';

// https://astro.build/config
export default defineConfig({
    output: "server",
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: import.meta.env.PROD ? {
                "react-dom/server": "react-dom/server.edge"
            } : undefined
        }
    },

    integrations: [react(), clerk()],
    adapter: vercel()
});
