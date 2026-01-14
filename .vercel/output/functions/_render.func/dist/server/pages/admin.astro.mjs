import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from "../chunks/astro/server_B9nb4zjO.mjs";
import { $ as $$AdminLayout } from "../chunks/AdminLayout_Ciq6c8Lo.mjs";
import "clsx";
import { renderers } from "../renderers.mjs";
const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, text, variant = "primaryrounded", icon = false } = Astro2.props;
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`px-6 py-3 font-semibold rounded-full transition-all ${variant === "primaryrounded" ? "bg-secondary-light text-primary hover:bg-secondary-light/80" : "bg-secondary-light text-primary hover:bg-secondary-light/80"}`, "class")}>${icon && renderTemplate`<svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>`}${text}</a>` : renderTemplate`<button${addAttribute(`px-6 py-3 font-semibold rounded-full transition-all ${variant === "primaryrounded" ? "bg-secondary-light text-primary hover:bg-secondary-light/80" : "bg-secondary-light text-primary hover:bg-secondary-light/80"}`, "class")}>${icon && renderTemplate`<svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>`}${text}</button>`}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/ui/Button.astro", void 0);
const $$DashboardHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="container mx-auto max-w-12xl"> <div class="flex items-center justify-between py-4 px-12"> <h3 class="text-xl font-bold text-[#515B54]">Publicaciones del Blog</h3> ${renderComponent($$result, "Button", $$Button, { "href": "/admin/crear-publicacion", "text": "Agregar publicación", "variant": "primaryrounded", "icon": true })} </div> </header>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/dashboard/DashboardHeader.astro", void 0);
const $$BlogDashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto max-w-12xl mt-10"> <div class="glass rounded-xl border border-green-400"> ${renderComponent($$result, "DashboardHeader", $$DashboardHeader, {})} ${renderComponent($$result, "PostsDashboard", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/dashboard/react", "client:component-export": "PostsDashboard" })} </div> </section>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/dashboard/BlogDashboard.astro", void 0);
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Panel de administracion" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StatusCards", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/admin/dashboard/react", "client:component-export": "StatusCards" })} ${renderComponent($$result2, "BlogDashboard", $$BlogDashboard, {})} ` })}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/admin/index.astro", void 0);
const $$file = "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/admin/index.astro";
const $$url = "/admin";
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
