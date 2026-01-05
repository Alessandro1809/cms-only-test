// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import clerk from '@clerk/astro';

// Clerk sin dominio personalizado - usando dominio por defecto
// https://astro.build/config
export default defineConfig({
    output: "server",
    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [react(), clerk()],
    adapter: vercel()
});
