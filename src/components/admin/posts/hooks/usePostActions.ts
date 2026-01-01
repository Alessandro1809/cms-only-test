import { useState } from 'react';

declare global {
  interface Window {
    Clerk: any;
  }
}

const API_URL = import.meta.env.PUBLIC_API_URL || 'https://blog-api-jo8t.onrender.com/api/v1';

interface PostData {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: any;
  status?: 'DRAFT' | 'PUBLISHED';
}

export function usePostActions() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getToken = async () => {
    if (window.Clerk && window.Clerk.session) {
      try {
        return await window.Clerk.session.getToken();
      } catch (error) {
        throw new Error('No se pudo obtener el token de autenticación');
      }
    }
    throw new Error('Usuario no autenticado. Por favor inicia sesión.');
  };

  const getPostBySlug = async (slug: string): Promise<PostData | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const token = await getToken();

      const response = await fetch(`${API_URL}/posts/${slug}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post no encontrado');
        }
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al obtener el post');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getPostById = async (id: string): Promise<PostData | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const token = await getToken();

      const response = await fetch(`${API_URL}/posts/id/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Post no encontrado');
        }
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al obtener el post');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const createPost = async (postData: PostData): Promise<PostData | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const token = await getToken();

      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al crear el post');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePost = async (id: string, postData: Partial<PostData>): Promise<PostData | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const token = await getToken();

      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 404) {
          throw new Error('Post no encontrado');
        }
        if (response.status === 403) {
          throw new Error('No tienes permisos para editar este post');
        }
        if (response.status === 409) {
          throw new Error('El slug ya existe');
        }
        throw new Error(errorData.error || 'Error al actualizar el post');
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const deletePost = async (id: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const token = await getToken();

      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 404) {
          throw new Error('Post no encontrado');
        }
        if (response.status === 403) {
          throw new Error('No tienes permisos para eliminar este post');
        }
        throw new Error(errorData.error || 'Error al eliminar el post');
      }

      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
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
    deletePost,
  };
}
