import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_Bt9qrC0D.mjs";
import { manifest } from "./manifest_1DVPUtJD.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/admin/crear-publicacion.astro.mjs");
const _page2 = () => import("./pages/admin.astro.mjs");
const _page3 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a8797184678e346aeaa998a626af1050/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
const _args = {
  "middlewareSecret": "fc2b4c4b-caa8-49d1-a15f-8e64f70cf149",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
