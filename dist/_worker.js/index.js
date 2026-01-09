globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as renderers } from "./chunks/_@astro-renderers_BkKWZVaW.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_CFlosgc9.mjs";
import { manifest } from "./manifest_zZyDn2WK.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/admin/crear-publicacion.astro.mjs");
const _page2 = () => import("./pages/admin.astro.mjs");
const _page3 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/@astrojs+cloudflare@12.6.12_@types+node@25.0.0_astro@5.16.5_@types+node@25.0.0_@vercel+_a86aa5012fe584160d1922631cbe35cd/node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
  ["src/pages/admin/crear-publicacion.astro", _page1],
  ["src/pages/admin/index.astro", _page2],
  ["src/pages/index.astro", _page3]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./noop-entrypoint.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = void 0;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
