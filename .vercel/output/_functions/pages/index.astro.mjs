import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, q as renderHead, h as addAttribute } from "../chunks/astro/server_B9nb4zjO.mjs";
/* empty css                                             */
import { dark } from "@clerk/themes";
import { $ as $$InternalUIComponentRenderer } from "../chunks/InternalUIComponentRenderer_CVYnP8A9.mjs";
import { renderers } from "../renderers.mjs";
const $$Astro$1 = createAstro();
const $$SignIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SignIn;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "sign-in" })}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/SignIn.astro", void 0);
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { userId } = await Astro2.locals.auth();
  if (userId) {
    return Astro2.redirect("/admin");
  }
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>NOUS CMS welcome</title>${renderHead()}</head> <body class="bg-black min-h-screen flex items-center justify-center relative overflow-hidden"> <!-- Prismatic Aurora Burst - Multi-layered Gradient (Consistent with AdminLayout) --> <div class="absolute inset-0 z-0"${addAttribute({
    background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `
  }, "style")}></div> <div class="z-10 relative w-full max-w-md px-4"> <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl"> <div class="mb-8 text-center"> <h1 class="text-3xl font-bold text-white mb-2">
Bienvenido!
</h1> <p class="text-gray-400">
Inicia sesión para gestionar el contenido del blog
</p> </div> <div class="flex justify-center"> ${renderComponent($$result, "SignIn", $$SignIn, { "routing": "hash", "forceRedirectUrl": "/admin", "appearance": {
    baseTheme: dark,
    elements: {
      rootBox: "w-full",
      card: "bg-transparent shadow-none w-full p-0",
      headerTitle: "hidden",
      headerSubtitle: "hidden",
      formButtonPrimary: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-none"
    }
  } })} </div> </div> </div> </body></html>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/index.astro", void 0);
const $$file = "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
