import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { CategoryType } from '@/lib/categoryLabels';

interface PostData {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  category: CategoryType | '';
  tags: string[];
  content: any;
  featuredImage?: string;
  featured?: boolean;
  status?: 'DRAFT' | 'PUBLISHED';
}

interface PostContextType {
  postData: PostData;
  isEditMode: boolean;
  updatePostData: (data: Partial<PostData>) => void;
  setPostData: (data: PostData) => void;
  resetPostData: () => void;
}

const initialPostData: PostData = {
  title: '',
  slug: '',
  excerpt: '',
  category: '',
  tags: [],
  content: null,
  featured: false,
};

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [postData, setPostDataState] = useState<PostData>(initialPostData);

  const isEditMode = useMemo(() => !!postData.id, [postData.id]);

  const updatePostData = useCallback((data: Partial<PostData>) => {
    setPostDataState(prev => ({ ...prev, ...data }));
  }, []);

  const setPostData = useCallback((data: PostData) => {
    setPostDataState(data);
  }, []);

  const resetPostData = useCallback(() => {
    setPostDataState(initialPostData);
  }, []);

  const value = useMemo(
    () => ({ postData, isEditMode, updatePostData, setPostData, resetPostData }),
    [postData, isEditMode, updatePostData, setPostData, resetPostData]
  );

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
};
