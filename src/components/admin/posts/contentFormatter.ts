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

// Función para convertir el contenido de Tiptap a Markdown puro
export const formatTiptapContent = (tiptapJson: any): string => {
  if (!tiptapJson || !tiptapJson.content) {
    return '';
  }

  const markdownParts: string[] = [];

  const processNode = (node: any): string => {
    switch (node.type) {
      case 'paragraph':
        const paragraphText = extractTextWithMarks(node);
        return paragraphText.trim() ? paragraphText + '\n' : '';

      case 'heading':
        const headingText = extractTextWithMarks(node);
        const level = node.attrs?.level || 1;
        const hashes = '#'.repeat(level);
        return `${hashes} ${headingText}\n`;

      case 'codeBlock':
        const codeText = extractText(node);
        const language = node.attrs?.language || '';
        return `\`\`\`${language}\n${codeText}\n\`\`\`\n`;

      case 'bulletList':
        const bulletItems = extractListItems(node);
        return bulletItems.map(item => `- ${item}`).join('\n') + '\n';

      case 'orderedList':
        const orderedItems = extractListItems(node);
        return orderedItems.map((item, i) => `${i + 1}. ${item}`).join('\n') + '\n';

      case 'blockquote':
        const quoteText = extractTextWithMarks(node);
        return `> ${quoteText}\n`;

      case 'image':
        const src = node.attrs?.src || '';
        const alt = node.attrs?.alt || '';
        const title = node.attrs?.title ? ` "${node.attrs.title}"` : '';
        return `![${alt}](${src}${title})\n`;

      case 'horizontalRule':
        return '---\n';

      case 'youtube':
        const embedUrl = getYoutubeEmbedUrl(node.attrs?.src || '');
        return `[![Video](https://img.youtube.com/vi/${extractYoutubeId(node.attrs?.src || '')}/0.jpg)](${embedUrl})\n`;

      default:
        const text = extractTextWithMarks(node);
        return text.trim() ? text + '\n' : '';
    }
  };

  tiptapJson.content.forEach((node: any) => {
    const markdown = processNode(node);
    if (markdown) {
      markdownParts.push(markdown);
    }
  });

  return markdownParts.join('\n');
};

// Función auxiliar para extraer ID de YouTube
const extractYoutubeId = (url: string): string => {
  if (!url) return '';
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return shortMatch[1];
  const embedMatch = url.match(/embed\/([^?&]+)/);
  if (embedMatch) return embedMatch[1];
  return '';
};

// Función auxiliar para extraer texto con marcas (bold, italic, code, links)
const extractTextWithMarks = (node: any): string => {
  if (node.type === 'text') {
    let text = node.text || '';
    
    if (node.marks && Array.isArray(node.marks)) {
      node.marks.forEach((mark: any) => {
        switch (mark.type) {
          case 'bold':
          case 'strong':
            text = `**${text}**`;
            break;
          case 'italic':
          case 'em':
            text = `*${text}*`;
            break;
          case 'code':
            text = `\`${text}\``;
            break;
          case 'strike':
            text = `~~${text}~~`;
            break;
          case 'link':
            const href = mark.attrs?.href || '';
            text = `[${text}](${href})`;
            break;
        }
      });
    }
    
    return text;
  }

  if (node.content && Array.isArray(node.content)) {
    return node.content.map((child: any) => extractTextWithMarks(child)).join('');
  }

  return '';
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
        .map((node: any) => extractTextWithMarks(node))
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
