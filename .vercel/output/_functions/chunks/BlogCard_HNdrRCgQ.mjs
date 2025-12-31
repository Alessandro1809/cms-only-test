import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, s as spreadAttributes, u as unescapeHTML, l as renderScript, q as renderHead, n as renderSlot } from "./astro/server_B9nb4zjO.mjs";
/* empty css                                     */
import "clsx";
import { $ as $$Button } from "./Button_Cb6mcSK6.mjs";
/* empty css                          */
import { jsxs, jsx } from "react/jsx-runtime";
import React, { useMemo } from "react";
import { g as getCategoryLabel } from "./categoryLabels_C9bKjRa1.mjs";
const $$Astro$4 = createAstro();
const $$NavLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavLinks;
  const links = [
    {
      href: "/",
      label: "Inicio"
    },
    {
      href: "/areas-de-practica",
      label: "Áreas de práctica"
    },
    {
      href: "/sobre-mi",
      label: "Sobre mí"
    },
    {
      href: "/blog",
      label: "Blog"
    }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav> <div class="text-sm lg:text-base xl:text-lg flex gap-4 lg:gap-6 xl:gap-8 text-secondary font-semibold"> ${links.map((link) => {
    const isActive = currentPath === link.href;
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`relative whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-secondary-light after:transition-all after:duration-300 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`, "class")}> ${link.label} </a>`;
  })} </div> </nav>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/NavLinks.astro", void 0);
const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/areas-de-practica", label: "Áreas de práctica" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/blog", label: "Blog" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 bg-primary has-[:checked]:shadow-lg" data-astro-cid-fzcvv56t> <input type="checkbox" id="menu-toggle" class="hidden" data-astro-cid-fzcvv56t> <div class="container mx-auto px-3 sm:px-6 lg:px-9 text-secondary font-alexandria" data-astro-cid-fzcvv56t> <div class="flex items-center justify-between py-4 md:py-5" data-astro-cid-fzcvv56t> <div class="flex items-center" data-astro-cid-fzcvv56t> <a href="/" class="text-lg sm:text-xl font-bold" data-astro-cid-fzcvv56t>${Astro2.props.title}</a> </div> <div class="hidden lg:block" data-astro-cid-fzcvv56t> ${renderComponent($$result, "NavLinks", $$NavLinks, { "data-astro-cid-fzcvv56t": true })} </div> <div class="hidden lg:block" data-astro-cid-fzcvv56t> ${renderComponent($$result, "Button", $$Button, { "href": "/contacto", "text": "Contacto", "variant": "primaryHeading", "data-astro-cid-fzcvv56t": true })} </div> <label for="menu-toggle" class="lg:hidden cursor-pointer flex flex-col gap-1.5 w-6 z-50" data-astro-cid-fzcvv56t> <span class="block h-0.5 w-full bg-secondary transition-all duration-300 has-[:checked]:rotate-45 has-[:checked]:translate-y-2" data-astro-cid-fzcvv56t></span> <span class="block h-0.5 w-full bg-secondary transition-all duration-300 has-[:checked]:opacity-0" data-astro-cid-fzcvv56t></span> <span class="block h-0.5 w-full bg-secondary transition-all duration-300 has-[:checked]:-rotate-45 has-[:checked]:-translate-y-2" data-astro-cid-fzcvv56t></span> </label> </div> </div> <nav class="lg:hidden absolute top-full left-0 right-0 bg-primary transition-all duration-300 max-h-0 overflow-hidden has-[:checked]:max-h-screen" data-astro-cid-fzcvv56t> <div class="container mx-auto px-3 sm:px-6 py-6 flex flex-col gap-4" data-astro-cid-fzcvv56t> ${links.map((link) => {
    const isActive = currentPath === link.href;
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`text-lg font-semibold py-2 border-l-4 pl-4 transition-all ${isActive ? "border-secondary-light text-secondary-light" : "border-transparent hover:border-secondary-light hover:text-secondary-light"}`, "class")} data-astro-cid-fzcvv56t> ${link.label} </a>`;
  })} <div class="mt-2" data-astro-cid-fzcvv56t> ${renderComponent($$result, "Button", $$Button, { "href": "/contacto", "text": "Contacto", "variant": "primaryHeading", "data-astro-cid-fzcvv56t": true })} </div> </div> </nav> </header> `;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/web/layout/Header.astro", void 0);
function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}
const footerPattern = createSvgComponent({ "meta": { "src": "/_astro/footerpattern.CADZaDEA.svg", "width": 771, "height": 131, "format": "svg" }, "attributes": { "width": "771", "height": "131", "viewBox": "0 0 771 131", "fill": "none" }, "children": '\n<g clip-path="url(#clip0_33_163)">\n<rect width="771" height="131" fill="url(#pattern0_33_163)" />\n<rect width="775" height="131" fill="url(#paint0_linear_33_163)" />\n</g>\n<defs>\n<linearGradient id="paint0_linear_33_163" x1="2.48724e-09" y1="66" x2="775" y2="65.4935" gradientUnits="userSpaceOnUse">\n<stop stop-color="#232925" />\n<stop offset="0.245068" stop-color="#232925" stop-opacity="0" />\n<stop offset="0.495766" stop-color="white" stop-opacity="0" />\n<stop offset="0.720608" stop-color="#232925" stop-opacity="0" />\n<stop offset="1" stop-color="#232925" />\n</linearGradient>\n<clipPath id="clip0_33_163">\n<rect width="771" height="131" fill="white" />\n</clipPath>\n<pattern id="pattern0_33_163" patternUnits="userSpaceOnUse" patternTransform="matrix(75.6 0 0 143.64 0 0)" preserveAspectRatio="none" viewBox="0 0 75.6 143.64" width="1" height="1">\n<use xlink:href="#pattern0_33_163_inner" transform="translate(-75.6 0)" />\n<g id="pattern0_33_163_inner">\n<path d="M12.7499 2.75V4.5H14.7249C15.0759 4.5 15.4189 4.606 15.7089 4.803L17.4059 5.957C17.4479 5.985 17.4946 5.99933 17.5459 6H21.6479C21.8468 6 22.0376 6.07902 22.1782 6.21967C22.3189 6.36032 22.3979 6.55109 22.3979 6.75C22.3979 6.94891 22.3189 7.13968 22.1782 7.28033C22.0376 7.42098 21.8468 7.5 21.6479 7.5H20.0699L23.4359 15.18C23.5033 15.3336 23.5172 15.5053 23.4755 15.6677C23.4338 15.8301 23.3389 15.9739 23.2059 16.076C23.1059 16.15 23.0026 16.2187 22.8959 16.282C22.6428 16.4343 22.3787 16.5676 22.1059 16.681C21.2014 17.0593 20.2303 17.2527 19.2499 17.25C18.2698 17.2543 17.2988 17.0611 16.3949 16.682C16.1221 16.5683 15.858 16.4346 15.6049 16.282C15.4986 16.221 15.396 16.1535 15.2979 16.08L15.2929 16.076C15.1599 15.9739 15.065 15.8301 15.0233 15.6677C14.9816 15.5053 14.9956 15.3336 15.0629 15.18L18.4309 7.5H17.5449C17.1939 7.5 16.8509 7.394 16.5609 7.197L14.8639 6.043C14.8226 6.01501 14.7738 6.00004 14.7239 6H12.7499V20.5H17.2369C17.4358 20.5 17.6266 20.579 17.7672 20.7197C17.9079 20.8603 17.9869 21.0511 17.9869 21.25C17.9869 21.4489 17.9079 21.6397 17.7672 21.7803C17.6266 21.921 17.4358 22 17.2369 22H6.76292C6.564 22 6.37324 21.921 6.23259 21.7803C6.09193 21.6397 6.01292 21.4489 6.01292 21.25C6.01292 21.0511 6.09193 20.8603 6.23259 20.7197C6.37324 20.579 6.564 20.5 6.76292 20.5H11.2499V6H9.27492C9.225 6.00004 9.17624 6.01501 9.13492 6.043L7.43892 7.197C7.14892 7.394 6.80592 7.5 6.45492 7.5H5.56892L8.93692 15.18C9.00211 15.3292 9.01697 15.4956 8.97927 15.654C8.94156 15.8124 8.85334 15.9542 8.72792 16.058C8.64792 16.123 8.56792 16.184 8.41792 16.281C8.16516 16.445 7.90041 16.5898 7.62592 16.714C6.72297 17.125 5.74201 17.3365 4.74992 17.334C3.75783 17.3365 2.77686 17.125 1.87392 16.714C1.59942 16.5898 1.33467 16.445 1.08192 16.281C0.975475 16.2123 0.872359 16.1385 0.772917 16.06C0.648232 15.9552 0.56052 15.8131 0.522711 15.6547C0.484902 15.4962 0.498997 15.3298 0.562917 15.18L3.92992 7.5H2.35292C2.154 7.5 1.96324 7.42098 1.82259 7.28033C1.68193 7.13968 1.60292 6.94891 1.60292 6.75C1.60292 6.55109 1.68193 6.36032 1.82259 6.21967C1.96324 6.07902 2.154 6 2.35292 6H6.45492C6.50558 6 6.55258 5.98567 6.59592 5.957L8.29092 4.803C8.58092 4.605 8.92492 4.5 9.27592 4.5H11.2499V2.75C11.2499 2.55109 11.3289 2.36032 11.4696 2.21967C11.6102 2.07902 11.801 2 11.9999 2C12.1988 2 12.3896 2.07902 12.5302 2.21967C12.6709 2.36032 12.7499 2.55109 12.7499 2.75ZM2.19292 15.198C2.97975 15.6175 3.85823 15.8357 4.74992 15.833C5.64161 15.8357 6.52009 15.6175 7.30692 15.198L4.74992 9.368L2.19292 15.198ZM16.7029 15.174C16.7849 15.214 16.8766 15.256 16.9779 15.3C17.5079 15.523 18.2829 15.75 19.2499 15.75C20.1315 15.7524 21.0022 15.5555 21.7969 15.174L19.2499 9.367L16.7029 15.174Z" fill="#0B8A36" fill-opacity="0.25" />\n<path d="M47.2501 54.25V52.5H45.2751C44.9241 52.5 44.5811 52.394 44.2911 52.197L42.5941 51.043C42.5521 51.015 42.5054 51.0007 42.4541 51H38.3521C38.1532 51 37.9624 50.921 37.8218 50.7803C37.6811 50.6397 37.6021 50.4489 37.6021 50.25C37.6021 50.0511 37.6811 49.8603 37.8218 49.7197C37.9624 49.579 38.1532 49.5 38.3521 49.5H39.9301L36.5641 41.82C36.4967 41.6664 36.4828 41.4947 36.5245 41.3323C36.5662 41.1699 36.6611 41.0261 36.7941 40.924C36.8941 40.85 36.9974 40.7813 37.1041 40.718C37.3572 40.5657 37.6213 40.4324 37.8941 40.319C38.7986 39.9407 39.7697 39.7473 40.7501 39.75C41.7302 39.7457 42.7012 39.9389 43.6051 40.318C43.8779 40.4317 44.142 40.5654 44.3951 40.718C44.5014 40.779 44.604 40.8465 44.7021 40.92L44.7071 40.924C44.8401 41.0261 44.935 41.1699 44.9767 41.3323C45.0184 41.4947 45.0044 41.6664 44.9371 41.82L41.5691 49.5H42.4551C42.8061 49.5 43.1491 49.606 43.4391 49.803L45.1361 50.957C45.1774 50.985 45.2262 51 45.2761 51H47.2501V36.5H42.7631C42.5642 36.5 42.3734 36.421 42.2328 36.2803C42.0921 36.1397 42.0131 35.9489 42.0131 35.75C42.0131 35.5511 42.0921 35.3603 42.2328 35.2197C42.3734 35.079 42.5642 35 42.7631 35H53.2371C53.436 35 53.6268 35.079 53.7674 35.2197C53.9081 35.3603 53.9871 35.5511 53.9871 35.75C53.9871 35.9489 53.9081 36.1397 53.7674 36.2803C53.6268 36.421 53.436 36.5 53.2371 36.5H48.7501V51H50.7251C50.775 51 50.8238 50.985 50.8651 50.957L52.5611 49.803C52.8511 49.606 53.1941 49.5 53.5451 49.5H54.4311L51.0631 41.82C50.9979 41.6708 50.983 41.5044 51.0207 41.346C51.0584 41.1876 51.1467 41.0458 51.2721 40.942C51.3521 40.877 51.4321 40.816 51.5821 40.719C51.8348 40.555 52.0996 40.4102 52.3741 40.286C53.277 39.875 54.258 39.6635 55.2501 39.666C56.2422 39.6635 57.2231 39.875 58.1261 40.286C58.4006 40.4102 58.6653 40.555 58.9181 40.719C59.0245 40.7877 59.1276 40.8615 59.2271 40.94C59.3518 41.0448 59.4395 41.1869 59.4773 41.3453C59.5151 41.5038 59.501 41.6702 59.4371 41.82L56.0701 49.5H57.6471C57.846 49.5 58.0368 49.579 58.1774 49.7197C58.3181 49.8603 58.3971 50.0511 58.3971 50.25C58.3971 50.4489 58.3181 50.6397 58.1774 50.7803C58.0368 50.921 57.846 51 57.6471 51H53.5451C53.4944 51 53.4474 51.0143 53.4041 51.043L51.7091 52.197C51.4191 52.395 51.0751 52.5 50.7241 52.5H48.7501V54.25C48.7501 54.4489 48.6711 54.6397 48.5304 54.7803C48.3898 54.921 48.199 55 48.0001 55C47.8012 55 47.6104 54.921 47.4698 54.7803C47.3291 54.6397 47.2501 54.4489 47.2501 54.25ZM57.8071 41.802C57.0203 41.3825 56.1418 41.1643 55.2501 41.167C54.3584 41.1643 53.4799 41.3825 52.6931 41.802L55.2501 47.632L57.8071 41.802ZM43.2971 41.826C43.2151 41.786 43.1234 41.744 43.0221 41.7C42.4921 41.477 41.7171 41.25 40.7501 41.25C39.8685 41.2476 38.9978 41.4445 38.2031 41.826L40.7501 47.633L43.2971 41.826Z" fill="#0B8A36" fill-opacity="0.25" />\n<g clip-path="url(#clip1_33_163)">\n<path d="M36.8572 22.7829H49.7143M48 22.7829V18.4972H38.5715V22.7829M49.3492 1.71774L43.2035 7.86345C42.8821 8.18493 42.7015 8.62089 42.7015 9.07545C42.7015 9.53002 42.8821 9.96598 43.2035 10.2875L45.9189 13.0029C46.2404 13.3243 46.6763 13.5048 47.1309 13.5048C47.5855 13.5048 48.0214 13.3243 48.3429 13.0029L54.4886 6.85717C54.81 6.53569 54.9905 6.09974 54.9905 5.64517C54.9905 5.1906 54.81 4.75464 54.4886 4.43317L51.7715 1.71774C51.45 1.39636 51.014 1.21582 50.5595 1.21582C50.1049 1.21582 49.6689 1.39636 49.3475 1.71774M51.4286 9.92574L59.1429 17.64" stroke="#0B8A36" stroke-opacity="0.25" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />\n</g>\n<g clip-path="url(#clip2_33_163)">\n<path d="M0.857178 55.7829H13.7143M12 55.7829V51.4972H2.57146V55.7829M13.3492 34.7177L7.20346 40.8635C6.88208 41.1849 6.70154 41.6209 6.70154 42.0755C6.70154 42.53 6.88208 42.966 7.20346 43.2875L9.91889 46.0029C10.2404 46.3243 10.6763 46.5048 11.1309 46.5048C11.5855 46.5048 12.0214 46.3243 12.3429 46.0029L18.4886 39.8572C18.81 39.5357 18.9905 39.0997 18.9905 38.6452C18.9905 38.1906 18.81 37.7546 18.4886 37.4332L15.7715 34.7177C15.45 34.3964 15.014 34.2158 14.5595 34.2158C14.1049 34.2158 13.6689 34.3964 13.3475 34.7177M15.4286 42.9257L23.1429 50.64" stroke="#0B8A36" stroke-opacity="0.25" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />\n</g>\n</g>\n<use xlink:href="#pattern0_33_163_inner" transform="translate(-37.8 71.82)" />\n<use xlink:href="#pattern0_33_163_inner" transform="translate(37.8 71.82)" />\n</pattern><clipPath id="clip1_33_163">\n<rect width="24" height="24" fill="white" transform="translate(36)" />\n</clipPath>\n<clipPath id="clip2_33_163">\n<rect width="24" height="24" fill="white" transform="translate(0 33)" />\n</clipPath>\n</defs>\n' });
const $$SocialMediaIcons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-4 mt-6"> <a href="#" class="hover:opacity-70 transition-opacity" aria-label="Facebook"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <a href="#" class="hover:opacity-70 transition-opacity" aria-label="LinkedIn"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <a href="#" class="hover:opacity-70 transition-opacity" aria-label="WhatsApp"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg> </a> <a href="#" class="hover:opacity-70 transition-opacity" aria-label="Instagram"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path> </svg> </a> </div>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/footerComponents/SocialMediaIcons.astro", void 0);
const $$FooterContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <h4 class="font-bold text-lg mb-4">Contacto</h4> <ul class="space-y-3 text-sm"> <li class="flex items-start gap-2"> <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span>Lunes a sábados de 8:00 am a 5:00 pm</span> </li> <li class="flex items-start gap-2"> <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>San José, San José, Costa Rica</span> </li> <li class="flex items-start gap-2"> <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>contacto@rsf.com</span> </li> <li class="flex items-start gap-2"> <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>8888-8888</span> </li> </ul> ${renderComponent($$result, "SocialMediaIcons", $$SocialMediaIcons, {})} </div>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/footerComponents/FooterContact.astro", void 0);
const $$Astro$2 = createAstro();
const $$FooterLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FooterLinks;
  const { title, links, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> <h4 class="font-bold text-lg mb-4">${title}</h4> <ul class="space-y-2 text-sm"> ${links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:underline"> ${link.text} </a> </li>`)} </ul> </div>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/footerComponents/FooterLinks.astro", void 0);
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const practiceAreasLinks = [
    { text: "Derecho administrativo", href: "#" },
    { text: "Derecho corporativo", href: "#" },
    { text: "Contratación pública", href: "#" },
    { text: "Procesos tributarios", href: "#" },
    { text: "Regímenes especiales", href: "#" },
    { text: "Compliance and risk", href: "#" }
  ];
  const aboutLinks = [
    { text: "Biografía", href: "#" },
    { text: "Colegiatura y credenciales", href: "#" },
    { text: "Reconocimientos", href: "#" },
    { text: "Testimonios", href: "#" }
  ];
  const blogLinks = [
    { text: "Artículos", href: "#" },
    { text: "Noticias", href: "#" },
    { text: "Opinión", href: "#" },
    { text: "Reseñas", href: "#" },
    { text: "Guías legales", href: "#" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="my-20 px-4 bg-secondary text-primary"> <div class="flex flex-col items-center justify-between md:flex-row gap-4 py-8 container mx-auto max-w-7xl"> <div> <h3>Randall Solano fallas(logo)</h3> <p>Su socio estratégico en decisiones legales</p> </div> <div class=""> <img${addAttribute(footerPattern.src, "src")} alt="" class=""> </div> </div> <div class="h-px w-full bg-secondary-light"></div> <div class="container mx-auto max-w-7xl py-12"> <div class="grid grid-cols-1 md:grid-cols-5 space-y-8 md:space-y-0 gap-2"> ${renderComponent($$result, "FooterContact", $$FooterContact, {})} ${renderComponent($$result, "FooterLinks", $$FooterLinks, { "title": "Áreas de práctica", "links": practiceAreasLinks, "className": "md:col-start-3" })} ${renderComponent($$result, "FooterLinks", $$FooterLinks, { "title": "Sobre mí", "links": aboutLinks })} ${renderComponent($$result, "FooterLinks", $$FooterLinks, { "title": "Blog", "links": blogLinks })} </div> </div> </footer>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/web/layout/Footer.astro", void 0);
const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a8797184678e346aeaa998a626af1050/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_a8797184678e346aeaa998a626af1050/node_modules/astro/components/ClientRouter.astro", void 0);
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Blog CMS</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/layouts/Layout.astro", void 0);
const API_URL = "http://localhost:3000/api/v1";
async function fetchPublishedPosts(limit = 10, offset = 0, search, category, order) {
  try {
    const params = new URLSearchParams({
      status: "PUBLISHED",
      limit: limit.toString(),
      offset: offset.toString()
    });
    if (search && search.trim()) {
      params.append("search", search.trim());
    }
    if (category && category.trim()) {
      params.append("categorie", category.trim());
    }
    if (order) {
      params.append("order", order);
    }
    const response = await fetch(`${API_URL}/posts?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { posts: [], total: 0, limit, offset };
  }
}
async function fetchPostBySlug(slug) {
  try {
    const response = await fetch(`${API_URL}/posts/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
async function fetchRelatedPosts(currentPostId, category, limit = 3) {
  try {
    const response = await fetch(
      `${API_URL}/posts?status=PUBLISHED&categorie=${category}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.posts.filter((post) => post.id !== currentPostId);
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}
async function fetchCategories() {
  try {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
async function fetchNextPost(currentPostId) {
  try {
    const response = await fetch(
      `${API_URL}/posts?status=PUBLISHED&limit=100&order=newest`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    const currentIndex = data.posts.findIndex((post) => post.id === currentPostId);
    if (currentIndex === -1 || currentIndex === data.posts.length - 1) {
      return null;
    }
    return data.posts[currentIndex + 1];
  } catch (error) {
    console.error("Error fetching next post:", error);
    return null;
  }
}
const AuthorBadge = ({
  author,
  size = "sm",
  showName = true
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base"
  };
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  const getInitials = (name) => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };
  const displayName = author?.name || "Randall Solano Fallas";
  const initials = getInitials(displayName);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
    author?.avatar ? /* @__PURE__ */ jsx(
      "img",
      {
        src: author.avatar,
        alt: displayName,
        className: `${sizeClasses[size]} rounded-full object-cover`
      }
    ) : /* @__PURE__ */ jsx(
      "div",
      {
        className: `${sizeClasses[size]} rounded-full bg-secondary-light text-white flex items-center justify-center font-bold`,
        children: initials
      }
    ),
    showName && /* @__PURE__ */ jsx("span", { className: `${textSizeClasses[size]} text-gray-600 font-medium`, children: displayName })
  ] });
};
const BlogCard = React.memo(({ post, variant = "grid" }) => {
  const formattedDate = useMemo(() => {
    const date = new Date(post.createdAt);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
  }, [post.createdAt]);
  const categoryLabel = useMemo(
    () => post.categorie ? getCategoryLabel(post.categorie) : null,
    [post.categorie]
  );
  if (variant === "list") {
    return /* @__PURE__ */ jsxs("article", { className: "flex flex-col md:flex-row gap-6 p-2 glass rounded-lg border border-white/5 hover:shadow-lg transition-shadow shadow-secondary-light", children: [
      post.featuredImage && /* @__PURE__ */ jsx("div", { className: "md:w-64 h-48 flex-shrink-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: post.featuredImage,
          alt: post.title,
          className: "w-full h-full object-cover rounded-lg",
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        categoryLabel && /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-secondary-light text-white text-xs font-semibold rounded-full mb-3", children: categoryLabel }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-[var(--color-secondary)] mb-2 hover:text-secondary-light transition", children: /* @__PURE__ */ jsx("a", { href: `/blog/${post.slug}`, children: post.title }) }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4 line-clamp-2", children: post.excerpt }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsx(AuthorBadge, { author: post.author, size: "sm" }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "•" }),
          /* @__PURE__ */ jsx("time", { className: "text-gray-500", dateTime: post.createdAt, children: formattedDate })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("article", { className: "glass overflow-hidden hover:shadow-[0_0_16px_0_rgba(3,222,130,0.1)] shadow-secondary-light p-2 rounded-xl border border-white/5 hover:scale-105 duration-300 transition-all", children: [
    post.featuredImage && /* @__PURE__ */ jsx("div", { className: "aspect-video w-full overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: post.featuredImage,
        alt: post.title,
        className: "w-full h-full rounded-lg",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-4", children: [
        /* @__PURE__ */ jsx(AuthorBadge, { author: post.author, size: "sm" }),
        /* @__PURE__ */ jsx("time", { className: "text-sm text-gray-500", dateTime: post.createdAt, children: formattedDate })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[var(--color-secondary)] mb-2 hover:text-secondary-light transition", children: /* @__PURE__ */ jsx("a", { href: `/blog/${post.slug}`, children: post.title }) }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4 line-clamp-3", children: post.excerpt }),
      categoryLabel && /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-secondary-light/60 text-white text-xs font-semibold rounded-full mb-3", children: categoryLabel }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end  py-4 border-t border-white/10", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `/blog/${post.slug}`,
          className: "text-sm font-semibold text-secondary-light hover:underline",
          children: "Leer más →"
        }
      ) })
    ] })
  ] });
});
BlogCard.displayName = "BlogCard";
export {
  $$Layout as $,
  AuthorBadge as A,
  BlogCard as B,
  fetchRelatedPosts as a,
  fetchNextPost as b,
  fetchPublishedPosts as c,
  fetchCategories as d,
  fetchPostBySlug as f
};
