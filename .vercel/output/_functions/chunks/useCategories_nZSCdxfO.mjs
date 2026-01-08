import { e as createComponent, f as createAstro, k as renderComponent, l as renderScript, r as renderTemplate, n as renderSlot, o as defineScriptVars, u as unescapeHTML, p as Fragment, m as maybeRenderHead, q as renderHead, h as addAttribute } from "./astro/server_B9nb4zjO.mjs";
/* empty css                                     */
import { g as generateSafeId, $ as $$InternalUIComponentRenderer } from "./InternalUIComponentRenderer_CVYnP8A9.mjs";
import "clsx";
/* empty css                                     */
import { useState, useEffect } from "react";
const $$Astro$d = createAstro();
const $$SignedInCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SignedInCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-in", "clerk-signed-in", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedInCSR.astro", void 0);
const $$Astro$c = createAstro();
const $$SignedInSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SignedInSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedInSSR.astro", void 0);
const configOutput = "server";
function isStaticOutput(forceStatic) {
  if (forceStatic !== void 0) {
    return forceStatic;
  }
  return configOutput === "static";
}
const $$Astro$b = createAstro();
const $$SignedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SignedIn;
  const { isStatic, class: className } = Astro2.props;
  const SignedInComponent = isStaticOutput(isStatic) ? $$SignedInCSR : $$SignedInSSR;
  return renderTemplate`${renderComponent($$result, "SignedInComponent", SignedInComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedIn.astro", void 0);
const $$Astro$a = createAstro();
const $$SignedOutCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SignedOutCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-out", "clerk-signed-out", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedOutCSR.astro", void 0);
const $$Astro$9 = createAstro();
const $$SignedOutSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SignedOutSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${!userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedOutSSR.astro", void 0);
const $$Astro$8 = createAstro();
const $$SignedOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SignedOut;
  const { isStatic, class: className } = Astro2.props;
  const SignedOutComponent = isStaticOutput(isStatic) ? $$SignedOutCSR : $$SignedOutSSR;
  return renderTemplate`${renderComponent($$result, "SignedOutComponent", SignedOutComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/control/SignedOut.astro", void 0);
function addUnstyledAttributeToFirstTag(html, attributeValue) {
  return html.replace(/(<[^>]+)>/, `$1 data-clerk-unstyled-id="${attributeValue}">`);
}
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$7 = createAstro();
const $$SignInButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SignInButton;
  const safeId = generateSafeId();
  if ("as" in Astro2.props) ;
  const {
    as: Tag = "button",
    asChild,
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl,
    mode,
    ...props
  } = Astro2.props;
  const signInOptions = {
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl
  };
  let htmlElement = "";
  if (asChild) {
    htmlElement = await Astro2.slots.render("default");
    htmlElement = addUnstyledAttributeToFirstTag(htmlElement, safeId);
  }
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "<script>(function(){", "\n  const btn = document.querySelector(`[data-clerk-unstyled-id=\"${safeId}\"]`);\n\n  btn.addEventListener('click', () => {\n    const clerk = window.Clerk;\n\n    if (mode === 'modal') {\n      return clerk.openSignIn({ ...signInOptions, appearance: props.appearance });\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>"], ["", "<script>(function(){", "\n  const btn = document.querySelector(\\`[data-clerk-unstyled-id=\"\\${safeId}\"]\\`);\n\n  btn.addEventListener('click', () => {\n    const clerk = window.Clerk;\n\n    if (mode === 'modal') {\n      return clerk.openSignIn({ ...signInOptions, appearance: props.appearance });\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>"])), asChild ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(htmlElement)}` })}` : renderTemplate`${renderComponent($$result, "Tag", Tag, { ...props, "data-clerk-unstyled-id": safeId }, { "default": async ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"], renderTemplate`Sign in`)}` })}`, defineScriptVars({ props, signInOptions, mode, safeId }));
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/unstyled/SignInButton.astro", void 0);
const $$Astro$6 = createAstro();
const $$UserButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$UserButton;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "user-button" })} ${renderSlot($$result, $$slots["default"])}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro", void 0);
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$5 = createAstro();
const $$MenuItemRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenuItemRenderer;
  const { label, href, open, clickIdentifier, parent } = Astro2.props;
  let labelIcon = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  const isDevMode = false;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script>(function(){", "\n  const parentElement = document.currentScript.parentElement;\n\n  // We used a web component in the `<UserButton.MenuItems>` component.\n  const hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\n  if (!hasParentMenuItem) {\n    if (isDevMode) {\n      throw new Error(\n        `Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.`,\n      );\n    }\n    return;\n  }\n\n  // Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const reorderItemsLabels = ['manageAccount', 'signOut'];\n  const isReorderItem = reorderItemsLabels.includes(label);\n\n  let newMenuItem = {\n    label,\n  };\n\n  if (!isReorderItem) {\n    newMenuItem = {\n      ...newMenuItem,\n      mountIcon: el => {\n        el.innerHTML = labelIcon;\n      },\n      unmountIcon: () => {\n        /* What to clean up? */\n      },\n    };\n\n    if (href) {\n      newMenuItem.href = href;\n    } else if (open) {\n      newMenuItem.open = open.startsWith('/') ? open : `/${open}`;\n    } else if (clickIdentifier) {\n      const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n      newMenuItem.onClick = () => {\n        document.dispatchEvent(clickEvent);\n      };\n    }\n  }\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    customMenuItems: [...(currentOptions?.customMenuItems ?? []), newMenuItem],\n  });\n})();<\/script>"], ["<script>(function(){", "\n  const parentElement = document.currentScript.parentElement;\n\n  // We used a web component in the \\`<UserButton.MenuItems>\\` component.\n  const hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\n  if (!hasParentMenuItem) {\n    if (isDevMode) {\n      throw new Error(\n        \\`Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.\\`,\n      );\n    }\n    return;\n  }\n\n  // Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const reorderItemsLabels = ['manageAccount', 'signOut'];\n  const isReorderItem = reorderItemsLabels.includes(label);\n\n  let newMenuItem = {\n    label,\n  };\n\n  if (!isReorderItem) {\n    newMenuItem = {\n      ...newMenuItem,\n      mountIcon: el => {\n        el.innerHTML = labelIcon;\n      },\n      unmountIcon: () => {\n        /* What to clean up? */\n      },\n    };\n\n    if (href) {\n      newMenuItem.href = href;\n    } else if (open) {\n      newMenuItem.open = open.startsWith('/') ? open : \\`/\\${open}\\`;\n    } else if (clickIdentifier) {\n      const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n      newMenuItem.onClick = () => {\n        document.dispatchEvent(clickEvent);\n      };\n    }\n  }\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    customMenuItems: [...(currentOptions?.customMenuItems ?? []), newMenuItem],\n  });\n})();<\/script>"])), defineScriptVars({ label, href, open, clickIdentifier, labelIcon, isDevMode, parent }));
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro", void 0);
const $$Astro$4 = createAstro();
const $$UserButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UserButtonLink;
  const { label, href, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "href": href, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro", void 0);
const $$Astro$3 = createAstro();
const $$UserButtonAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$UserButtonAction;
  const { label, open, clickIdentifier, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "open": open, "clickIdentifier": clickIdentifier, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro", void 0);
const $$UserButtonMenuItems = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "clerk-user-button-menu-items", "clerk-user-button-menu-items", {}, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$UserButtonUserProfilePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UserButtonUserProfilePage;
  const { url, label, parent } = Astro2.props;
  let labelIcon = "";
  let content = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  if (Astro2.slots.has("default")) {
    content = await Astro2.slots.render("default");
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\n  // Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const newCustomPage = {\n    label,\n    url,\n    mountIcon: el => {\n      el.innerHTML = labelIcon;\n    },\n    unmountIcon: () => {\n      /* What to clean up? */\n    },\n    mount: el => {\n      el.innerHTML = content;\n    },\n    unmount: () => {\n      /* What to clean up? */\n    },\n  };\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    userProfileProps: {\n      customPages: [...(currentOptions?.userProfileProps?.customPages ?? []), newCustomPage],\n    },\n  });\n})();<\/script>"], ["<script>(function(){", "\n  // Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const newCustomPage = {\n    label,\n    url,\n    mountIcon: el => {\n      el.innerHTML = labelIcon;\n    },\n    unmountIcon: () => {\n      /* What to clean up? */\n    },\n    mount: el => {\n      el.innerHTML = content;\n    },\n    unmount: () => {\n      /* What to clean up? */\n    },\n  };\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    userProfileProps: {\n      customPages: [...(currentOptions?.userProfileProps?.customPages ?? []), newCustomPage],\n    },\n  });\n})();<\/script>"])), defineScriptVars({ url, label, content, labelIcon, parent }));
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/node_modules/.pnpm/@clerk+astro@2.16.7_astro@5.16.5_@types+node@25.0.0_@vercel+functions@2.2.13_jiti@2.6.1_f87fcd2373d9d09b8d20f34c13878ade/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro", void 0);
const UserButton = Object.assign($$UserButton, {
  MenuItems: $$UserButtonMenuItems,
  Link: $$UserButtonLink,
  Action: $$UserButtonAction,
  UserProfilePage: $$UserButtonUserProfilePage
});
const $$Astro$1 = createAstro();
const $$AdminHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdminHeader;
  const user = await Astro2.locals.currentUser();
  const userName = user?.fullName || user?.firstName || user?.username || "Usuario";
  return renderTemplate`${maybeRenderHead()}<header> <div class="flex justify-between bg-primary container mx-auto pt-4"> <div> <h3 class="font-bold text-xl text-(--color-secondary) relative z-50">
