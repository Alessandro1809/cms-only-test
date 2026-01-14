import type { Editor } from '@tiptap/react';
import { ChevronDown } from 'lucide-react';
import { FONT_SIZES } from '../Utils/editorConstants';

interface FontSizeSelectorProps {
  editor: Editor;
}

export const FontSizeSelector = ({ editor }: FontSizeSelectorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = e.target.value;
    
    if (size === 'normal') {
      // Si está en un heading, convertirlo a párrafo normal
      if (editor.isActive('heading')) {
        editor.chain().focus().setParagraph().run();
      }
      // Remover cualquier marca de fontSize
      editor.chain().focus().unsetMark('fontSize').run();
    } else if (size === 'h1') {
      // Aplicar heading 1
      editor.chain().focus().toggleHeading({ level: 1 }).run();
    } else if (size === 'h2') {
      // Aplicar heading 2
      editor.chain().focus().toggleHeading({ level: 2 }).run();
    } else if (size === 'h3') {
      // Aplicar heading 3
      editor.chain().focus().toggleHeading({ level: 3 }).run();
    } else {
      // Para otros tamaños de fuente (si se necesitan en el futuro)
      editor.chain().focus().setMark('fontSize', { fontSize: FONT_SIZES[size as keyof typeof FONT_SIZES] }).run();
    }
  };

  // Determinar qué opción está seleccionada actualmente
  const getCurrentValue = () => {
    if (editor.isActive('heading', { level: 1 })) return 'h1';
    if (editor.isActive('heading', { level: 2 })) return 'h2';
    if (editor.isActive('heading', { level: 3 })) return 'h3';
    if (editor.isActive('fontSize')) return 'custom';
    return 'normal';
  };

  return (
    <div className="relative">
      <select
        onChange={handleChange}
        value={getCurrentValue()}
        className="appearance-none p-2 rounded-full pl-4 pr-10 border border-green-500/40 hover:bg-gray-200/20 text-sm bg-[var(--color-secondary)]/5 backdrop-blur-xl cursor-pointer text-[var(--color-secondary)]"
        style={{
          backgroundImage: 'none',
        }}
      >
        <option value="normal" style={{ fontSize: '14px' }}>Texto normal</option>
        <option value="h1" style={{ fontSize: '24px', fontWeight: 'bold' }}>Título 1</option>
        <option value="h2" style={{ fontSize: '18px', fontWeight: 'bold' }}>Título 2</option>
        <option value="h3" style={{ fontSize: '14px', fontWeight: 'bold' }}>Título 3</option>
      </select>
      <ChevronDown 
        size={16} 
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
      />
    </div>
  );
};
