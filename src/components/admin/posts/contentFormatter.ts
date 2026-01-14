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
            attrs: node.attrs || {}, // Guardar todos los atributos incluyendo alineación
          });
        }
        break;

      case 'heading':
        const headingText = extractText(node);
        blocks.push({
          type: 'heading',
          level: node.attrs?.level || 1,
          content: headingText,
          attrs: node.attrs || {}, // Guardar todos los atributos incluyendo alineación
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

// Función para convertir bloques a formato HTML
export const convertBlocksToHTML = (blocks: any[]) => {
  return blocks.map(block => {
    switch (block.type) {
      case 'heading':
        const level = block.level || 1;
        const alignment = block.attrs?.textAlign || block.attrs?.alignment || 'left';
        const alignmentClass = alignment !== 'left' ? ` style="text-align: ${alignment}"` : '';
        return `<h${level}${alignmentClass}>${block.content}</h${level}>`;
      
      case 'paragraph':
        const paragraphAlignment = block.attrs?.textAlign || block.attrs?.alignment || 'left';
        const paragraphAlignmentClass = paragraphAlignment !== 'left' ? ` style="text-align: ${paragraphAlignment}"` : '';
        return `<p${paragraphAlignmentClass}>${block.content}</p>`;
      
      case 'code':
        return `<pre><code class="language-${block.language || 'javascript'}">${block.content}</code></pre>`;
      
      case 'bulletList':
        const bulletItems = block.items.map((item: string) => `<li>${item}</li>`).join('');
        return `<ul>${bulletItems}</ul>`;
      
      case 'orderedList':
        const orderedItems = block.items.map((item: string) => `<li>${item}</li>`).join('');
        return `<ol>${orderedItems}</ol>`;
      
      case 'blockquote':
        return `<blockquote>${block.content}</blockquote>`;
      
      case 'image':
        return `<img src="${block.src}" alt="${block.alt}" title="${block.title}" />`;
      
      case 'divider':
        return `<hr>`;
      
      case 'youtube':
        return `<div class="video-embed"><iframe src="${block.src}" width="${block.width || 640}" height="${block.height || 360}" frameborder="0" allowfullscreen></iframe></div>`;
      
      default:
        return `<p>${block.content || ''}</p>`;
    }
  }).join('\n');
};

// Función para formatear el post completo antes de enviarlo al backend
export const formatPostForBackend = (postData: any) => {
  // Convertir el contenido de TipTap a bloques
  const blocksContent = formatTiptapContent(postData.content);
  
  // Convertir los bloques a HTML para guardar en la BD
  const htmlContent = convertBlocksToHTML(blocksContent.blocks);
  
  const formatted: any = {
    title: postData.title,
    slug: postData.slug,
    excerpt: postData.excerpt,
    content: htmlContent, // Guardar como HTML en lugar de bloques
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
