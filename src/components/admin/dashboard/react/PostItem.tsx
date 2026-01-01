import React, { useMemo } from 'react';
import type { Post } from '@/components/admin/types/post';
import { getCategoryLabel } from '@/lib/categoryLabels';

interface PostItemProps {
  post: Post;
}

export const PostItem = React.memo(({ post }: PostItemProps) => {
  const formattedDate = useMemo(() => {
    const date = new Date(post.createdAt);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }, [post.createdAt]);

  const categoryLabel = useMemo(() => 
    getCategoryLabel(post.categorie),
    [post.categorie]
  );

  return (
    <div className="grid grid-cols-7 gap-4 p-4 hover:bg-gray-50/10 transition-colors min-w-[800px]">
      <div className="col-span-2">
        <p className="text-neutral-200 font-medium truncate" title={post.title}>
          {post.title}
        </p>
      </div>

      <div>
        <p className="text-neutral-200 text-sm">{formattedDate}</p>
      </div>

      <div>
        <p className="text-neutral-200 text-sm bg-purple-400/10 border border-purple-400/60 px-2 py-1 rounded-full w-fit">
          {categoryLabel}
        </p>
      </div>

      <div>
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold border ${
            post.status === 'PUBLISHED'
              ? 'bg-green-500/10 text-green-500'
              : 'bg-gray-500/10 text-gray-500'
          }`}
        >
          {post.status === 'PUBLISHED' ? 'Sí' : 'No'}
        </span>
      </div>

      <div>
        <p className="text-neutral-200 text-sm">{post.views.toLocaleString()}</p>
      </div>

      <div className="flex gap-2">
        <button
          className="text-blue-600/60 hover:text-neutral-200/60 text-sm font-medium cursor-pointer"
          onClick={() => {
            localStorage.setItem('editPostId', post.id);
            localStorage.setItem('isLoadingPost', 'true');
            window.location.href = '/admin/crear-publicacion';
          }}
        >
          Editar
        </button>
        <button
          className="text-red-600/60 hover:text-neutral-200/60 text-sm font-medium cursor-pointer"
          onClick={async () => {
            if (!confirm('¿Estás seguro de que quieres eliminar este post? Esta acción no se puede deshacer.')) {
              return;
            }
            
            try {
              const token = await (window as any).Clerk?.session?.getToken();
              if (!token) {
                alert('No se pudo obtener el token de autenticación');
                return;
              }

              const API_URL = import.meta.env.PUBLIC_API_URL || 'https://blog-api-jo8t.onrender.com/api/v1';
              const response = await fetch(`${API_URL}/posts/${post.id}`, {
                method: 'DELETE',
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
              });

              if (!response.ok) {
                throw new Error('Error al eliminar el post');
              }

              alert('Post eliminado exitosamente');
              window.location.reload();
            } catch (error) {
              alert('Error al eliminar el post');
            }
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
});

PostItem.displayName = 'PostItem';
