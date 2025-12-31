import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, k as renderComponent } from "./astro/server_B9nb4zjO.mjs";
import "clsx";
const $$AddIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" viewBox="0 0 24 24" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11H13V7Z" fill="currentColor"></path> </svg>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/icons/AddIcon.astro", void 0);
const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    target = "_self",
    width = "auto",
    href = "contact",
    text,
    icon = false,
    variant = "primary",
    className = "",
    ariaLabel = "Button",
    justify = "center"
  } = Astro2.props;
  const baseStyles = `px-5 py-1 font-medium  transition-all duration-300 group flex justify-${justify} items-center gap-2 w-auto md:w-${width} hover:cursor-pointer`;
  const variants = {
    primary: "font-semibold md:text-sm text-sm lg:text-md sm:text-md bg-button-accent hover:bg-button-primary rounded-md py-3 text-primary hover:shadow-[0_0_6px_0] hover:shadow-secondary-light transition-all duration-400",
    primaryShine: "font-semibold md:text-sm text-sm lg:text-md sm:text-md bg-button-primary hover:shadow-[0_0_10px_0] hover:shadow-secondary-light rounded-md py-3 text-primary transition-all duration-400",
    primaryHeading: "font-semibold md:text-sm lg:text-md sm:text-md text-sm bg-button-primary hover:bg-button-secondary rounded-md py-3 text-primary",
    secondary: "font-semibold md:text-sm text-sm lg:text-md sm:text-md hover:bg-button-primary rounded-md py-3 text-primary hover:shadow-[0_0_6px_0] hover:shadow-secondary-light transition-all duration-400 text-shadow-lg",
    primaryrounded: "font-semibold md:text-sm text-sm lg:text-md sm:text-md bg-button-primary/60 hover:bg-button-secondary rounded-full py-3 text-primary hover:text-secondary hover:shadow-[0_0_6px_0] hover:shadow-secondary-light transition-all duration-400",
    tertiary: "text-primary hover:border-secondary-light py-3 font-semibold hover:bg-secondary rounded-md",
    white: "font-semibold md:text-sm text-sm lg:text-md sm:text-md bg-button-white hover:shadow-[0_0_10px_0] hover:shadow-white transition-all duration-400 rounded-md py-3 text-primary-blue",
    "white-secondary": "font-semibold md:text-sm text-sm lg:text-md sm:text-md hover:bg-button-white rounded-md py-3 text-primary hover:text-primary-blue transition-all duration-400"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(target, "target")}${addAttribute([baseStyles, variants[variant], className], "class:list")}> ${icon && renderTemplate`${renderComponent($$result, "AddIcon", $$AddIcon, {})}`} ${text} </a>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/buttons/Button.astro", void 0);
export {
  $$Button as $
};
