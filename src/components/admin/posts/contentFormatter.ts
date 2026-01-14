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

// Función para convertir el contenido de Tiptap a Markdown
export const formatTiptapToMarkdown = (tiptapJson: any): string => {
  if (!tiptapJson || !tiptapJson.content) {
    return '';
  }

  const markdownParts: string[] = [];

  const processNode = (node: any): string => {
    switch (node.type) {
      case 'paragraph':
        const paragraphText = extractTextWithMarks(node);
        return paragraphText.trim() || '';

      case 'heading':
        const headingText = extractTextWithMarks(node);
        const level = node.attrs?.level || 1;
        const hashes = '#'.repeat(level);
        return `${hashes} ${headingText}`;

      case 'codeBlock':
        const codeText = extractText(node);
        const language = node.attrs?.language || '';
        return `\`\`\`${language}${codeText}\`\`\``;

      case 'bulletList':
        const bulletItems = extractListItemsWithMarks(node);
        return bulletItems.map(item => `- ${item}`).join('');

      case 'orderedList':
        const orderedItems = extractListItemsWithMarks(node);
        return orderedItems.map((item, i) => `${i + 1}. ${item}`).join('');

      case 'blockquote':
        const quoteText = extractTextWithMarks(node);
        return `> ${quoteText}`;

      case 'image':
        const src = node.attrs?.src || '';
        const alt = node.attrs?.alt || '';
        const title = node.attrs?.title ? ` "${node.attrs.title}"` : '';
        return `![${alt}](${src}${title})`;

      case 'horizontalRule':
        return '---';

      case 'youtube':
        const videoSrc = getYoutubeEmbedUrl(node.attrs?.src || '');
        return `<iframe src="${videoSrc}" width="${node.attrs?.width || 560}" height="${node.attrs?.height || 315}" frameborder="0" allowfullscreen></iframe>`;

      default:
        const text = extractTextWithMarks(node);
        return text.trim() || '';
    }
  };

  tiptapJson.content.forEach((node: any) => {
    const markdown = processNode(node);
    if (markdown) {
      markdownParts.push(markdown);
    }
  });

  // Unir con saltos de línea reales para separar bloques
  return markdownParts.join('\n\n');
};

// Función para extraer texto con marcas (bold, italic, code, links)
const extractTextWithMarks = (node: any): string => {
  if (node.type === 'text') {
    let text = node.text || '';
    
    if (node.marks && Array.isArray(node.marks)) {
      for (const mark of node.marks) {
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
      }
    }
    
    return text;
  }

  if (node.content && Array.isArray(node.content)) {
    return node.content.map((child: any) => extractTextWithMarks(child)).join('');
  }

  return '';
};

// Función auxiliar para extraer items de listas con marcas
const extractListItemsWithMarks = (listNode: any): string[] => {
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

// Función para generar el contenido Markdown con frontmatter YAML
const generateMarkdownWithFrontmatter = (postData: any): string => {
  const markdownBody = formatTiptapToMarkdown(postData.content);
  
  // Construir frontmatter YAML con saltos de línea reales
  const frontmatterLines: string[] = ['---'];
  
  frontmatterLines.push(`title: "${sanitizeString(postData.title)}"`);
  frontmatterLines.push(`date: "${new Date().toISOString()}"`);
  frontmatterLines.push(`draft: ${postData.status === 'DRAFT'}`);

  if (postData.excerpt) {
    frontmatterLines.push(`excerpt: "${sanitizeString(postData.excerpt)}"`);
  }

  if (postData.tags && postData.tags.length > 0) {
    frontmatterLines.push(`tags: [${postData.tags.map((t: string) => `"${sanitizeString(t)}"`).join(', ')}]`);
  }

  if (postData.category) {
    frontmatterLines.push(`category: "${sanitizeString(postData.category)}"`);
  }

  frontmatterLines.push(`featured: ${postData.featuredImage ? 'true' : 'false'}`);
  frontmatterLines.push('---');

  return frontmatterLines.join('\n') + '\n\n' + markdownBody;
};

// Función para sanitizar strings - reemplaza comillas dobles por simples para evitar problemas de escape
const sanitizeString = (str: string): string => {
  if (!str) return '';
  return str.replace(/"/g, "'").replace(/\n/g, ' ').replace(/\r/g, '');
};

// Función para formatear el post completo antes de enviarlo al backend
export const formatPostForBackend = (postData: any) => {
  const markdownContent = generateMarkdownWithFrontmatter(postData);
  
  const formatted: any = {
    title: postData.title,
    slug: postData.slug,
    excerpt: postData.excerpt,
    content: markdownContent,
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
