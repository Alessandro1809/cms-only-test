import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate, u as unescapeHTML } from "../../chunks/astro/server_B9nb4zjO.mjs";
import { A as AuthorBadge, B as BlogCard, f as fetchPostBySlug, a as fetchRelatedPosts, b as fetchNextPost, $ as $$Layout } from "../../chunks/BlogCard_HNdrRCgQ.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
import React, { useMemo } from "react";
import { g as getCategoryLabel } from "../../chunks/categoryLabels_C9bKjRa1.mjs";
import { $ as $$Button } from "../../chunks/Button_Cb6mcSK6.mjs";
import { SendIcon } from "lucide-react";
import "clsx";
import { renderers } from "../../renderers.mjs";
const BlogHeader = React.memo(({ post }) => {
  const formattedDate = useMemo(() => {
    const date = new Date(post.createdAt);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
  }, [post.createdAt]);
  const readingTime = useMemo(() => {
    if (!post.content) return 1;
    const extractText = (content) => {
      if (typeof content === "string") return content;
      if (!content) return "";
      let text = "";
      if (content.content && Array.isArray(content.content)) {
        content.content.forEach((item) => {
          if (item.text) {
            text += item.text + " ";
          }
          if (item.content) {
            text += extractText(item) + " ";
          }
        });
      }
      return text;
    };
    const fullText = extractText(post.content);
    const wordCount = fullText.split(/\s+/).filter((word) => word.length > 0).length;
    const minutes = Math.ceil(wordCount / 200);
    return minutes || 1;
  }, [post.content]);
  const categoryLabel = useMemo(
    () => post.categorie ? getCategoryLabel(post.categorie) : null,
    [post.categorie]
  );
  return /* @__PURE__ */ jsx("header", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-6", children: [
    /* @__PURE__ */ jsxs("article", { children: [
      categoryLabel && /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 bg-secondary-light text-white text-sm font-semibold rounded-full", children: categoryLabel }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-secondary mb-4 leading-tight", children: post.title }),
      post.excerpt && /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-6 leading-relaxed", children: post.excerpt }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-sm pb-6 border-b border-gray-200", children: [
        /* @__PURE__ */ jsx(AuthorBadge, { author: post.author, size: "sm" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "•" }),
        /* @__PURE__ */ jsx("time", { className: "text-gray-500", dateTime: post.createdAt, children: formattedDate }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "•" }),
        /* @__PURE__ */ jsxs("span", { className: "text-gray-500", children: [
          readingTime,
          " min de lectura"
        ] })
      ] }),
      post.tags && post.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-4 pointer-events-none", children: post.tags.map((tag, index) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "px-3 py-1 bg-secondary-light/50 text-secondary text-sm rounded-full transition",
          children: [
            "#",
            tag
          ]
        },
        index
      )) })
    ] }),
    post.featuredImage && /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: post.featuredImage,
        alt: post.title,
        className: "w-full h-auto object-cover",
        loading: "eager"
      }
    ) })
  ] }) });
});
BlogHeader.displayName = "BlogHeader";
const getYoutubeEmbedUrl = (url) => {
  if (!url) return "";
  if (url.includes("/embed/")) {
    return url;
  }
  let videoId = "";
  const watchRegex = /[?&]v=([^&]+)/;
  const watchMatch = url.match(watchRegex);
  if (watchMatch) {
    videoId = watchMatch[1];
  }
  const shortRegex = /youtu\.be\/([^?&]+)/;
  const shortMatch = url.match(shortRegex);
  if (shortMatch) {
    videoId = shortMatch[1];
  }
  if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  }
  return url;
};
const BlogContent = React.memo(({ content }) => {
  if (!content || !content.blocks || content.blocks.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "No hay contenido disponible" }) });
  }
  return /* @__PURE__ */ jsx("article", { className: "prose prose-lg max-w-none", children: content.blocks.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return /* @__PURE__ */ jsx("p", { className: "mb-4 text-gray-700 leading-relaxed", children: block.content }, index);
      case "heading":
        const level = block.level || 1;
        const headingClasses = {
          1: "text-4xl font-bold text-secondary mb-6 mt-8",
          2: "text-3xl font-bold text-secondary mb-4 mt-6",
          3: "text-2xl font-semibold text-secondary mb-3 mt-5"
        }[level] || "text-xl font-semibold text-secondary mb-2 mt-4";
        const Tag = `h${level}`;
        return React.createElement(
          Tag,
          { key: index, className: headingClasses },
          block.content
        );
      case "code":
        return /* @__PURE__ */ jsx("pre", { className: "bg-secondary text-primary rounded-lg p-4 overflow-x-auto my-6 border border-gray-300", children: /* @__PURE__ */ jsx("code", { className: `language-${block.language || "javascript"} text-sm`, children: block.content }) }, index);
      case "bulletList":
        return /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside mb-6 space-y-2 ml-4", children: block.items?.map((item, i) => /* @__PURE__ */ jsx("li", { className: "text-gray-700 leading-relaxed", children: item }, i)) }, index);
      case "orderedList":
        return /* @__PURE__ */ jsx("ol", { className: "list-decimal list-inside mb-6 space-y-2 ml-4", children: block.items?.map((item, i) => /* @__PURE__ */ jsx("li", { className: "text-gray-700 leading-relaxed", children: item }, i)) }, index);
      case "blockquote":
        return /* @__PURE__ */ jsx(
          "blockquote",
          {
            className: "border-l-4 border-secondary-light pl-6 py-3 my-6 italic text-gray-600 bg-gray-50 rounded-r-lg",
            children: block.content
          },
          index
        );
      case "image":
        return /* @__PURE__ */ jsxs("figure", { className: "my-8", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: block.src,
              alt: block.alt || "",
              title: block.title,
              className: "rounded-lg w-full h-auto shadow-md",
              loading: "lazy"
            }
          ),
          block.alt && /* @__PURE__ */ jsx("figcaption", { className: "text-center text-sm text-gray-500 mt-3", children: block.alt })
        ] }, index);
      case "divider":
        return /* @__PURE__ */ jsx("hr", { className: "my-8 border-gray-300" }, index);
      case "youtube":
        return /* @__PURE__ */ jsx("div", { className: "my-8", children: /* @__PURE__ */ jsx("div", { className: "relative w-full aspect-video rounded-lg overflow-hidden shadow-md", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            src: getYoutubeEmbedUrl(block.src || ""),
            className: "absolute top-0 left-0 w-full h-full",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
          }
        ) }) }, index);
      default:
        return null;
    }
  }) });
});
BlogContent.displayName = "BlogContent";
const BlogSidebar = ({ relatedPosts, currentPost }) => {
  return /* @__PURE__ */ jsxs("aside", { className: "space-y-8 mt-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "glass rounded-lg border border-white/5 p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[var(--color-secondary)] mb-4", children: "Compartir" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-[#004182] transition-colors",
            "aria-label": "Compartir en LinkedIn",
            children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(currentPost.title)}${currentPost.excerpt ? `&via=${encodeURIComponent(currentPost.excerpt.substring(0, 100))}` : ""}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-center w-12 h-12 rounded-full bg-black hover:bg-gray-800 transition-colors",
            "aria-label": "Compartir en X",
            children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&quote=${encodeURIComponent(currentPost.title + (currentPost.excerpt ? " - " + currentPost.excerpt : ""))}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-center w-12 h-12 rounded-full bg-black transition-colors",
            "aria-label": "Compartir en Facebook",
            children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-white", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
          }
        )
      ] })
    ] }),
    relatedPosts && relatedPosts.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "md:text-2xl text-xl font-bold text-[var(--color-secondary)] mb-8", children: "Posts relacionados" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6", children: relatedPosts.map((post) => /* @__PURE__ */ jsx(BlogCard, { post }, post.id)) })
    ] })
  ] });
};
const subscribeImage = new Proxy({ "src": "/_astro/subscribeImage.vY1ZlkZP.png", "width": 454, "height": 400, "format": "png" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/assets/subscribeImage.png";
    }
    return target[name];
  }
});
const $$Astro$1 = createAstro();
const $$SubmitButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SubmitButton;
  const {
    width = "auto",
    type = "submit",
    text,
    variant = "primary",
    className = "",
    ariaLabel = "Button",
    justify = "center",
    icon = false
  } = Astro2.props;
  const baseStyles = `px-5 py-1 font-medium  transition-all duration-300 group flex justify-${justify} items-center gap-2 w-auto md:w-${width} hover:cursor-pointer`;
  const variants = {
    primary: "font-semibold md:text-sm text-sm lg:text-md sm:text-md bg-button-dark hover:bg-button-primary rounded-full py-3 text-primary",
    primaryHeading: "font-semibold md:text-sm lg:text-md sm:text-md text-sm bg-button-primary hover:bg-button-secondary rounded-md py-3 text-primary",
    secondary: "font-semibold md:text-sm text-sm lg:text-md sm:text-md hover:bg-button-secondary hover:shadow-[0_0_6px_0] hover:shadow-secondary-light rounded-md py-3 text-primary bg-button-primary",
    tertiary: "text-primary hover:border-secondary-light py-3 font-semibold hover:bg-secondary rounded-md"
  };
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(ariaLabel, "aria-label")}${addAttribute(type, "type")}${addAttribute([baseStyles, variants[variant], className], "class:list")}>${icon && renderTemplate`${renderComponent($$result, "SendIcon", SendIcon, {})}`} ${text} </button>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/buttons/SubmitButton.astro", void 0);
const $$Subscribe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto max-w-7xl mt-20 mb-20 px-4"> <h2 class="text-3xl md:text-4xl font-bold text-gray-secondary text-center mb-8">
Suscríbete a mi blog para estar al tanto de las últimas novedades
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white items-center rounded-xl overflow-hidden"> <div class="col-span-2"> <form class="mx-4 md:mx-6 my-8 md:my-12"> <div class="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 bg-gray-100 rounded-md md:rounded-full px-4 sm:px-6 py-3 sm:py-4 shadow-sm"> <input type="email" placeholder="correo@dominio.com" class="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 text-base sm:text-lg sm:pr-4" required> ${renderComponent($$result, "SubmitButton", $$SubmitButton, { "text": "Suscribirme", "variant": "primary" })} </div> <p class="text-gray-500 mt-4 text-sm sm:text-base">Varias veces al mes. Sin spam. Puedes darte de baja en cualquier momento.</p> </form> </div> <div class="col-span-1 relative md:rounded-r-xl overflow-hidden min-h-[300px] md:min-h-0"> <img${addAttribute(subscribeImage.src, "src")} alt="" class="w-full h-full object-cover"> <div class="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 md:gap-8"> <div class="bg-black/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-secondary-light p-3 sm:p-4 max-w-lg w-full shadow-[0_0_10px_0] shadow-secondary-light"> <blockquote class="text-white text-xs sm:text-sm md:text-lg italic text-center mb-2 sm:mb-4">
"No hay ley escrita, por pura y clara que sea, que el ingenio y la malicia no oscurezcan."
</blockquote> <p class="text-white text-[10px] sm:text-xs md:text-sm text-center font-medium">— John Dryden</p> </div> ${renderComponent($$result, "Button", $$Button, { "href": "/blog", "text": "Ver más publicaciones", "variant": "primaryShine" })} </div> </div> </div> </section>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/blogComponents/Subscribe.astro", void 0);
const $$NextIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="32" height="32" viewBox="0 0 32 32" fill="none"> <path d="M15.9997 2.66665C8.63568 2.66665 2.66634 8.63598 2.66634 16C2.66634 23.364 8.63568 29.3333 15.9997 29.3333C23.3637 29.3333 29.333 23.364 29.333 16C29.333 8.63598 23.3637 2.66665 15.9997 2.66665Z" stroke="#0B8A36" stroke-width="2" stroke-linejoin="round"></path> <path d="M14 10L20 16L14 22" stroke="#232925" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/ui/icons/nextIcon.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/blog");
  }
  const post = await fetchPostBySlug(slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const relatedPosts = await fetchRelatedPosts(post.id, post.categorie, 3);
  const nextPost = await fetchNextPost(post.id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>', ' - Randall Solano Fallas</title> <meta name="description"', '> <meta property="og:type" content="article"> <meta property="og:title"', '> <meta property="og:description"', "> ", '<meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"', '> <meta name="twitter:description"', "> ", "", '<nav class="container mx-auto max-w-7xl px-4 pt-32"> <ol class="flex items-center gap-2 text-sm text-gray-600 font-semibold"> <li> <a href="/" class="hover:text-secondary-light transition text-secondary">Inicio</a> </li> <li>/</li> <li> <a href="/blog" class="hover:text-secondary-light transition text-secondary">Blog</a> </li> <li>/</li> <li class="text-secondary-light truncate max-w-xs">', '</li> </ol> </nav> <div class="container mx-auto max-w-7xl px-4 py-6 flex items-center"> <button onclick="history.back()" class="flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors group rotate-180" aria-label="Volver atrás"> ', " </button> ", ' </div> <main class="container mx-auto max-w-7xl px-4 pb-20 pt-4"> <div class=""> <article class="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-8"> ', " ", ' </article> </div> <aside class="lg:col-span-1"> ', " </aside> ", ' <div class="mt-12 text-center w-fit mx-auto"> ', ' </div> </main> <script type="application/ld+json">', "<\/script> "])), post.title, addAttribute(post.excerpt, "content"), addAttribute(post.title, "content"), addAttribute(post.excerpt, "content"), post.featuredImage && renderTemplate`<meta property="og:image"${addAttribute(post.featuredImage, "content")}>`, addAttribute(post.title, "content"), addAttribute(post.excerpt, "content"), post.featuredImage && renderTemplate`<meta name="twitter:image"${addAttribute(post.featuredImage, "content")}>`, maybeRenderHead(), post.title, renderComponent($$result2, "NextIcon", $$NextIcon, {}), nextPost ? renderTemplate`<a${addAttribute(`/blog/${nextPost.slug}`, "href")} class="flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors group" aria-label="Siguiente post"> ${renderComponent($$result2, "NextIcon", $$NextIcon, {})} </a>` : renderTemplate`<div class="w-24"></div>`, renderComponent($$result2, "BlogHeader", BlogHeader, { "post": post, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/web/blog/BlogHeader", "client:component-export": "BlogHeader" }), renderComponent($$result2, "BlogContent", BlogContent, { "content": post.content, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/web/blog/BlogContent", "client:component-export": "BlogContent" }), renderComponent($$result2, "BlogSidebar", BlogSidebar, { "currentPost": post, "relatedPosts": relatedPosts, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/web/blog/BlogSidebar", "client:component-export": "BlogSidebar" }), renderComponent($$result2, "Subscribe", $$Subscribe, {}), renderComponent($$result2, "Button", $$Button, { "href": "/blog", "variant": "primary", "text": "← Volver al blog" }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Randall Solano Fallas"
    },
    keywords: post.tags.join(", ")
  }))) })}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/blog/[slug].astro", void 0);
const $$file = "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
