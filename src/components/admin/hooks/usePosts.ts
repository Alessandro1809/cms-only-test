import { useState, useEffect, useCallback } from 'react';
import type { Post, Filters } from '../types/post';

const API_URL = import.meta.env.PUBLIC_API_URL || 'https://blog-api-v1.fly.dev/api/v1';

interface UsePostsReturn {
  posts: Post[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook para cargar posts del backend con filtros
 */
export function usePosts(filters: Filters): UsePostsReturn {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        limit: '100',
        offset: '0'
      });

      // Agregar filtros solo si tienen valor
      if (filters.search) params.set('search', filters.search);
      if (filters.categorie && filters.categorie !== 'Todas') params.set('categorie', filters.categorie);
      if (filters.date) params.set('date', filters.date);
      if (filters.status) params.set('status', filters.status);

      const response = await fetch(`${API_URL}/posts?${params.toString()}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data.posts || []);
    } catch (e: any) {
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
