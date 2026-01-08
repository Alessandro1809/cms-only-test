import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../../chunks/astro/server_B9nb4zjO.mjs";
import { u as useCategories, $ as $$AdminLayout } from "../../chunks/useCategories_nZSCdxfO.mjs";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, useState, useMemo, useCallback, useContext, useEffect, useRef } from "react";
import { X, Upload, Bold, Italic, Underline as Underline$1, AlignLeft, AlignCenter, AlignRight, AlignJustify, ChevronDown, List, ListOrdered, ListTree, Minus, LinkIcon, ImageIcon, VideoIcon, Save, Eye, Trash2 } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import Youtube from "@tiptap/extension-youtube";
import { Mark } from "@tiptap/core";
import { renderers } from "../../renderers.mjs";
const initialPostData = {
  title: "",
  slug: "",
  excerpt: "",
  category: "",
  tags: [],
  content: null
};
const PostContext = createContext(void 0);
const PostProvider = ({ children }) => {
  const [postData, setPostDataState] = useState(initialPostData);
  const isEditMode = useMemo(() => !!postData.id, [postData.id]);
  const updatePostData = useCallback((data) => {
    setPostDataState((prev) => ({ ...prev, ...data }));
  }, []);
  const setPostData = useCallback((data) => {
    setPostDataState(data);
  }, []);
  const resetPostData = useCallback(() => {
    setPostDataState(initialPostData);
  }, []);
  const value = useMemo(
    () => ({ postData, isEditMode, updatePostData, setPostData, resetPostData }),
    [postData, isEditMode, updatePostData, setPostData, resetPostData]
  );
  return /* @__PURE__ */ jsx(PostContext.Provider, { value, children });
};
const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};
const CLOUDINARY_CONFIG = {
  cloudName: "drwd1wtvt",
  uploadPreset: "Blog_uploads"
};
function useCloudinaryUpload({
  onSuccess,
  onError,
  folder = "blog",
  multiple = false,
  maxFiles = 1,
  clientAllowedFormats = ["image"]
}) {
  useEffect(() => {
    if (!window.cloudinary) {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  const openUploadWidget = useCallback(() => {
    if (!window.cloudinary) {
      alert("Cloudinary widget no está cargado. Por favor recarga la página.");
      return;
    }
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUDINARY_CONFIG.cloudName,
        uploadPreset: CLOUDINARY_CONFIG.uploadPreset,
        folder,
        multiple,
        maxFiles,
        clientAllowedFormats,
        sources: ["local", "url", "camera"],
        showAdvancedOptions: false,
        cropping: false,
        styles: {
          palette: {
            window: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#16a34a",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#16a34a",
            action: "#16a34a",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#16a34a",
            complete: "#20B832",
            sourceBg: "#E4EBF1"
          }
        }
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          onError?.(error);
          return;
        }
        if (result.event === "success") {
          onSuccess(result.info);
        }
      }
    );
    widget.open();
  }, [onSuccess, onError, folder, multiple, maxFiles, clientAllowedFormats]);
  return { openUploadWidget };
}
const FeaturedImageUpload = () => {
  const { postData, updatePostData } = usePost();
  const { openUploadWidget } = useCloudinaryUpload({
    onSuccess: (result) => {
      updatePostData({ featuredImage: result.secure_url });
    },
    onError: (error) => {
      alert("Error al subir la imagen. Por favor intenta de nuevo.");
    },
    folder: "blog/featured",
    multiple: false,
    maxFiles: 1,
    clientAllowedFormats: ["image"]
  });
  const handleRemoveImage = () => {
    updatePostData({ featuredImage: void 0 });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block text-sm font-semibold text-gray-400 mb-2", children: "Imagen Destacada" }),
    postData.featuredImage ? /* @__PURE__ */ jsxs("div", { className: "relative group overflow-hidden rounded-lg", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: postData.featuredImage,
          alt: "Imagen destacada",
          className: "w-full h-48 object-cover border-2 border-white/10 rounded-lg"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200 pointer-events-none" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: handleRemoveImage,
          className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-200 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 z-10",
          children: /* @__PURE__ */ jsx(X, { size: 20 })
        }
      )
    ] }) : /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: openUploadWidget,
        className: "w-full border-2 border-dashed border-white/10 rounded-lg p-8 text-center glass hover:bg-white/5 hover:border-secondary-light transition-all duration-200 group cursor-pointer",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-white/10 rounded-full group-hover:bg-secondary-light/20 transition-colors", children: /* @__PURE__ */ jsx(Upload, { className: "w-8 h-8 text-gray-400 group-hover:text-secondary-light transition-colors" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-400 group-hover:text-secondary-light transition-colors", children: "Click para subir imagen" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "PNG, JPG, WebP hasta 10MB" })
          ] })
        ] })
      }
    )
  ] });
};
const ContentData = () => {
  const { postData, updatePostData } = usePost();
  const [currentTag, setCurrentTag] = useState("");
  const { categories, loading: loadingCategories } = useCategories();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldMap = {
      "shortDescription": "excerpt"
    };
    const fieldName = fieldMap[name] || name;
    updatePostData({ [fieldName]: value });
  };
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    updatePostData({ [name]: value });
  };
  const handleAddTag = () => {
    if (currentTag.trim() && !postData.tags.includes(currentTag.trim())) {
      updatePostData({ tags: [...postData.tags, currentTag.trim()] });
      setCurrentTag("");
    }
  };
  const handleRemoveTag = (tagToRemove) => {
    updatePostData({ tags: postData.tags.filter((tag) => tag !== tagToRemove) });
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "title", className: "block text-sm font-semibold text-gray-400 mb-2", children: "Título" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "title",
            name: "title",
            value: postData.title,
            onChange: handleInputChange,
            placeholder: "¿Qué es el derecho administrativo?",
            className: "w-full px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition text-gray-100 placeholder-gray-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "slug", className: "block text-sm font-semibold text-gray-400 mb-2", children: "Slug" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "slug",
            name: "slug",
            value: postData.slug,
            onChange: handleInputChange,
            placeholder: "que-es-el-derecho-administrativo",
            className: "w-full px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition text-gray-100 placeholder-gray-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "shortDescription", className: "block text-sm font-semibold text-gray-400 mb-2", children: "Descripción corta" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "shortDescription",
            name: "shortDescription",
            value: postData.excerpt,
            onChange: handleInputChange,
            placeholder: "El derecho administrativo regula la Administración Pública y su relación con los ciudadanos",
            rows: 3,
            maxLength: 160,
            className: "w-full px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition resize-none text-gray-100 placeholder-gray-500"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-right text-sm text-gray-500 mt-1", children: [
          postData.excerpt.length,
          " / 160"
        ] })
      ] }),
      /* @__PURE__ */ jsx(FeaturedImageUpload, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "category", className: "block text-sm font-semibold text-gray-400 mb-2", children: "Categoría" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "category",
              name: "category",
              value: postData.category,
              onChange: handleSelectChange,
              disabled: loadingCategories,
              className: `w-full px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition appearance-none cursor-pointer ${postData.category ? "text-secondary-light font-medium" : "text-gray-500"}`,
              children: [
                /* @__PURE__ */ jsx("option", { value: "", className: "bg-[var(--color-primary)]", children: "Selecciona una categoría" }),
                categories.map((cat) => /* @__PURE__ */ jsx("option", { value: cat.value, className: "bg-[var(--color-primary)]", children: cat.label }, cat.value))
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "tags", className: "block text-sm font-semibold text-gray-400 mb-2", children: "Etiquetas" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "tags",
              value: currentTag,
              onChange: (e) => setCurrentTag(e.target.value),
              onKeyPress: (e) => e.key === "Enter" && (e.preventDefault(), handleAddTag()),
              placeholder: "Derecho administrativo",
              className: "flex-1 px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition text-gray-100 placeholder-gray-500"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: handleAddTag,
              className: "px-6 py-2 bg-secondary-light text-primary font-medium rounded-lg hover:brightness-110 transition cursor-pointer",
              children: "AGREGAR"
            }
          )
        ] }),
        postData.tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: postData.tags.map((tag, index) => /* @__PURE__ */ jsxs(
          "span",
          {
            className: "inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-gray-200 rounded-md text-sm border border-white/5",
            children: [
              tag,
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleRemoveTag(tag),
                  className: "text-gray-400 hover:text-white cursor-pointer",
                  children: "×"
                }
              )
            ]
          },
          index
        )) })
      ] })
    ] })
  ] });
};
const FontSize = Mark.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: (element) => element.style.fontSize,
        renderHTML: (attributes) => {
          if (!attributes.fontSize) {
            return {};
          }
          return {
            style: `font-size: ${attributes.fontSize}; font-weight: bold;`
          };
        }
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: 'span[style*="font-size"]'
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["span", HTMLAttributes, 0];
  }
});
const FONT_SIZES = {
  "1": "2.5rem",
  "2": "2rem",
  "3": "1.5rem"
};
const EDITOR_CLASSES = "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-3 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4 [&_li]:my-1 [&_pre]:bg-gray-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:my-4 [&_pre]:overflow-x-auto [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-lg [&_iframe]:my-4";
const BUTTON_BASE_CLASS = "p-2 cursor-pointer rounded hover:bg-gray-200/40 transition-colors duration-150 mx-1";
const BUTTON_ACTIVE_CLASS = " bg-[var(--color-secondary)]/40 shadow-sm ring-1 ring-green-500/40 rounded-full";
const BUTTON_GROUP_CLASS = "bg-neutral-300/5 backdrop-blur-xl rounded-full px-4 py-1";
const useEditorConfig = () => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        codeBlock: {
          HTMLAttributes: {
            class: "code-block"
          }
        },
        // Deshabilitar extensiones que se configurarán por separado
        link: false
      }),
      Underline,
      TextStyle,
      FontSize,
      Placeholder.configure({
        placeholder: "Escribe tu contenido aquí..."
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
        defaultAlignment: "left"
      }),
      Link.configure({
        openOnClick: false
      }),
      Image,
      Youtube.configure({
        width: 640,
        height: 360,
        HTMLAttributes: {
          class: "youtube-video"
        },
        inline: false,
        nocookie: true
      })
    ],
    editorProps: {
      attributes: {
        class: EDITOR_CLASSES
      }
    },
    parseOptions: {
      preserveWhitespace: "full"
    }
  });
  return editor;
};
const TextFormattingGroup = ({ editor }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-neutral-300/5 backdrop-blur-xl rounded-full px-2 py-1", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().toggleBold().run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive("bold") ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(Bold, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().toggleItalic().run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive("italic") ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(Italic, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().toggleUnderline().run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive("underline") ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(Underline$1, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    )
  ] });
};
const TextAlignmentGroup = ({ editor }) => {
  return /* @__PURE__ */ jsxs("div", { className: BUTTON_GROUP_CLASS, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().setTextAlign("left").run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive({ textAlign: "left" }) ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(AlignLeft, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().setTextAlign("center").run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive({ textAlign: "center" }) ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(AlignCenter, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().setTextAlign("right").run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive({ textAlign: "right" }) ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(AlignRight, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().setTextAlign("justify").run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive({ textAlign: "justify" }) ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(AlignJustify, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    )
  ] });
};
const FontSizeSelector = ({ editor }) => {
  const handleChange = (e) => {
    const size = e.target.value;
    if (size === "normal") {
      editor.chain().focus().unsetMark("fontSize").run();
    } else {
      editor.chain().focus().setMark("fontSize", { fontSize: FONT_SIZES[size] }).run();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "select",
      {
        onChange: handleChange,
        className: "appearance-none p-2 rounded-full pl-4 pr-10 border border-green-500/40 hover:bg-gray-200/20 text-sm bg-[var(--color-secondary)]/5 backdrop-blur-xl cursor-pointer text-[var(--color-secondary)]",
        style: {
          backgroundImage: "none"
        },
        children: [
          /* @__PURE__ */ jsx("option", { value: "normal", style: { fontSize: "14px" }, children: "Texto normal" }),
          /* @__PURE__ */ jsx("option", { value: "1", style: { fontSize: "24px", fontWeight: "bold" }, children: "Título 1" }),
          /* @__PURE__ */ jsx("option", { value: "2", style: { fontSize: "18px", fontWeight: "bold" }, children: "Título 2" }),
          /* @__PURE__ */ jsx("option", { value: "3", style: { fontSize: "14px", fontWeight: "bold" }, children: "Título 3" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      ChevronDown,
      {
        size: 16,
        className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
      }
    )
  ] });
};
const ListsGroup = ({ editor }) => {
  return /* @__PURE__ */ jsxs("div", { className: BUTTON_GROUP_CLASS, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().toggleBulletList().run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive("bulletList") ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(List, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().toggleOrderedList().run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive("orderedList") ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(ListOrdered, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().toggleCodeBlock().run(),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive("codeBlock") ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(ListTree, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    )
  ] });
};
const addLink = (editor) => {
  const url = window.prompt("URL");
  if (url) {
    editor.chain().focus().setLink({ href: url }).run();
  }
};
const addImage = (editor) => {
  if (!window.cloudinary) {
    const url = window.prompt("URL de la imagen");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
    return;
  }
  const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: CLOUDINARY_CONFIG.cloudName,
      uploadPreset: CLOUDINARY_CONFIG.uploadPreset,
      folder: "blog/content",
      multiple: false,
      maxFiles: 1,
      clientAllowedFormats: ["image"],
      sources: ["local", "url", "camera"],
      showAdvancedOptions: false,
      cropping: false,
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#90A0B3",
          tabIcon: "#16a34a",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#16a34a",
          action: "#16a34a",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#16a34a",
          complete: "#20B832",
          sourceBg: "#E4EBF1"
        }
      }
    },
    (error, result) => {
      if (error) {
        alert("Error al subir la imagen");
        return;
      }
      if (result.event === "success") {
        editor.chain().focus().setImage({ src: result.info.secure_url }).run();
      }
    }
  );
  widget.open();
};
const addVideo = (editor) => {
  const url = window.prompt("URL del video de YouTube");
  if (url) {
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  }
};
const MediaGroup = ({ editor }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => editor.chain().focus().setHorizontalRule().run(),
        className: BUTTON_BASE_CLASS,
        type: "button",
        children: /* @__PURE__ */ jsx(Minus, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "w-px h-6 bg-gray-300/30 mx-1" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => addLink(editor),
        className: `${BUTTON_BASE_CLASS} ${editor.isActive("link") ? BUTTON_ACTIVE_CLASS : ""}`,
        type: "button",
        children: /* @__PURE__ */ jsx(LinkIcon, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => addImage(editor),
        className: BUTTON_BASE_CLASS,
        type: "button",
        children: /* @__PURE__ */ jsx(ImageIcon, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => addVideo(editor),
        className: BUTTON_BASE_CLASS,
        type: "button",
        children: /* @__PURE__ */ jsx(VideoIcon, { className: "text-[var(--color-secondary)]", size: 18 })
      }
    )
  ] });
};
const ToolbarDivider = () => {
  return /* @__PURE__ */ jsx("div", { className: "w-px h-6 bg-gray-600 mx-1" });
};
const EditorToolbar = ({ editor }) => {
  const [, setUpdateTrigger] = useState(0);
  useEffect(() => {
    const updateToolbar = () => {
      setUpdateTrigger((prev) => prev + 1);
    };
    editor.on("selectionUpdate", updateToolbar);
    editor.on("transaction", updateToolbar);
    return () => {
      editor.off("selectionUpdate", updateToolbar);
      editor.off("transaction", updateToolbar);
    };
  }, [editor]);
  return /* @__PURE__ */ jsxs("div", { className: "p-2 flex gap-4 items-center mb-4", children: [
    /* @__PURE__ */ jsx(TextFormattingGroup, { editor }),
    /* @__PURE__ */ jsx("div", { className: "w-px h-6 mx-4 bg-gray-600" }),
    /* @__PURE__ */ jsx(TextAlignmentGroup, { editor }),
    /* @__PURE__ */ jsx(ToolbarDivider, {}),
    /* @__PURE__ */ jsx(FontSizeSelector, { editor }),
    /* @__PURE__ */ jsx(ToolbarDivider, {}),
    /* @__PURE__ */ jsx(ListsGroup, { editor }),
    /* @__PURE__ */ jsx(ToolbarDivider, {}),
    /* @__PURE__ */ jsx(MediaGroup, { editor })
  ] });
};
const RichTextEditor = () => {
  const editor = useEditorConfig();
  const { updatePostData, postData } = usePost();
  const contentLoadedRef = useRef(false);
  useEffect(() => {
    if (!editor || !postData.content || contentLoadedRef.current) return;
    editor.commands.setContent(postData.content);
    contentLoadedRef.current = true;
  }, [editor, postData.content]);
  useEffect(() => {
    if (!postData.id && contentLoadedRef.current) {
      contentLoadedRef.current = false;
    }
  }, [postData.id]);
  useEffect(() => {
    if (!editor) return;
    const updateContent = () => {
      const json = editor.getJSON();
      updatePostData({ content: json });
    };
    editor.on("update", updateContent);
    return () => {
      editor.off("update", updateContent);
    };
  }, [editor, updatePostData]);
  if (!editor) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto rounded-xl", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4 text-[var(--color-secondary)]", children: "Contenido" }),
    /* @__PURE__ */ jsx(EditorToolbar, { editor }),
    /* @__PURE__ */ jsx("div", { className: "glass rounded-xl text-white border border-white/5", children: /* @__PURE__ */ jsx(EditorContent, { editor }) })
  ] });
};
const getYoutubeEmbedUrl$1 = (url) => {
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
const formatTiptapContent = (tiptapJson) => {
  if (!tiptapJson || !tiptapJson.content) {
    return { blocks: [] };
  }
  const blocks = [];
  const processNode = (node) => {
    switch (node.type) {
      case "paragraph":
        const paragraphText = extractText(node);
        if (paragraphText.trim()) {
          blocks.push({
            type: "paragraph",
            content: paragraphText
          });
        }
        break;
      case "heading":
        const headingText = extractText(node);
        blocks.push({
          type: "heading",
          level: node.attrs?.level || 1,
          content: headingText
        });
        break;
      case "codeBlock":
        const codeText = extractText(node);
        blocks.push({
          type: "code",
          language: node.attrs?.language || "javascript",
          content: codeText
        });
        break;
      case "bulletList":
        const bulletItems = extractListItems(node);
        blocks.push({
          type: "bulletList",
          items: bulletItems
        });
        break;
      case "orderedList":
        const orderedItems = extractListItems(node);
        blocks.push({
          type: "orderedList",
          items: orderedItems
        });
        break;
      case "blockquote":
        const quoteText = extractText(node);
        blocks.push({
          type: "blockquote",
          content: quoteText
        });
        break;
      case "image":
        blocks.push({
          type: "image",
          src: node.attrs?.src || "",
          alt: node.attrs?.alt || "",
          title: node.attrs?.title || ""
        });
        break;
      case "horizontalRule":
        blocks.push({
          type: "divider"
        });
        break;
      case "youtube":
        blocks.push({
          type: "youtube",
          src: getYoutubeEmbedUrl$1(node.attrs?.src || ""),
          width: node.attrs?.width,
          height: node.attrs?.height
        });
        break;
      default:
        const text = extractText(node);
        if (text.trim()) {
          blocks.push({
            type: "paragraph",
            content: text
          });
        }
        break;
    }
  };
  tiptapJson.content.forEach((node) => {
    processNode(node);
  });
  return { blocks };
};
const extractText = (node) => {
  if (node.type === "text") {
    return node.text || "";
  }
  if (node.content && Array.isArray(node.content)) {
    return node.content.map((child) => extractText(child)).join("");
  }
  return "";
};
const extractListItems = (listNode) => {
  if (!listNode.content) return [];
  return listNode.content.map((listItem) => {
    if (listItem.type === "listItem" && listItem.content) {
      return listItem.content.map((node) => extractText(node)).join("").trim();
    }
    return "";
  }).filter((item) => item.length > 0);
};
const formatPostForBackend = (postData) => {
  const formatted = {
    title: postData.title,
    slug: postData.slug,
    excerpt: postData.excerpt,
    content: formatTiptapContent(postData.content),
    categorie: postData.category,
    tags: postData.tags,
    status: postData.status || "DRAFT"
  };
  if (postData.featuredImage) {
    formatted.featuredImage = postData.featuredImage;
  }
  if (postData.id) {
    formatted.id = postData.id;
  }
  return formatted;
};
const API_URL = "https://blog-api-rrttqa.fly.dev/api/v1";
function usePostActions() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getToken = async () => {
    if (window.Clerk && window.Clerk.session) {
      try {
        return await window.Clerk.session.getToken();
      } catch (error2) {
        throw new Error("No se pudo obtener el token de autenticación");
      }
    }
    throw new Error("Usuario no autenticado. Por favor inicia sesión.");
  };
  const getPostBySlug = async (slug) => {
    setIsLoading(true);
    setError(null);
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/posts/${slug}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Post no encontrado");
        }
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al obtener el post");
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  const getPostById = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/posts/id/${id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Post no encontrado");
        }
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al obtener el post");
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  const createPost = async (postData) => {
    setIsLoading(true);
    setError(null);
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al crear el post");
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  const updatePost = async (id, postData) => {
    setIsLoading(true);
    setError(null);
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(postData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 404) {
          throw new Error("Post no encontrado");
        }
        if (response.status === 403) {
          throw new Error("No tienes permisos para editar este post");
        }
        if (response.status === 409) {
          throw new Error("El slug ya existe");
        }
        throw new Error(errorData.error || "Error al actualizar el post");
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  const deletePost = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 404) {
          throw new Error("Post no encontrado");
        }
        if (response.status === 403) {
          throw new Error("No tienes permisos para eliminar este post");
        }
        throw new Error(errorData.error || "Error al eliminar el post");
      }
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    error,
    getPostBySlug,
    getPostById,
    createPost,
    updatePost,
    deletePost
  };
}
const PostActions = () => {
  const { postData, isEditMode, resetPostData } = usePost();
  const { isLoading, error, createPost, updatePost, deletePost } = usePostActions();
  const handleSaveDraft = async () => {
    try {
      const formattedData = formatPostForBackend({ ...postData, status: "DRAFT" });
      const result = isEditMode && postData.id ? await updatePost(postData.id, formattedData) : await createPost(formattedData);
      if (result) {
        alert(isEditMode ? "Borrador actualizado exitosamente" : "Borrador guardado exitosamente");
      } else {
        alert(`Error: ${error || "Error desconocido"}`);
      }
    } catch (err) {
      alert(`Error: ${err instanceof Error ? err.message : "Error desconocido"}`);
    }
  };
  const handlePublish = async () => {
    try {
      if (!postData.title || !postData.slug || !postData.content) {
        alert("Por favor completa todos los campos requeridos");
        return;
      }
      const formattedData = formatPostForBackend({ ...postData, status: "PUBLISHED" });
      const result = isEditMode && postData.id ? await updatePost(postData.id, formattedData) : await createPost(formattedData);
      if (result) {
        alert(isEditMode ? "Post actualizado y publicado exitosamente" : "Post publicado exitosamente");
        localStorage.removeItem("editPostId");
        localStorage.removeItem("isLoadingPost");
        window.location.href = "/admin";
      } else {
        alert(`Error: ${error || "Error desconocido"}`);
      }
    } catch (err) {
      alert(`Error: ${err instanceof Error ? err.message : "Error desconocido"}`);
    }
  };
  const handlePreview = () => {
    localStorage.setItem("postPreview", JSON.stringify(postData));
    window.open("/admin/preview", "_blank");
  };
  const handleDelete = async () => {
    const confirmMessage = isEditMode ? "¿Estás seguro de que quieres eliminar este post? Esta acción no se puede deshacer." : "¿Estás seguro de que quieres limpiar el borrador actual?";
    if (!confirm(confirmMessage)) {
      return;
    }
    if (isEditMode && postData.id) {
      const success = await deletePost(postData.id);
      if (success) {
        alert("Post eliminado exitosamente");
        resetPostData();
        localStorage.removeItem("editPostId");
        localStorage.removeItem("isLoadingPost");
        window.location.href = "/admin";
      } else {
        alert(`Error al eliminar: ${error || "Error desconocido"}`);
      }
    } else {
      resetPostData();
      alert("Borrador limpiado");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mt-6 p-4 glass rounded-lg border border-white/10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleSaveDraft,
          disabled: isLoading,
          className: "flex items-center gap-2 px-4 py-2 border-2 border-secondary-light text-secondary-light font-medium rounded-lg hover:bg-white/5 transition disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsx(Save, { size: 18 }),
            isEditMode ? "Actualizar borrador" : "Guardar borrador"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handlePreview,
          disabled: isLoading,
          className: "flex items-center gap-2 px-4 py-2 border-2 border-gray-500 text-gray-300 font-medium rounded-lg hover:bg-white/5 transition disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsx(Eye, { size: 18 }),
            "Vista previa"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleDelete,
          disabled: isLoading,
          className: "flex items-center gap-2 px-4 py-2 bg-red-600 w-auto text-white font-medium rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed",
          children: [
            /* @__PURE__ */ jsx(Trash2, { size: 18 }),
            isEditMode ? "Eliminar post" : "Limpiar"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handlePublish,
          disabled: isLoading,
          className: "flex items-center gap-2 px-6 py-2 bg-secondary-light text-primary font-medium rounded-lg hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed",
          children: isLoading ? isEditMode ? "Actualizando..." : "Publicando..." : isEditMode ? "Actualizar y publicar" : "Publicar"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "absolute bottom-full mb-2 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded", children: error })
  ] });
};
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
const parseBlocksToTiptap = (blocksContent) => {
  if (blocksContent?.type === "doc") {
    return blocksContent;
  }
  if (!blocksContent?.blocks || !Array.isArray(blocksContent.blocks)) {
    return null;
  }
  const tiptapContent = [];
  blocksContent.blocks.forEach((block) => {
    switch (block.type) {
      case "paragraph":
        tiptapContent.push({
          type: "paragraph",
          content: [
            {
              type: "text",
              text: block.content || ""
            }
          ]
        });
        break;
      case "heading":
        tiptapContent.push({
          type: "heading",
          attrs: {
            level: block.level || 2
          },
          content: [
            {
              type: "text",
              text: block.content || ""
            }
          ]
        });
        break;
      case "code":
        tiptapContent.push({
          type: "codeBlock",
          attrs: {
            language: block.language || "javascript"
          },
          content: [
            {
              type: "text",
              text: block.content || ""
            }
          ]
        });
        break;
      case "bulletList":
        tiptapContent.push({
          type: "bulletList",
          content: (block.items || []).map((item) => ({
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: item
                  }
                ]
              }
            ]
          }))
        });
        break;
      case "orderedList":
        tiptapContent.push({
          type: "orderedList",
          content: (block.items || []).map((item) => ({
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: item
                  }
                ]
              }
            ]
          }))
        });
        break;
      case "blockquote":
        tiptapContent.push({
          type: "blockquote",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: block.content || ""
                }
              ]
            }
          ]
        });
        break;
      case "image":
        tiptapContent.push({
          type: "image",
          attrs: {
            src: block.src || "",
            alt: block.alt || "",
            title: block.title || ""
          }
        });
        break;
      case "divider":
        tiptapContent.push({
          type: "horizontalRule"
        });
        break;
      case "youtube":
        tiptapContent.push({
          type: "youtube",
          attrs: {
            src: getYoutubeEmbedUrl(block.src || ""),
            width: block.width || 640,
            height: block.height || 360
          }
        });
        break;
      default:
        if (block.content) {
          tiptapContent.push({
            type: "paragraph",
            content: [
              {
                type: "text",
                text: block.content
              }
            ]
          });
        }
        break;
    }
  });
  return {
    type: "doc",
    content: tiptapContent
  };
};
function useLoadPost() {
  const { setPostData, postData } = usePost();
  const { getPostById } = usePostActions();
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("isLoadingPost");
    }
    return false;
  });
  useEffect(() => {
    const loadPost = async () => {
      if (postData.id) return;
      const editPostId = localStorage.getItem("editPostId");
      if (!editPostId) {
        localStorage.removeItem("isLoadingPost");
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      const waitForClerk = async () => {
        let attempts = 0;
        while (attempts < 50) {
          if (window.Clerk && window.Clerk.session) return true;
          await new Promise((resolve) => setTimeout(resolve, 100));
          attempts++;
        }
        return false;
      };
      const clerkReady = await waitForClerk();
      if (!clerkReady) {
        alert("Error de autenticación. Por favor recarga la página.");
        localStorage.removeItem("editPostId");
        return;
      }
      try {
        const post = await getPostById(editPostId);
        if (post) {
          const tiptapContent = parseBlocksToTiptap(post.content);
          setPostData({
            id: post.id,
            title: post.title || "",
            slug: post.slug || "",
            excerpt: post.excerpt || "",
            category: post.categorie || post.category || "",
            tags: post.tags || [],
            content: tiptapContent,
            featuredImage: post.featuredImage,
            status: post.status
          });
          localStorage.removeItem("editPostId");
          localStorage.removeItem("isLoadingPost");
          setIsLoading(false);
        } else {
          alert("Error al cargar el post para edición");
          localStorage.removeItem("editPostId");
          localStorage.removeItem("isLoadingPost");
          setIsLoading(false);
        }
      } catch (error) {
        alert("Error al cargar el post para edición");
        localStorage.removeItem("editPostId");
        localStorage.removeItem("isLoadingPost");
        setIsLoading(false);
      }
    };
    loadPost();
  }, []);
  return { isLoading };
}
function PostLoader() {
  const { isLoading } = useLoadPost();
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("isLoadingPost");
    }
    return false;
  });
  useEffect(() => {
    if (!isLoading && showLoader) {
      setShowLoader(false);
    }
  }, [isLoading, showLoader]);
  if (showLoader || isLoading) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-secondary-light" }),
      /* @__PURE__ */ jsx("p", { className: "text-base font-medium text-gray-600", children: "Cargando post..." })
    ] }) });
  }
  return null;
}
const FormContent = () => {
  const { isLoading } = useLoadPost();
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("isLoadingPost");
    }
    return false;
  });
  useEffect(() => {
    if (!isLoading && showLoader) {
      setShowLoader(false);
    }
  }, [isLoading, showLoader]);
  if (showLoader || isLoading) {
    return /* @__PURE__ */ jsx(PostLoader, {});
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx(ContentData, {}),
    /* @__PURE__ */ jsx(RichTextEditor, {}),
    /* @__PURE__ */ jsx(PostActions, {})
  ] });
};
const CreatePostForm = () => {
  return /* @__PURE__ */ jsx(PostProvider, { children: /* @__PURE__ */ jsx(FormContent, {}) });
};
function PageTitle() {
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    const editPostId = localStorage.getItem("editPostId");
    setIsEditMode(!!editPostId);
  }, []);
  return /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4 text-[var(--color-secondary)]", children: isEditMode ? "Editar Publicación" : "Crear Publicación" });
}
const $$CrearPublicacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container mx-auto max-w-12xl bg-[#FFF]/5 backdrop-blur-xl rounded-xl p-4 mt-20"> <a href="/admin" class="text-primary font-medium flex items-center mb-8 bg-secondary-light px-4 py-2 rounded-full w-fit hover:bg-secondary-light/80 transition"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Volver
</a> ${renderComponent($$result2, "PageTitle", PageTitle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/admin/posts/PageTitle", "client:component-export": "PageTitle" })} ${renderComponent($$result2, "CreatePostForm", CreatePostForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/admin/posts/CreatePostForm", "client:component-export": "CreatePostForm" })} </section> ` })}`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/admin/crear-publicacion.astro", void 0);
const $$file = "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/pages/admin/crear-publicacion.astro";
const $$url = "/admin/crear-publicacion";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CrearPublicacion,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
