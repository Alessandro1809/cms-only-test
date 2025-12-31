import { v as decodeKey } from "./chunks/astro/server_B9nb4zjO.mjs";
import "clsx";
import "./chunks/astro-designed-error-pages_DAK7QxKN.mjs";
import { N as NOOP_MIDDLEWARE_FN } from "./chunks/noop-middleware_otGcZIJW.mjs";
function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}
const manifest = deserializeManifest({"hrefRoot":"file:///Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/","cacheDir":"file:///Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.astro/","outDir":"file:///Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/dist/","srcDir":"file:///Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/","publicDir":"file:///Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/public/","buildClientDir":"file:///Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/dist/client/","buildServerDir":"file:///Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.4h71tmaW.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a8797184678e346aeaa998a626af1050/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.4h71tmaW.js"}],"styles":[{"type":"external","src":"/_astro/crear-publicacion.BaSXpx_6.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%;background-color:var(--color-primary)}@font-face{font-family:alexandria;src:url(/alexandria.woff2) format(\"woff2\"),url(/alexandria.woff) format(\"woff\");font-display:swap}\n"}],"routeData":{"route":"/admin/crear-publicacion","isIndex":false,"type":"page","pattern":"^\\/admin\\/crear-publicacion\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"crear-publicacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/crear-publicacion.astro","pathname":"/admin/crear-publicacion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.4h71tmaW.js"}],"styles":[{"type":"external","src":"/_astro/crear-publicacion.BaSXpx_6.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%;background-color:var(--color-primary)}@font-face{font-family:alexandria;src:url(/alexandria.woff2) format(\"woff2\"),url(/alexandria.woff) format(\"woff\");font-display:swap}\n"}],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.4h71tmaW.js"}],"styles":[{"type":"external","src":"/_astro/crear-publicacion.BaSXpx_6.css"},{"type":"inline","content":"#menu-toggle[data-astro-cid-fzcvv56t]:checked~div[data-astro-cid-fzcvv56t] label[data-astro-cid-fzcvv56t] span[data-astro-cid-fzcvv56t]:nth-child(1){transform:rotate(45deg) translate(5px,6px)}#menu-toggle[data-astro-cid-fzcvv56t]:checked~div[data-astro-cid-fzcvv56t] label[data-astro-cid-fzcvv56t] span[data-astro-cid-fzcvv56t]:nth-child(2){opacity:0}#menu-toggle[data-astro-cid-fzcvv56t]:checked~div[data-astro-cid-fzcvv56t] label[data-astro-cid-fzcvv56t] span[data-astro-cid-fzcvv56t]:nth-child(3){transform:rotate(-45deg) translate(5px,-7px)}#menu-toggle[data-astro-cid-fzcvv56t]:checked~nav[data-astro-cid-fzcvv56t]{max-height:100vh}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html,body{margin:0;width:100%;height:100%;background-color:var(--color-primary)}@font-face{font-family:alexandria;src:url(/alexandria.woff2) format(\"woff2\"),url(/alexandria.woff) format(\"woff\");font-display:swap}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.4h71tmaW.js"}],"styles":[{"type":"external","src":"/_astro/crear-publicacion.BaSXpx_6.css"},{"type":"inline","content":"#menu-toggle[data-astro-cid-fzcvv56t]:checked~div[data-astro-cid-fzcvv56t] label[data-astro-cid-fzcvv56t] span[data-astro-cid-fzcvv56t]:nth-child(1){transform:rotate(45deg) translate(5px,6px)}#menu-toggle[data-astro-cid-fzcvv56t]:checked~div[data-astro-cid-fzcvv56t] label[data-astro-cid-fzcvv56t] span[data-astro-cid-fzcvv56t]:nth-child(2){opacity:0}#menu-toggle[data-astro-cid-fzcvv56t]:checked~div[data-astro-cid-fzcvv56t] label[data-astro-cid-fzcvv56t] span[data-astro-cid-fzcvv56t]:nth-child(3){transform:rotate(-45deg) translate(5px,-7px)}#menu-toggle[data-astro-cid-fzcvv56t]:checked~nav[data-astro-cid-fzcvv56t]{max-height:100vh}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html,body{margin:0;width:100%;height:100%;background-color:var(--color-primary)}@font-face{font-family:alexandria;src:url(/alexandria.woff2) format(\"woff2\"),url(/alexandria.woff) format(\"woff\");font-display:swap}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.4h71tmaW.js"}],"styles":[{"type":"external","src":"/_astro/crear-publicacion.BaSXpx_6.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/admin/crear-publicacion.astro",{"propagation":"none","containsHead":true}],["/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/admin/crear-publicacion@_@astro":"pages/admin/crear-publicacion.astro.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a8797184678e346aeaa998a626af1050/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BFmiOHa_.mjs","/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a8797184678e346aeaa998a626af1050/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C2fTEexz.mjs","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.D2ZhoG4M.js","@/components/admin/posts/PageTitle":"_astro/PageTitle.YhPfcxA5.js","@/components/web/blog/BlogHeader":"_astro/BlogHeader.CRwFHoSo.js","@/components/web/blog/BlogContent":"_astro/BlogContent.BWUF0DqF.js","@/components/web/blog/BlogSidebar":"_astro/BlogSidebar.BQSVg3xz.js","@/components/web/blog/BlogList":"_astro/BlogList.BingfWay.js","/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts":"_astro/UserButtonMenuItems.astro_astro_type_script_index_0_lang.DjJJDhXb.js","/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts":"_astro/SignedInCSR.astro_astro_type_script_index_0_lang.BxeYPnj-.js","/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts":"_astro/SignedOutCSR.astro_astro_type_script_index_0_lang.DUMW6J2H.js","/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/ProtectCSR.astro?astro&type=script&index=0&lang.ts":"_astro/ProtectCSR.astro_astro_type_script_index_0_lang.B7OIBUi1.js","/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a8797184678e346aeaa998a626af1050/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.aAuqw3Fn.js","astro:scripts/page.js":"_astro/page.4h71tmaW.js","/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/dashboard/react":"_astro/react.Darwng0G.js","@astrojs/react/client.js":"_astro/client.YfF6tU2D.js","@/components/admin/posts/CreatePostForm":"_astro/CreatePostForm.CfmjB0Uk.js"},"inlinedScripts":[["/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts","class e extends HTMLElement{constructor(){super()}}customElements.define(\"clerk-user-button-menu-items\",e);"]],"assets":["/_astro/subscribeImage.vY1ZlkZP.png","/_astro/footerpattern.CADZaDEA.svg","/_astro/crear-publicacion.BaSXpx_6.css","/alexandria.woff2","/favicon.svg","/_astro/AuthorBadge.Cl7nlxCR.js","/_astro/BaseClerkControlElement.DLD9M1q3.js","/_astro/BlogCard.DHnCHP15.js","/_astro/BlogContent.BWUF0DqF.js","/_astro/BlogHeader.CRwFHoSo.js","/_astro/BlogList.BingfWay.js","/_astro/BlogSidebar.BQSVg3xz.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.aAuqw3Fn.js","/_astro/CreatePostForm.CfmjB0Uk.js","/_astro/PageTitle.YhPfcxA5.js","/_astro/ProtectCSR.astro_astro_type_script_index_0_lang.B7OIBUi1.js","/_astro/SignedInCSR.astro_astro_type_script_index_0_lang.BxeYPnj-.js","/_astro/SignedOutCSR.astro_astro_type_script_index_0_lang.DUMW6J2H.js","/_astro/categoryLabels.CBjB4mnr.js","/_astro/chunk-MZTESQVU.DFZtgiu1.js","/_astro/client.YfF6tU2D.js","/_astro/client.rVdb3Gev.js","/_astro/index.Bjon1PXu.js","/_astro/index.DB02PGg6.js","/_astro/index.DfxlaTdM.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/page.4h71tmaW.js","/_astro/react.Darwng0G.js","/_astro/useCategories.B1-Y78JO.js","/_astro/astro_scripts/before-hydration.js.D2ZhoG4M.js","/_astro/page.4h71tmaW.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"aFTFywiAS2sNm1Lp3vTlli7Se1mHbUE60HenMFMVGsc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;
export {
  manifest
};
