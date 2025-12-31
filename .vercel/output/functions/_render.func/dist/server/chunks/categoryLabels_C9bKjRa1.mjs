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
export {
  CATEGORIES as C,
  CATEGORY_LABELS as a,
  getCategoryLabel as g
};
