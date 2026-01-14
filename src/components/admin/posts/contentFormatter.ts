// Función helper para convertir URLs de YouTube a formato embed
const getYoutubeEmbedUrl = (url: string): string => {
  if (!url) return '';
  
  // Si ya es una URL de embed, devolverla tal cual
  if (url.includes('/embed/')) {
    return url;
  }
  
  // Extraer el ID del video de diferentes formatos de URL
  let videoId = '';
  
  // Formato: https://www.youtube.com/watch?v=VIDEO_ID
  const watchRegex = /[?&]v=([^&]+)/;
  const watchMatch = url.match(watchRegex);
  if (watchMatch) {
    videoId = watchMatch[1];
  }
  
  // Formato: https://youtu.be/VIDEO_ID
  const shortRegex = /youtu\.be\/([^?&]+)/;
  const shortMatch = url.match(shortRegex);
  if (shortMatch) {
    videoId = shortMatch[1];
  }
  
  // Si encontramos un ID, devolver la URL de embed
  if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  }
  
  // Si no se pudo extraer el ID, devolver la URL original
  return url;
};

// Función para convertir el contenido de Tiptap a formato de bloques estructurado
export const formatTiptapContent = (tiptapJson: any) => {
  if (!tiptapJson || !tiptapJson.content) {
    return { blocks: [] };
  }

  const blocks: any[] = [];

  const processNode = (node: any) => {
    switch (node.type) {
      case 'paragraph':
        const paragraphText = extractText(node);
        if (paragraphText.trim()) {
          blocks.push({
            type: 'paragraph',
            content: paragraphText,
          });
        }
        break;

      case 'heading':
        const headingText = extractText(node);
        blocks.push({
          type: 'heading',
          level: node.attrs?.level || 1,
          content: headingText,
        });
        break;

      case 'codeBlock':
        const codeText = extractText(node);
        blocks.push({
          type: 'code',
          language: node.attrs?.language || 'javascript',
          content: codeText,
        });
        break;

      case 'bulletList':
        const bulletItems = extractListItems(node);
        blocks.push({
          type: 'bulletList',
          items: bulletItems,
        });
        break;

      case 'orderedList':
        const orderedItems = extractListItems(node);
        blocks.push({
          type: 'orderedList',
          items: orderedItems,
        });
        break;

      case 'blockquote':
        const quoteText = extractText(node);
        blocks.push({
          type: 'blockquote',
          content: quoteText,
        });
        break;

      case 'image':
        blocks.push({
          type: 'image',
          src: node.attrs?.src || '',
          alt: node.attrs?.alt || '',
          title: node.attrs?.title || '',
        });
        break;

      case 'horizontalRule':
        blocks.push({
          type: 'divider',
        });
        break;

      case 'youtube':
        blocks.push({
          type: 'youtube',
          src: getYoutubeEmbedUrl(node.attrs?.src || ''),
          width: node.attrs?.width,
          height: node.attrs?.height,
        });
        break;

      default:
        // Para nodos desconocidos, intentar extraer texto
        const text = extractText(node);
        if (text.trim()) {
          blocks.push({
            type: 'paragraph',
            content: text,
          });
        }
        break;
    }
  };

  // Procesar todos los nodos del contenido
  tiptapJson.content.forEach((node: any) => {
    processNode(node);
  });

  return { blocks };
};

// Función auxiliar para extraer texto de un nodo
const extractText = (node: any): string => {
  if (node.type === 'text') {
    return node.text || '';
  }

  if (node.content && Array.isArray(node.content)) {
    return node.content.map((child: any) => extractText(child)).join('');
  }

  return '';
};

// Función auxiliar para extraer items de listas
const extractListItems = (listNode: any): string[] => {
  if (!listNode.content) return [];

  return listNode.content.map((listItem: any) => {
    if (listItem.type === 'listItem' && listItem.content) {
      return listItem.content
        .map((node: any) => extractText(node))
        .join('')
        .trim();
    }
    return '';
  }).filter((item: string) => item.length > 0);
};

// Función para formatear el post completo antes de enviarlo al backend
export const formatPostForBackend = (postData: any) => {
  const formatted: any = {
    title: postData.title,
    slug: postData.slug,
    excerpt: postData.excerpt,
    content: formatTiptapContent(postData.content),
    categorie: postData.category,
    tags: postData.tags,
    status: postData.status || 'DRAFT',
  };

  if (postData.featuredImage) {
    formatted.featuredImage = postData.featuredImage;
  }

  if (postData.id) {
    formatted.id = postData.id;
  }

  return formatted;
};
