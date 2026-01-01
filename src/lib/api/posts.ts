import type { Post, PostsResponse } from '@/components/web/blog/types';

const API_URL = import.meta.env.PUBLIC_API_URL || 'https://blog-api-jo8t.onrender.com/api/v1';

export async function fetchPublishedPosts(
  limit: number = 10,
  offset: number = 0,
  search?: string,
  category?: string,
  order?: 'newest' | 'oldest'
): Promise<PostsResponse> {
  try {
    const params = new URLSearchParams({
      status: 'PUBLISHED',
      limit: limit.toString(),
      offset: offset.toString(),
    });

    if (search && search.trim()) {
      params.append('search', search.trim());
    }

    if (category && category.trim()) {
      params.append('categorie', category.trim());
    }

    if (order) {
      params.append('order', order);
    }

    const response = await fetch(`${API_URL}/posts?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], total: 0, limit, offset };
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`${API_URL}/posts/${slug}`);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function fetchRelatedPosts(
  currentPostId: string,
  category: string,
  limit: number = 3
): Promise<Post[]> {
  try {
    const response = await fetch(
      `${API_URL}/posts?status=PUBLISHED&categorie=${category}&limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: PostsResponse = await response.json();

    return data.posts.filter(post => post.id !== currentPostId);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

export interface Category {
  value: string;
  label: string;
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_URL}/categories`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function fetchNextPost(currentPostId: string): Promise<Post | null> {
  try {
    const response = await fetch(
      `${API_URL}/posts?status=PUBLISHED&limit=100&order=newest`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: PostsResponse = await response.json();
    const currentIndex = data.posts.findIndex(post => post.id === currentPostId);

    if (currentIndex === -1 || currentIndex === data.posts.length - 1) {
      return null;
    }

    return data.posts[currentIndex + 1];
  } catch (error) {
    console.error('Error fetching next post:', error);
    return null;
  }
}
