import React, { useState, useEffect } from 'react'
import { usePost } from './PostContext'
import { FeaturedImageUpload } from './FeaturedImageUpload'
import { useCategories } from '@/components/admin/hooks/useCategories';

export const ContentData = () => {
  const { postData, updatePostData } = usePost()
  const [currentTag, setCurrentTag] = useState('')
  const { categories, loading: loadingCategories } = useCategories()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Mapear los nombres de campos al formato del backend
    const fieldMap: Record<string, string> = {
      'shortDescription': 'excerpt',
    }
    
    const fieldName = fieldMap[name] || name
    updatePostData({ [fieldName]: value })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    updatePostData({ [name]: checked })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    updatePostData({ [name]: value })
  }

  const handleAddTag = () => {
    if (currentTag.trim() && !postData.tags.includes(currentTag.trim())) {
      updatePostData({ tags: [...postData.tags, currentTag.trim()] })
      setCurrentTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    updatePostData({ tags: postData.tags.filter(tag => tag !== tagToRemove) })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      {/* Left Column */}
      <div className="space-y-6">
        {/* Título */}
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-gray-400 mb-2">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
            placeholder="¿Qué es el derecho administrativo?"
            className="w-full px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition text-gray-100 placeholder-gray-500"
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-sm font-semibold text-gray-400 mb-2">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={postData.slug}
            onChange={handleInputChange}
            placeholder="que-es-el-derecho-administrativo"
            className="w-full px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition text-gray-100 placeholder-gray-500"
          />
        </div>

        {/* Descripción corta */}
        <div>
          <label htmlFor="shortDescription" className="block text-sm font-semibold text-gray-400 mb-2">
            Descripción corta
          </label>
          <textarea
            id="shortDescription"
            name="shortDescription"
            value={postData.excerpt}
            onChange={handleInputChange}
            placeholder="El derecho administrativo regula la Administración Pública y su relación con los ciudadanos"
            rows={3}
            maxLength={160}
            className="w-full px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition resize-none text-gray-100 placeholder-gray-500"
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {postData.excerpt.length} / 160
          </div>
        </div>

        <FeaturedImageUpload />
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* Categoría */}
        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-gray-400 mb-2">
            Categoría
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              value={postData.category}
              onChange={handleSelectChange}
              disabled={loadingCategories}
              className={`w-full px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition appearance-none cursor-pointer ${
                postData.category ? 'text-secondary-light font-medium' : 'text-gray-500'
              }`}
            >
              <option value="" className="bg-[var(--color-primary)]">Selecciona una categoría</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value} className="bg-[var(--color-primary)]">
                  {cat.label}
                </option>
              ))}
            </select>
            {/* Icono de dropdown */}
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Etiquetas */}
        <div>
          <label htmlFor="tags" className="block text-sm font-semibold text-gray-400 mb-2">
            Etiquetas
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="tags"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              placeholder="Derecho administrativo"
              className="flex-1 px-4 py-2 glass border border-white/10 rounded-lg focus:ring-2 focus:ring-secondary-light focus:border-transparent outline-none transition text-gray-100 placeholder-gray-500"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-6 py-2 bg-secondary-light text-primary font-medium rounded-lg hover:brightness-110 transition cursor-pointer"
            >
              AGREGAR
            </button>
          </div>
          
          {/* Tags Display */}
          {postData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {postData.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-gray-200 rounded-md text-sm border border-white/5"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Destacado */}
        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={postData.featured || false}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-secondary-light bg-gray-800 border-gray-600 rounded focus:ring-secondary-light focus:ring-2 cursor-pointer"
            />
            <span className="text-sm font-semibold text-gray-400">
              Destacar este post
            </span>
          </label>
          <p className="text-xs text-gray-500 mt-1 ml-8">
            Los posts destacados aparecerán en la sección principal del blog
          </p>
        </div>
      </div>
    </div>
  )
}
