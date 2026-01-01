import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from "../chunks/astro/server_B9nb4zjO.mjs";
import { u as useCategories, $ as $$AdminLayout } from "../chunks/useCategories_xUGYId8J.mjs";
import "clsx";
import { $ as $$Button } from "../chunks/Button_Cb6mcSK6.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { g as getCategoryLabel } from "../chunks/categoryLabels_C9bKjRa1.mjs";
import { renderers } from "../renderers.mjs";
const $$StatusCards = createComponent(async ($$result, $$props, $$slots) => {
  const API_URL2 = "https://blog-api-jo8t.onrender.com/api/v1";
  async function fetchPostStats() {
    try {
      const publishedResponse = await fetch(
        `${API_URL2}/posts?status=PUBLISHED`
      );
      const publishedData = await publishedResponse.json();
      const publishedCount = publishedData.total || 0;
      const draftResponse = await fetch(`${API_URL2}/posts?status=DRAFT`);
      const draftData = await draftResponse.json();
      const draftCount = draftData.total || 0;
      return {
        published: publishedCount,
        draft: draftCount
      };
    } catch (error) {
      console.error("Error fetching post stats:", error);
      return {
        published: 0,
        draft: 0
      };
    }
  }
  async function fetchTotalViews() {
    try {
      const response = await fetch(`${API_URL2}/posts/stats/views`);
      if (!response.ok) {
        return 0;
      }
      const data = await response.json();
      return data.totalViews || 0;
    } catch (error) {
      console.error("Error fetching total views:", error);
      return 0;
    }
  }
  const postStats = await fetchPostStats();
  const totalViews = await fetchTotalViews();
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto max-w-12xl mt-10"> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> <article class="flex flex-col gap-2 rounded-lg glass p-4 border border-white/5"> <h3 class="font-semibold text-gray-400">Cantidad de vistas</h3> <p class="text-3xl font-bold text-[var(--color-secondary)]"> ${totalViews.toLocaleString()} </p> </article> <article class="flex flex-col gap-2 rounded-lg glass p-4 border border-white/5"> <h3 class="font-semibold text-gray-400">
Cantidad de suscriptores
</h3> <p class="text-3xl font-bold text-[var(--color-secondary)]">32</p> </article> <article class="flex flex-col gap-2 rounded-lg glass p-4 border border-white/5"> <h3 class="font-semibold text-gray-400">Posts publicados</h3> <p class="text-3xl font-bold text-[var(--color-secondary)]"> ${postStats.published} </p> </article> <article class="flex flex-col gap-2 rounded-lg glass p-4 border border-white/5"> <h3 class="font-semibold text-gray-400">Posts en borrador</h3> <p class="text-3xl font-bold text-[var(--color-secondary)]"> ${postStats.draft} </p> </article> </div> </section>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/dashboard/StatusCards.astro", void 0);
const $$DashboardHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="container mx-auto max-w-12xl"> <div class="flex items-center justify-between py-4 px-12"> <h3 class="text-xl font-bold text-[#515B54]">Publicaciones del Blog</h3> ${renderComponent($$result, "Button", $$Button, { "href": "/admin/crear-publicacion", "text": "Agregar publicación", "variant": "primaryrounded", "icon": true })} </div> </header>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/dashboard/DashboardHeader.astro", void 0);
function useFilters() {
  const [filters, setFilters] = useState(() => {
    if (typeof window === "undefined") {
      return {
        search: "",
        categorie: "",
        date: "",
        status: ""
      };
    }
    const params = new URLSearchParams(window.location.search);
    return {
      search: params.get("search") || "",
      categorie: params.get("categorie") || "",
      date: params.get("date") || "",
      status: params.get("status") || ""
    };
  });
  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };
  const clearFilters = () => {
    const newFilters = {
      search: "",
      categorie: "",
      date: "",
      status: ""
    };
    setFilters(newFilters);
    if (typeof window !== "undefined") {
      const newUrl = window.location.pathname;
      window.history.pushState({}, "", newUrl);
    }
  };
  const removeFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: ""
    }));
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      params.delete(key);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.pushState({}, "", newUrl);
    }
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams();
    if (filters.search) params.set("search", filters.search);
    if (filters.categorie && filters.categorie !== "Todas") params.set("categorie", filters.categorie);
    if (filters.date) params.set("date", filters.date);
    if (filters.status) params.set("status", filters.status);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  }, [filters]);
  return {
    filters,
    updateFilter,
    clearFilters,
    removeFilter
  };
}
const API_URL = "https://blog-api-jo8t.onrender.com/api/v1";
function usePosts(filters) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        limit: "100",
        offset: "0"
      });
      if (filters.search) params.set("search", filters.search);
      if (filters.categorie && filters.categorie !== "Todas") params.set("categorie", filters.categorie);
      if (filters.date) params.set("date", filters.date);
      if (filters.status) params.set("status", filters.status);
      const response = await fetch(`${API_URL}/posts?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (e) {
      setError(e.message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [filters.search, filters.categorie, filters.date, filters.status]);
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return {
    posts,
    loading,
    error,
    refetch: fetchPosts
  };
}
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
function SearchFilter({ value, onChange }) {
  const [localValue, setLocalValue] = useState(value);
  useEffect(() => {
    setLocalValue(value);
  }, [value]);
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange("search", localValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [localValue]);
  return /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-full", children: [
    /* @__PURE__ */ jsx("label", { className: "text-gray-400 font-semibold", htmlFor: "search", children: "Buscar" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "search",
          type: "text",
          value: localValue,
          onChange: (e) => setLocalValue(e.target.value),
          className: "glass rounded-full pl-10 pr-4 py-2 border border-white/10 w-full focus:outline-none focus:ring-2 focus:ring-secondary-light text-gray-100",
          placeholder: "Por titulo, contenido, palabras clave"
        }
      )
    ] })
  ] }) });
}
function DateFilter({ value, onChange }) {
  const handleChange = (e) => {
    const dateValue = e.target.value;
    if (dateValue) {
      const [year, month, day] = dateValue.split("-");
      const isoDate = new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day))).toISOString();
      onChange("date", isoDate);
    } else {
      onChange("date", "");
    }
  };
  const formattedValue = value ? new Date(value).toISOString().split("T")[0] : "";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-full", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "date", className: "text-gray-400 font-semibold text-sm sm:text-base whitespace-nowrap", children: "Fecha" }),
    /* @__PURE__ */ jsx("div", { className: "relative w-full", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "date",
        id: "date",
        value: formattedValue,
        onChange: handleChange,
        className: "glass rounded-full px-4 py-1.5 sm:py-2 border border-white/10 w-full text-sm sm:text-base cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary-light text-center text-gray-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:w-5 [&::-webkit-calendar-picker-indicator]:h-5 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-3 [&::-webkit-calendar-picker-indicator]:top-1/2 [&::-webkit-calendar-picker-indicator]:-translate-y-1/2 [&::-webkit-calendar-picker-indicator]:bg-transparent [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:brightness-0 [&::-webkit-calendar-picker-indicator]:saturate-100 [&::-webkit-calendar-picker-indicator]:invert-[0.7] [&::-webkit-calendar-picker-indicator]:sepia-0",
        style: {
          colorScheme: "dark"
        }
      }
    ) })
  ] });
}
function CategoryFilter({ value, onChange }) {
  const { categories, loading } = useCategories();
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 container mx-auto max-w-12xl", children: [
    /* @__PURE__ */ jsx("label", { className: "font-semibold text-gray-400", htmlFor: "category-filter", children: "Categoría" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        "select",
        {
          className: `w-full glass border border-white/10 rounded-full py-2 px-4 font-alexandria appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-light ${value && value !== "Todas" ? "text-secondary-light" : "text-gray-400"}`,
          name: "category-filter",
          id: "category-filter",
          value: value || "Todas",
          onChange: (e) => onChange("categorie", e.target.value),
          disabled: loading,
          children: [
            /* @__PURE__ */ jsx("option", { value: "Todas", children: "Todas" }),
            categories.map((cat) => /* @__PURE__ */ jsx("option", { value: cat.value, children: cat.label }, cat.value))
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
        }
      )
    ] })
  ] });
}
function StatusSwitch({ value, onChange }) {
  const isPublished = value === "PUBLISHED";
  const isDraft = value === "DRAFT";
  const isEmpty = !value || value === "";
  const handleToggle = (newStatus) => {
    if (value === newStatus) {
      onChange("status", "");
    } else {
      onChange("status", newStatus);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-fit gap-2", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "status-switch", className: "font-semibold text-gray-400", children: "Publicado" }),
    /* @__PURE__ */ jsxs("div", { className: `inline-flex items-center glass rounded-full p-1 relative border transition-colors ${isEmpty ? "border-white/5 bg-transparent" : "border-white/10"}`, children: [
      !isEmpty && /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-1 left-1 bg-secondary-light rounded-full transition-transform duration-300 ease-in-out",
          style: {
            width: "calc(50% - 4px)",
            height: "calc(100% - 8px)",
            transform: isPublished ? "translateX(0)" : "translateX(calc(100%))"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => handleToggle("PUBLISHED"),
          className: `px-6 py-1 rounded-full font-semibold transition-colors duration-300 ease-in-out z-10 relative ${isPublished ? "text-primary" : isEmpty ? "text-gray-400 cursor-pointer" : "text-gray-500"}`,
          children: "Sí"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => handleToggle("DRAFT"),
          className: `px-6 py-1 rounded-full font-semibold transition-colors duration-300 ease-in-out z-10 relative ${isDraft ? "text-primary" : isEmpty ? "text-gray-400 cursor-pointer" : "text-gray-500"}`,
          children: "No"
        }
      )
    ] })
  ] });
}
function ActiveFilters({ filters, onRemove, onClearAll }) {
  const activeFilters = [];
  if (filters.search) {
    activeFilters.push({ key: "search", label: "Búsqueda", value: filters.search });
  }
  if (filters.categorie && filters.categorie !== "Todas") {
    activeFilters.push({ key: "categorie", label: "Categoría", value: filters.categorie });
  }
  if (filters.date) {
    const formattedDate = new Date(filters.date).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    });
    activeFilters.push({ key: "date", label: "Fecha desde", value: formattedDate });
  }
  if (filters.status) {
    const statusLabel = filters.status === "PUBLISHED" ? "Publicados" : "Borradores";
    activeFilters.push({ key: "status", label: "Estado", value: statusLabel });
  }
  if (activeFilters.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-12xl px-4 sm:px-8 md:px-12 pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#515B54]", children: "Filtros activos:" }),
    activeFilters.map((filter) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "inline-flex items-center gap-2 bg-secondary-light text-primary px-3 py-1 rounded-full text-sm",
        children: [
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            filter.label,
            ":"
          ] }),
          /* @__PURE__ */ jsx("span", { children: filter.value }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => onRemove(filter.key),
              className: " hover:text-primary hover:cursor-pointer rounded-full p-0.5 transition-colors",
              "aria-label": `Eliminar filtro ${filter.label}`,
              children: /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                    /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                  ]
                }
              )
            }
          )
        ]
      },
      filter.key
    )),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClearAll,
        className: "text-sm text-red-600 hover:text-red-800 font-semibold underline cursor-pointer",
        children: "Limpiar todos"
      }
    )
  ] }) });
}
const PostItem = React.memo(({ post }) => {
  const formattedDate = useMemo(() => {
    const date = new Date(post.createdAt);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }, [post.createdAt]);
  const categoryLabel = useMemo(
    () => getCategoryLabel(post.categorie),
    [post.categorie]
  );
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-7 gap-4 p-4 hover:bg-gray-50/10 transition-colors min-w-[800px]", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx("p", { className: "text-neutral-200 font-medium truncate", title: post.title, children: post.title }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-neutral-200 text-sm", children: formattedDate }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-neutral-200 text-sm bg-purple-400/10 border border-purple-400/60 px-2 py-1 rounded-full w-fit", children: categoryLabel }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "span",
      {
        className: `inline-block px-2 py-1 rounded-full text-xs font-semibold border ${post.status === "PUBLISHED" ? "bg-green-500/10 text-green-500" : "bg-gray-500/10 text-gray-500"}`,
        children: post.status === "PUBLISHED" ? "Sí" : "No"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-neutral-200 text-sm", children: post.views.toLocaleString() }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "text-blue-600/60 hover:text-neutral-200/60 text-sm font-medium cursor-pointer",
          onClick: () => {
            localStorage.setItem("editPostId", post.id);
            localStorage.setItem("isLoadingPost", "true");
            window.location.href = "/admin/crear-publicacion";
          },
          children: "Editar"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "text-red-600/60 hover:text-neutral-200/60 text-sm font-medium cursor-pointer",
          onClick: async () => {
            if (!confirm("¿Estás seguro de que quieres eliminar este post? Esta acción no se puede deshacer.")) {
              return;
            }
            try {
              const token = await window.Clerk?.session?.getToken();
              if (!token) {
                alert("No se pudo obtener el token de autenticación");
                return;
              }
              const API_URL2 = "https://blog-api-jo8t.onrender.com/api/v1";
              const response = await fetch(`${API_URL2}/posts/${post.id}`, {
                method: "DELETE",
                headers: {
                  "Authorization": `Bearer ${token}`
                }
              });
              if (!response.ok) {
                throw new Error("Error al eliminar el post");
              }
              alert("Post eliminado exitosamente");
              window.location.reload();
            } catch (error) {
              alert("Error al eliminar el post");
            }
          },
          children: "Eliminar"
        }
      )
    ] })
  ] });
});
PostItem.displayName = "PostItem";
function PostsList({ posts, loading, error }) {
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "border border-green-300/10 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-8 text-center text-gray-500", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-secondary" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 font-semibold", children: "Cargando posts..." })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "border border-red-300/10 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-8 text-center text-red-600", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Error al cargar los posts" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm mt-2", children: error })
    ] }) });
  }
  if (posts.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "border border-gray-300/10 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-8 text-center text-gray-500", children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "mx-auto h-12 w-12 text-gray-400 mb-4",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-lg", children: "No se encontraron posts" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm mt-2", children: "Intenta ajustar los filtros para ver más resultados" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("section", { className: "container mx-auto max-w-12xl py-4 px-4 sm:px-8 md:px-12", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-3 px-2", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#515B54]", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: posts.length }),
      " ",
      posts.length === 1 ? "resultado encontrado" : "resultados encontrados"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "border border-gray-300/10 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "overflow-x-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-7 gap-4 p-4 min-w-[800px]", children: [
        /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#515B54]", children: "Título" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#515B54]", children: "Fecha" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#515B54]", children: "Categoría" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#515B54]", children: "Publicado" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#515B54]", children: "Visitas" }) }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "font-semibold text-[#515B54]", children: "Acciones" }) })
      ] }),
      posts.map((post) => /* @__PURE__ */ jsx(PostItem, { post }, post.id))
    ] }) })
  ] });
}
function PostsDashboard() {
  const { filters, updateFilter, clearFilters, removeFilter } = useFilters();
  const debouncedSearch = useDebounce(filters.search, 500);
  const { posts, loading, error } = usePosts({
    ...filters,
    search: debouncedSearch
  });
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx("section", { className: "container mx-auto max-w-12xl", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-4 px-4 sm:px-8 md:px-12", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3", children: /* @__PURE__ */ jsx(SearchFilter, { value: filters.search, onChange: updateFilter }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1", children: /* @__PURE__ */ jsx(DateFilter, { value: filters.date, onChange: updateFilter }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1", children: /* @__PURE__ */ jsx(CategoryFilter, { value: filters.categorie, onChange: updateFilter }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-1", children: /* @__PURE__ */ jsx(StatusSwitch, { value: filters.status, onChange: updateFilter }) })
    ] }) }),
    /* @__PURE__ */ jsx(ActiveFilters, { filters, onRemove: removeFilter, onClearAll: clearFilters }),
    /* @__PURE__ */ jsx("div", { className: "mx-4 pb-4", children: /* @__PURE__ */ jsx(PostsList, { posts, loading, error }) })
  ] });
}
const $$BlogDashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto max-w-12xl mt-10"> <div class="glass rounded-xl border border-green-400"> ${renderComponent($$result, "DashboardHeader", $$DashboardHeader, {})} ${renderComponent($$result, "PostsDashboard", PostsDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/dashboard/react", "client:component-export": "PostsDashboard" })} </div> </section>`;
}, "/Users/alessandro_diaz/Documents/Development/Personal/blog-standalone/src/components/admin/dashboard/BlogDashboard.astro", void 0);
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Panel de administracion" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "StatusCards", $$StatusCards, {})} ${renderComponent($$result2, "BlogDashboard", $$BlogDashboard, {})} ` })}`;
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
