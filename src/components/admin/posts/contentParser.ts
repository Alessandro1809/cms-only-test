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

/**
 * Convierte el formato de bloques del backend al formato JSON de Tiptap
 */
export const parseBlocksToTiptap = (blocksContent: any) => {
  // Si ya es formato Tiptap (tiene type: 'doc'), devolverlo tal cual
  if (blocksContent?.type === 'doc') {
    return blocksContent;
  }

  // Si tiene estructura de bloques, convertir
  if (!blocksContent?.blocks || !Array.isArray(blocksContent.blocks)) {
    return null;
  }

  const tiptapContent: any[] = [];

  blocksContent.blocks.forEach((block: any) => {
    switch (block.type) {
      case 'paragraph':
        tiptapContent.push({
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: block.content || '',
            },
          ],
        });
        break;

      case 'heading':
        tiptapContent.push({
          type: 'heading',
          attrs: {
            level: block.level || 2,
          },
          content: [
            {
              type: 'text',
              text: block.content || '',
            },
          ],
        });
        break;

      case 'code':
        tiptapContent.push({
          type: 'codeBlock',
          attrs: {
            language: block.language || 'javascript',
          },
          content: [
            {
              type: 'text',
              text: block.content || '',
            },
          ],
        });
        break;

      case 'bulletList':
        tiptapContent.push({
          type: 'bulletList',
          content: (block.items || []).map((item: string) => ({
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: item,
                  },
                ],
              },
            ],
          })),
        });
        break;

      case 'orderedList':
        tiptapContent.push({
          type: 'orderedList',
          content: (block.items || []).map((item: string) => ({
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: item,
                  },
                ],
              },
            ],
          })),
        });
        break;

      case 'blockquote':
        tiptapContent.push({
          type: 'blockquote',
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: block.content || '',
                },
              ],
            },
          ],
        });
        break;

      case 'image':
        tiptapContent.push({
          type: 'image',
          attrs: {
            src: block.src || '',
            alt: block.alt || '',
            title: block.title || '',
          },
        });
        break;

      case 'divider':
        tiptapContent.push({
          type: 'horizontalRule',
        });
        break;

      case 'youtube':
        tiptapContent.push({
          type: 'youtube',
          attrs: {
            src: getYoutubeEmbedUrl(block.src || ''),
            width: block.width || 640,
            height: block.height || 360,
          },
        });
        break;

      default:
        // Para bloques desconocidos, crear un párrafo
        if (block.content) {
          tiptapContent.push({
            type: 'paragraph',
            content: [
              {
                type: 'text',
                text: block.content,
              },
            ],
          });
        }
        break;
    }
  });

  return {
    type: 'doc',
    content: tiptapContent,
  };
};