Bienvenido ${userName} </h3> </div> <div> ${renderComponent($$result, "UserButton", UserButton, {})} </div> </div> </header>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/layout/AdminHeader.astro", void 0);
const $$AdminFooter = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="glass border-t border-white/10 mt-10"> <div class="container mx-auto max-w-12xl px-4 sm:px-8 md:px-12 py-6"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <div class="text-sm text-gray-400"> <p>
&copy; ${currentYear} Alessandro Diaz Gonzalez. Todos los derechos
                    reservados.
</p> </div> <div class="flex flex-wrap items-center gap-4 text-sm"> <a href="/admin/help" class="text-gray-400 hover:text-secondary-light transition-colors">
Ayuda
</a> <span class="text-white/20">|</span> <a href="/admin/docs" class="text-gray-400 hover:text-secondary-light transition-colors">
Documentación
</a> </div> <!-- Version --> <div class="text-sm text-gray-500"> <p>Versión 1.0.0</p> </div> </div> </div> </footer>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/layout/AdminFooter.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-2kanml4j> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"><\/script>', "</head> <body data-astro-cid-2kanml4j> <nav data-astro-cid-2kanml4j> ", " ", " </nav> </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "SignedOut", $$SignedOut, { "data-astro-cid-2kanml4j": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignInButton", $$SignInButton, { "mode": "modal", "data-astro-cid-2kanml4j": true })} ` }), renderComponent($$result, "SignedIn", $$SignedIn, { "data-astro-cid-2kanml4j": true }, { "default": ($$result2) => renderTemplate` <div class="min-h-screen w-full relative bg-black" data-astro-cid-2kanml4j>  <div class="absolute inset-0 z-0"${addAttribute({
    background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `
  }, "style")} data-astro-cid-2kanml4j></div>  ${renderComponent($$result2, "AdminHeader", $$AdminHeader, { "data-astro-cid-2kanml4j": true })} ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "AdminFooter", $$AdminFooter, { "data-astro-cid-2kanml4j": true })} </div> ` }));
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/layouts/AdminLayout.astro", void 0);
const CATEGORIES = [
  "ARTICULOS",
  "TUTORIALES",
  "EXPERIENCIA_LABORAL",
  "ANECDOTAS",
  "PROYECTOS",
  "DEV_ENJOY",
  "OPINION",
  "RECURSOS",
  "CARRERA_DEV",
  "IA_DESARROLLO"
];
const CATEGORY_LABELS = {
  "ARTICULOS": "Artículos",
  "TUTORIALES": "Tutoriales",
  "EXPERIENCIA_LABORAL": "Experiencia Laboral",
  "ANECDOTAS": "Anécdotas",
  "PROYECTOS": "Proyectos",
  "DEV_ENJOY": "Dev & Enjoy",
  "OPINION": "Opinión",
  "RECURSOS": "Recursos",
  "CARRERA_DEV": "Carrera Dev",
  "IA_DESARROLLO": "IA y Desarrollo"
};
const getCategoryLabel = (value) => {
  if (!value) return "Sin categoría";
  return CATEGORY_LABELS[value] || value;
};
function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const staticCategories = CATEGORIES.map((cat) => ({
      value: cat,
      label: CATEGORY_LABELS[cat]
    }));
    setCategories(staticCategories);
    setLoading(false);
  }, []);
  return { categories, loading };
}
export {
  $$AdminLayout as $,
  getCategoryLabel as g,
  useCategories as u
};
