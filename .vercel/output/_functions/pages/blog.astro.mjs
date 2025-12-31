import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, p as Fragment } from "../chunks/astro/server_B9nb4zjO.mjs";
import { B as BlogCard, c as fetchPublishedPosts, d as fetchCategories, $ as $$Layout } from "../chunks/BlogCard_HNdrRCgQ.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import "clsx";
import { renderers } from "../renderers.mjs";
const BlogList = ({
  posts,
  variant = "grid",
  currentPage = 1,
  totalPages = 1,
  onPageChange
}) => {
  if (!posts || posts.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-lg", children: "No hay publicaciones disponibles" }) });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: variant === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6",
        children: posts.map((post) => /* @__PURE__ */ jsx(BlogCard, { post, variant }, post.id))
      }
    ),
    totalPages > 1 && onPageChange && /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-2 mt-12", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onPageChange(currentPage - 1),
          disabled: currentPage === 1,
          className: "px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition",
          children: "Anterior"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: Array.from({ length: totalPages }, (_, i) => i + 1).map((page2) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onPageChange(page2),
          className: `px-4 py-2 rounded-lg transition ${page2 === currentPage ? "bg-secondary-light text-white font-semibold" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`,
          children: page2
        },
        page2
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onPageChange(currentPage + 1),
          disabled: currentPage === totalPages,
          className: "px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition",
          children: "Siguiente"
        }
      )
    ] })
  ] });
};
const $$Astro$2 = createAstro();
const $$BlogSearchBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogSearchBar;
  const { searchValue = "", totalResults } = Astro2.props;
  return renderTemplate`<!-- Barra de búsqueda -->${maybeRenderHead()}<div class="flex justify-center mb-6"> <div class="relative w-full max-w-2xl"> <input type="text" name="search"${addAttribute(searchValue, "value")} placeholder="Buscar por título, contenido, categoría o etiquetas..." class="w-full pl-12 pr-24 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary-light focus:border-transparent transition text-gray-700"> ${searchValue && renderTemplate`<a href="/blog" class="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition" title="Limpiar búsqueda"> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </a>`} <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-2 bg-secondary-light text-white rounded-full hover:bg-secondary transition font-medium text-sm cursor-pointer"> <svg class="w-5 h-5 text-primary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> </div> </div> <!-- Indicador de resultados --> ${searchValue && totalResults !== void 0 && renderTemplate`<div class="mb-6 text-center"> <p class="text-gray-600"> ${totalResults > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
Se encontraron <span class="font-semibold text-secondary">${totalResults}</span>${" "}${totalResults === 1 ? "resultado" : "resultados"} para${" "}<span class="font-semibold text-secondary">"${searchValue}"</span> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
No se encontraron resultados para${" "}<span class="font-semibold text-secondary">"${searchValue}"</span> ` })}`} </p> </div>`}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/blogComponents/BlogSearchBar.astro", void 0);
const $$Astro$1 = createAstro();
const $$BlogFilters = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogFilters;
  const { categories, selectedCategory = "", selectedOrder = "newest" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col sm:flex-row gap-4 mb-8 mt-12"> <!-- Filtro de Categoría --> <div class="w-full sm:w-auto min-w-[200px]"> <label for="category-filter" class="block text-sm font-semibold text-gray-700 mb-2">
Categoría
</label> <div class="relative"> <select id="category-filter" name="category"${addAttribute(`w-full bg-white border border-gray-300 rounded-full py-2.5 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-light transition ${selectedCategory ? "text-secondary font-medium" : "text-gray-500"}`, "class")} onchange="this.form.submit()"> <option value=""${addAttribute(!selectedCategory, "selected")}>Todas</option> ${categories.map((category) => renderTemplate`<option${addAttribute(category.value, "value")}${addAttribute(selectedCategory === category.value, "selected")}> ${category.label} </option>`)} </select> <!-- Icono de dropdown --> <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> <!-- Filtro de Orden (Tiempo) --> <div class="w-full sm:w-auto min-w-[200px]"> <label for="order-filter" class="block text-sm font-semibold text-gray-700 mb-2">
Tiempo
</label> <div class="relative"> <select id="order-filter" name="order"${addAttribute(`w-full bg-white border border-gray-300 rounded-full py-2.5 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-light transition ${selectedOrder !== "newest" ? "text-secondary font-medium" : "text-gray-500"}`, "class")} onchange="this.form.submit()"> <option value="newest"${addAttribute(selectedOrder === "newest", "selected")}>Más recientes</option> <option value="oldest"${addAttribute(selectedOrder === "oldest", "selected")}>Más antiguos</option> </select> <!-- Icono de dropdown --> <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> <!-- Botón para limpiar filtros (solo si hay filtros activos) --> ${(selectedCategory || selectedOrder !== "newest") && renderTemplate`<div class="w-full sm:w-auto flex items-end"> <a href="/blog" class="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-secondary-light border border-gray-300 rounded-full hover:border-secondary-light transition text-center">
Limpiar filtros
</a> </div>`} </div>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/blogComponents/BlogFilters.astro", void 0);
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const page2 = parseInt(url.searchParams.get("page") || "1");
  const search = url.searchParams.get("search") || "";
  const category = url.searchParams.get("category") || "";
  const order = url.searchParams.get("order") || "newest";
  const limit = 9;
  const offset = (page2 - 1) * limit;
  const { posts, total } = await fetchPublishedPosts(
    limit,
    offset,
    search,
    category,
    order
  );
  const totalPages = Math.ceil(total / limit);
  const categories = await fetchCategories();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto max-w-7xl px-4 pt-32 pb-20"> <header class="mb-12 text-center"> <h1 class="text-5xl font-bold text-secondary mb-4">
Bienvenido a nuestro blog
</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Mira nuestras últimas publicaciones y entérese de lo último en
                Derecho.
</p> </header> <form method="get" action="/blog" class="mb-8"> ${renderComponent($$result2, "BlogSearchBar", $$BlogSearchBar, { "searchValue": search, "totalResults": total })} ${renderComponent($$result2, "BlogFilters", $$BlogFilters, { "categories": categories, "selectedCategory": category, "selectedOrder": order })} <input type="hidden" name="page" value="1"> </form> ${renderComponent($$result2, "BlogList", BlogList, { "posts": posts, "variant": "grid", "currentPage": page2, "totalPages": totalPages, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/web/blog/BlogList", "client:component-export": "BlogList" })} ${totalPages > 1 && renderTemplate`<nav class="flex justify-center items-center gap-2 mt-12"> ${page2 > 1 && renderTemplate`<a${addAttribute(`/blog?page=${page2 - 1}${search ? `&search=${encodeURIComponent(search)}` : ""}${category ? `&category=${encodeURIComponent(category)}` : ""}${order !== "newest" ? `&order=${order}` : ""}`, "href")} class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
Anterior
</a>`} <div class="flex gap-2"> ${Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).map((p) => renderTemplate`<a${addAttribute(`/blog?page=${p}${search ? `&search=${encodeURIComponent(search)}` : ""}${category ? `&category=${encodeURIComponent(category)}` : ""}${order !== "newest" ? `&order=${order}` : ""}`, "href")}${addAttribute(`px-4 py-2 rounded-lg transition ${p === page2 ? "bg-secondary-light text-white font-semibold" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`, "class")}> ${p} </a>`)} </div> ${page2 < totalPages && renderTemplate`<a${addAttribute(`/blog?page=${page2 + 1}${search ? `&search=${encodeURIComponent(search)}` : ""}${category ? `&category=${encodeURIComponent(category)}` : ""}${order !== "newest" ? `&order=${order}` : ""}`, "href")} class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
Siguiente
</a>`} </nav>`} ${posts.length === 0 && renderTemplate`<div class="text-center py-12"> ${search ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <p class="text-gray-500 text-lg mb-4">
No se encontraron publicaciones que coincidan
                                con tu búsqueda
</p> <a href="/blog" class="inline-block px-6 py-2 bg-secondary-light text-white rounded-full hover:bg-secondary transition">
Ver todas las publicaciones
</a> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <p class="text-gray-500 text-lg">
No hay publicaciones disponibles en este
                                momento.
</p> <a href="/" class="inline-block mt-4 text-secondary-light hover:underline">
Volver al inicio
</a> ` })}`} </div>`} </main> ` })}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/blog/index.astro", void 0);
const $$file = "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/blog/index.astro";
const $$url = "/blog";
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
