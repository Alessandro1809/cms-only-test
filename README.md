# 🚀 Blog Standalone - Modern CMS Platform

<div align="center">

![Astro](https://img.shields.io/badge/Astro-5.14.3-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A premium, production-ready Content Management System built with cutting-edge web technologies**

[Features](#-features) • [Tech Stack](#-technology-stack) • [Installation](#-installation) • [Documentation](#-documentation) • [Architecture](#-architecture)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Blog Standalone** is a modern, full-featured Content Management System designed as a standalone application that can be integrated with any backend API. Built with **Astro** for optimal performance and **React** for rich interactivity, this CMS provides a premium user experience for both content creators and readers.

### Why This Project?

This CMS was architected to solve common problems in content management:

- **🎨 Premium UI/UX**: Glassmorphism design with dynamic gradients and smooth animations
- **🔐 Enterprise Authentication**: Clerk integration with organization-level permissions
- **✍️ Rich Text Editing**: TipTap editor with extensive formatting capabilities
- **📱 Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **⚡ Performance First**: Server-side rendering with Astro for lightning-fast page loads
- **🌐 Edge Deployment**: Optimized for Vercel with global edge network
- **🔌 API-Agnostic**: Works with any RESTful backend API

---

## ✨ Key Features

### 🎨 **Modern Admin Dashboard**

- **Glassmorphic Design**: Beautiful backdrop blur effects with gradient overlays
- **Real-time Statistics**: Track posts, views, and engagement metrics
- **Advanced Filtering**: Search, filter by category, date, and status
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices

### ✍️ **Advanced Rich Text Editor**

Built with **TipTap**, the editor includes:

- **Text Formatting**: Bold, italic, underline, strikethrough, code
- **Headings**: H1 through H6 with proper semantic structure
- **Lists**: Ordered and unordered lists with nesting support
- **Links**: Insert and edit hyperlinks with custom attributes
- **Images**: Upload via Cloudinary with drag-and-drop support
- **YouTube Embeds**: Direct video embedding with URL
- **Text Alignment**: Left, center, right, and justify
- **Code Blocks**: Syntax highlighting for code snippets
- **Blockquotes**: Styled quote blocks
- **Horizontal Rules**: Visual content separators
- **Custom Font Sizes**: Granular typography control
- **Undo/Redo**: Full history management

### 🖼️ **Media Management**

- **Cloudinary Integration**: Professional cloud-based image hosting
- **Upload Widget**: Intuitive drag-and-drop interface
- **Multiple Sources**: Upload from local, URL, or camera
- **Automatic Optimization**: Images optimized for web delivery
- **Folder Organization**: Structured media library

### 🔐 **Authentication & Security**

- **Clerk Authentication**: Enterprise-grade auth with social logins
- **Organization Support**: Multi-tenant architecture ready
- **Role-Based Access**: Permission-based route protection
- **Secure Sessions**: JWT-based authentication
- **Protected Routes**: Middleware-level security

### 📊 **Content Management**

- **Post Categories**: 10 predefined categories with Spanish labels
  - Artículos (Articles)
  - Tutoriales (Tutorials)
  - Experiencia Laboral (Work Experience)
  - Anécdotas (Anecdotes)
  - Proyectos (Projects)
  - Dev & Enjoy
  - Opinión (Opinion)
  - Recursos (Resources)
  - Carrera Dev (Dev Career)
  - IA y Desarrollo (AI & Development)
- **Post Status**: Draft and Published states
- **Tags System**: Flexible tagging for content organization
- **SEO Optimization**: Meta descriptions and excerpts
- **View Tracking**: Built-in analytics integration

### 🌐 **Public Blog Interface**

- **Dynamic Routing**: SEO-friendly URL slugs
- **Category Filtering**: Browse posts by category
- **Search Functionality**: Full-text search across posts
- **Related Posts**: Automatic content recommendations
- **Pagination**: Efficient content loading
- **Responsive Design**: Mobile-optimized reading experience

---

## 🛠️ Technology Stack

### **Core Framework**

- **[Astro 5.14.3](https://astro.build/)** - Modern static site builder with SSR
  - Server-side rendering for dynamic content
  - Islands architecture for optimal performance
  - Built-in TypeScript support

### **Frontend**

- **[React 19.2.0](https://react.dev/)** - UI component library
  - Latest concurrent features
  - Automatic batching
  - Improved hydration
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4.1.14](https://tailwindcss.com/)** - Utility-first CSS framework
  - Custom design system
  - Responsive utilities
  - Dark mode support

### **Rich Text Editor**

- **[TipTap 3.8.0](https://tiptap.dev/)** - Headless editor framework
  - `@tiptap/core` - Core editor functionality
  - `@tiptap/react` - React integration
  - `@tiptap/starter-kit` - Essential extensions
  - `@tiptap/extension-image` - Image support
  - `@tiptap/extension-link` - Hyperlink functionality
  - `@tiptap/extension-youtube` - Video embeds
  - `@tiptap/extension-text-align` - Alignment controls
  - `@tiptap/extension-text-style` - Custom styling
  - `@tiptap/extension-underline` - Underline formatting
  - `@tiptap/extension-placeholder` - Input placeholders

### **Authentication**

- **[Clerk 2.14.0](https://clerk.com/)** - Complete authentication solution
  - Social login providers
  - Organization management
  - User management dashboard
  - Customizable UI components

### **Media Management**

- **[Cloudinary](https://cloudinary.com/)** - Cloud-based media platform
  - Image optimization
  - CDN delivery
  - Upload widget integration

### **Deployment**

- **[Vercel](https://vercel.com/)** - Edge deployment platform
  - Global edge network
  - Automatic HTTPS
  - Serverless functions
  - Zero-config deployments
  - Built-in analytics

### **UI Components & Utilities**

- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Class Variance Authority](https://cva.style/)** - Component variants
- **[clsx](https://github.com/lukeed/clsx)** - Conditional classNames
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[tw-animate-css](https://github.com/ben-rogerson/twin.macro)** - Animation utilities

---

## 🏗️ Architecture

### **Application Architecture**

```
┌─────────────────────────────────────────────────────────┐
│                      Vercel Edge                         │
│                    (Edge Network)                        │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                  Astro SSR Server                        │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Middleware Layer                    │   │
│  │  • Clerk Authentication                          │   │
│  │  • Route Protection                              │   │
│  │  • Permission Checks                             │   │
│  └──────────────────┬───────────────────────────────┘   │
│                     │                                    │
│  ┌──────────────────▼───────────────────────────────┐   │
│  │              Route Handlers                      │   │
│  │  • /admin/* (Protected)                          │   │
│  │  • /blog/* (Public)                              │   │
│  │  • / (Login)                                     │   │
│  └──────────────────┬───────────────────────────────┘   │
└────────────────────┬┴───────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
┌───────▼────────┐      ┌─────────▼────────┐
│  Admin Panel   │      │   Public Blog    │
│  (React)       │      │   (Astro)        │
│                │      │                  │
│  • Dashboard   │      │  • Post List     │
│  • Editor      │      │  • Post Detail   │
│  • Post List   │      │  • Categories    │
└───────┬────────┘      └─────────┬────────┘
        │                         │
        └────────────┬────────────┘
                     │
        ┌────────────▼────────────┐
        │                         │
┌───────▼────────┐      ┌─────────▼────────┐
│   Backend API  │      │   Cloudinary     │
│   (External)   │      │   (Media CDN)    │
│                │      │                  │
│  • Posts CRUD  │      │  • Image Upload  │
│  • Categories  │      │  • Optimization  │
│  • Analytics   │      │  • Delivery      │
└────────────────┘      └──────────────────┘
```

### **Component Architecture**

The application follows a modular component structure:

#### **Admin Components** (`src/components/admin/`)

- **Dashboard**: Analytics and overview components
- **Editor**: TipTap-based rich text editor with toolbar
- **Posts**: Post management (create, edit, delete)
- **Layout**: Admin shell (header, footer, navigation)
- **Hooks**: Custom React hooks for data fetching and state management

#### **Web Components** (`src/components/web/`)

- **Blog**: Public-facing blog components
- **Layout**: Public site shell

#### **UI Components** (`src/components/ui/`)

- Reusable UI primitives built with Tailwind CSS
- Follows atomic design principles

### **Data Flow**

```
User Action → React Component → Custom Hook → API Client → Backend API
                                                    ↓
                                              Response Data
                                                    ↓
                                            State Update
                                                    ↓
                                            UI Re-render
```

### **Authentication Flow**

```
1. User visits protected route (/admin/*)
2. Middleware intercepts request
3. Clerk validates session
4. If authenticated → Allow access
5. If not authenticated → Redirect to login (/)
6. After login → Redirect to /admin
```

---

## 📁 Project Structure

```
blog-standalone/
├── .astro/                      # Astro build cache
├── .vercel/                     # Vercel build cache
├── node_modules/                # Dependencies
├── public/                      # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/                  # Project assets
│   │   └── orgs/               # Organization logos
│   ├── components/
│   │   ├── admin/              # Admin panel components
│   │   │   ├── dashboard/      # Dashboard widgets
│   │   │   │   ├── react/      # React components
│   │   │   │   │   ├── PostsList.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── BlogDashboard.astro
│   │   │   │   └── DashboardHeader.astro
│   │   │   ├── editor/         # Rich text editor
│   │   │   │   ├── Editor/     # Main editor component
│   │   │   │   ├── Extensions/ # Custom TipTap extensions
│   │   │   │   │   └── FontSizeExtension.ts
│   │   │   │   ├── Hooks/      # Editor hooks
│   │   │   │   │   └── useEditorConfig.ts
│   │   │   │   ├── Toolbar/    # Editor toolbar
│   │   │   │   │   ├── AlignmentButtons.tsx
│   │   │   │   │   ├── FontSizeSelector.tsx
│   │   │   │   │   ├── FormatButtons.tsx
│   │   │   │   │   ├── HeadingSelector.tsx
│   │   │   │   │   ├── ImageButton.tsx
│   │   │   │   │   ├── LinkButton.tsx
│   │   │   │   │   └── YouTubeButton.tsx
│   │   │   │   ├── Utils/      # Editor utilities
│   │   │   │   │   ├── editorConstants.ts
│   │   │   │   │   └── editorHelpers.ts
│   │   │   │   └── index.ts
│   │   │   ├── hooks/          # Admin hooks
│   │   │   │   ├── useCategories.ts
│   │   │   │   ├── useDebounce.ts
│   │   │   │   ├── useFilters.ts
│   │   │   │   └── usePosts.ts
│   │   │   ├── layout/         # Admin layout
│   │   │   │   ├── AdminFooter.astro
│   │   │   │   └── AdminHeader.astro
│   │   │   ├── posts/          # Post management
│   │   │   │   ├── hooks/
│   │   │   │   │   ├── useCloudinaryUpload.ts
│   │   │   │   │   ├── useLoadPost.ts
│   │   │   │   │   ├── usePostActions.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── contentFormatter.ts
│   │   │   │   └── contentParser.ts
│   │   │   └── types/          # TypeScript types
│   │   │       └── post.ts
│   │   ├── ui/                 # Reusable UI components
│   │   └── web/                # Public website components
│   │       ├── blog/           # Blog components
│   │       │   └── types.ts
│   │       └── layout/         # Public layout
│   ├── layouts/                # Page layouts
│   │   ├── AdminLayout.astro   # Admin panel layout
│   │   └── Layout.astro        # Public site layout
│   ├── lib/                    # Utility libraries
│   │   ├── api/
│   │   │   └── posts.ts        # API client for posts
│   │   ├── categoryLabels.ts   # Category definitions
│   │   ├── cloudinary.ts       # Cloudinary config
│   │   └── utils.ts            # Helper functions
│   ├── pages/                  # Route pages
│   │   ├── admin/              # Admin routes
│   │   │   ├── dashboard.astro
│   │   │   └── index.astro
│   │   ├── blog/               # Blog routes
│   │   │   ├── [slug].astro    # Dynamic post page
│   │   │   └── index.astro     # Blog listing
│   │   └── index.astro         # Login page
│   ├── styles/
│   │   └── global.css          # Global styles
│   └── middleware.ts           # Auth middleware
├── .env                        # Environment variables (gitignored)
├── .env.example                # Environment template
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies
├── pnpm-lock.yaml              # Lock file
├── tsconfig.json               # TypeScript config
└── README.md                   # This file
```

---

## 🚀 Installation

### **Prerequisites**

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.0.0 (LTS recommended)
- **pnpm** >= 8.0.0 (or npm/yarn)
- **Git**

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/yourusername/blog-standalone.git
cd blog-standalone
```

### **Step 2: Install Dependencies**

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

### **Step 3: Configure Environment Variables**

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and fill in your credentials (see [Configuration](#-configuration) section).

### **Step 4: Start Development Server**

```bash
pnpm dev
```

The application will be available at `http://localhost:4321`

---

## ⚙️ Configuration

### **Environment Variables**

Create a `.env` file in the root directory with the following variables:

```bash
# Backend API Configuration
# URL of your backend API that handles posts, categories, etc.
PUBLIC_API_URL=http://localhost:3000/api/v1

# Clerk Authentication
# Get these from https://dashboard.clerk.com
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Cloudinary Configuration
# Get these from https://cloudinary.com/console
PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### **Clerk Setup**

1. **Create a Clerk Account**
   - Visit [clerk.com](https://clerk.com)
   - Sign up for a free account

2. **Create an Application**
   - Click "Add application"
   - Choose authentication methods (Email, Google, GitHub, etc.)
   - Copy your API keys

3. **Configure Allowed Redirects**
   - Go to "Paths" in Clerk dashboard
   - Add your development URL: `http://localhost:4321`
   - Add your production URL after deployment

4. **Organization Setup (Optional)**
   - Enable organizations in Clerk dashboard
   - Configure organization permissions
   - Update middleware.ts with your permission keys

### **Cloudinary Setup**

1. **Create a Cloudinary Account**
   - Visit [cloudinary.com](https://cloudinary.com)
   - Sign up for a free account

2. **Get Your Cloud Name**
   - Found in your dashboard
   - Add to `PUBLIC_CLOUDINARY_CLOUD_NAME`

3. **Create Upload Preset**
   - Go to Settings → Upload
   - Click "Add upload preset"
   - Set signing mode to "Unsigned"
   - Configure folder structure (optional)
   - Copy preset name to `PUBLIC_CLOUDINARY_UPLOAD_PRESET`

### **Backend API Requirements**

Your backend API should implement the following endpoints:

#### **Posts Endpoints**

```
GET    /api/v1/posts              # List posts with filters
GET    /api/v1/posts/:id          # Get single post
POST   /api/v1/posts              # Create post
PUT    /api/v1/posts/:id          # Update post
DELETE /api/v1/posts/:id          # Delete post
```

#### **Categories Endpoint**

```
GET    /api/v1/categories         # List all categories
```

#### **Expected Data Structures**

**Post Object:**
```typescript
{
  id: string;
  title: string;
  content: string;          // HTML content from editor
  excerpt: string;
  categorie: string;        // Category value
  status: 'PUBLISHED' | 'DRAFT';
  createdAt: string;        // ISO 8601 date
  updatedAt: string;        // ISO 8601 date
  tags: string[];
  views: number;
}
```

**Posts Response:**
```typescript
{
  posts: Post[];
  total: number;
  limit: number;
  offset: number;
}
```

**Category Object:**
```typescript
{
  value: string;            // e.g., 'TUTORIALES'
  label: string;            // e.g., 'Tutoriales'
}
```

---

## 💻 Usage

### **Accessing the Admin Panel**

1. Navigate to `http://localhost:4321`
2. Sign in with Clerk (create an account if needed)
3. You'll be redirected to `/admin` dashboard

### **Creating a New Post**

1. Click "Nuevo Post" in the admin dashboard
2. Fill in the post details:
   - **Title**: Post title
   - **Excerpt**: Short description (for SEO and previews)
   - **Category**: Select from dropdown
   - **Tags**: Add relevant tags
   - **Content**: Use the rich text editor
3. Use the toolbar to format your content:
   - Text formatting (bold, italic, etc.)
   - Headings and lists
   - Insert images via Cloudinary
   - Embed YouTube videos
   - Add links
4. Save as draft or publish immediately

### **Managing Posts**

- **Filter Posts**: Use search, category, date, and status filters
- **Edit Post**: Click on any post to edit
- **Delete Post**: Click delete icon (requires confirmation)
- **Change Status**: Toggle between draft and published

### **Viewing the Public Blog**

Navigate to `/blog` to see the public-facing blog interface with all published posts.

---

## 🔌 API Integration

### **API Client**

The application includes a robust API client (`src/lib/api/posts.ts`) with the following functions:

#### **fetchPublishedPosts**

Fetch paginated published posts with optional filters.

```typescript
import { fetchPublishedPosts } from '@/lib/api/posts';

const { posts, total } = await fetchPublishedPosts(
  10,                    // limit
  0,                     // offset
  'search term',         // search (optional)
  'TUTORIALES',         // category (optional)
  'newest'              // order (optional)
);
```

#### **fetchPostBySlug**

Get a single post by its ID/slug.

```typescript
import { fetchPostBySlug } from '@/lib/api/posts';

const post = await fetchPostBySlug('post-id-123');
```

#### **fetchRelatedPosts**

Get related posts from the same category.

```typescript
import { fetchRelatedPosts } from '@/lib/api/posts';

const related = await fetchRelatedPosts(
  'current-post-id',
  'TUTORIALES',
  3                      // limit
);
```

#### **fetchCategories**

Get all available categories.

```typescript
import { fetchCategories } from '@/lib/api/posts';

const categories = await fetchCategories();
```

#### **fetchNextPost**

Get the next post in chronological order.

```typescript
import { fetchNextPost } from '@/lib/api/posts';

const nextPost = await fetchNextPost('current-post-id');
```

### **Custom Hooks**

React hooks for data management in admin components:

#### **usePosts**

```typescript
import { usePosts } from '@/components/admin/hooks/usePosts';

const { posts, loading, error, refetch } = usePosts(filters);
```

#### **useCategories**

```typescript
import { useCategories } from '@/components/admin/hooks/useCategories';

const { categories, loading } = useCategories();
```

#### **usePostActions**

```typescript
import { usePostActions } from '@/components/admin/posts/hooks/usePostActions';

const { createPost, updatePost, deletePost } = usePostActions();
```

#### **useCloudinaryUpload**

```typescript
import { useCloudinaryUpload } from '@/components/admin/posts/hooks/useCloudinaryUpload';

const { openUploadWidget } = useCloudinaryUpload({
  onSuccess: (result) => {
    console.log('Uploaded:', result.secure_url);
  },
  folder: 'blog',
  multiple: false
});
```

---

## 🌐 Deployment

### **Deploying to Vercel (Recommended)**

#### **Method 1: Git Integration (Recommended)**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Log in to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select `blog-standalone`

3. **Configure Build Settings**
   - **Framework preset**: Astro (auto-detected)
   - **Build command**: `pnpm build` (auto-detected)
   - **Output directory**: `dist` (auto-detected)
   - **Node version**: 18.x or higher

4. **Add Environment Variables**
   - Add all variables from your `.env` file
   - Make sure to use production values for Clerk and API URLs
   - Variables to add:
     - `PUBLIC_API_URL`
     - `PUBLIC_CLERK_PUBLISHABLE_KEY`
     - `CLERK_SECRET_KEY`
     - `PUBLIC_CLOUDINARY_CLOUD_NAME`
     - `PUBLIC_CLOUDINARY_UPLOAD_PRESET`

5. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - Every push to main will trigger automatic deployment

#### **Method 2: Vercel CLI**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### **Deploying to Other Platforms**

#### **Cloudflare Pages**

If you prefer Cloudflare, you'll need to change the adapter:

```bash
# Remove Vercel adapter
pnpm remove @astrojs/vercel

# Install Cloudflare adapter
pnpm add @astrojs/cloudflare
```

Then update `astro.config.mjs`:
```javascript
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // ... other config
  adapter: cloudflare()
});
```

Deploy via Git integration or Wrangler CLI.

#### **Netlify**

```bash
# Install Netlify adapter
pnpm add @astrojs/netlify

# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

Update `astro.config.mjs` to use the Netlify adapter.

### **Post-Deployment Checklist**

- [ ] Update Clerk allowed redirect URLs
- [ ] Verify environment variables are set
- [ ] Test authentication flow
- [ ] Verify API connectivity
- [ ] Test image uploads to Cloudinary
- [ ] Check responsive design on mobile
- [ ] Verify SEO meta tags
- [ ] Test all CRUD operations

---

## 🔧 Development

### **Available Scripts**

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm astro check
```

### **Development Workflow**

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add TypeScript types for new code
   - Keep components small and focused

3. **Test your changes**
   - Test in development mode
   - Build and test production build
   - Test on different screen sizes

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   git push origin feature/your-feature-name
   ```

### **Code Style Guidelines**

- **TypeScript**: Use strict typing, avoid `any`
- **Components**: One component per file
- **Naming**: 
  - Components: PascalCase (`PostEditor.tsx`)
  - Utilities: camelCase (`formatDate.ts`)
  - Constants: UPPER_SNAKE_CASE (`API_URL`)
- **Imports**: Use path aliases (`@/components/...`)
- **CSS**: Use Tailwind utilities, avoid custom CSS when possible

### **Adding New Categories**

Edit `src/lib/categoryLabels.ts`:

```typescript
export const CATEGORIES = [
  'ARTICULOS',
  'TUTORIALES',
  'YOUR_NEW_CATEGORY',  // Add here
  // ...
] as const;

export const CATEGORY_LABELS: Record<string, string> = {
  'ARTICULOS': 'Artículos',
  'TUTORIALES': 'Tutoriales',
  'YOUR_NEW_CATEGORY': 'Your Label',  // Add here
  // ...
};
```

### **Customizing the Editor**

The TipTap editor can be extended with custom functionality:

1. **Add Extensions**: Create new files in `src/components/admin/editor/Extensions/`
2. **Add Toolbar Buttons**: Create new components in `src/components/admin/editor/Toolbar/`
3. **Update Config**: Modify `src/components/admin/editor/Hooks/useEditorConfig.ts`

### **Styling Customization**

Global styles are in `src/styles/global.css`. The project uses:

- **CSS Variables**: For theme colors
- **Tailwind Utilities**: For component styling
- **Custom Classes**: For complex animations and effects

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### **How to Contribute**

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### **Pull Request Guidelines**

- Provide a clear description of the changes
- Include screenshots for UI changes
- Ensure all tests pass
- Update documentation if needed
- Follow the existing code style

### **Reporting Bugs**

When reporting bugs, please include:

- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)

### **Feature Requests**

We love feature requests! Please provide:

- Clear description of the feature
- Use case and benefits
- Possible implementation approach
- Any relevant examples or mockups

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **[Astro](https://astro.build/)** - For the amazing framework
- **[Clerk](https://clerk.com/)** - For authentication made easy
- **[TipTap](https://tiptap.dev/)** - For the powerful editor
- **[Cloudinary](https://cloudinary.com/)** - For media management
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS

---

## 📞 Support

If you have questions or need help:

- **Issues**: [GitHub Issues](https://github.com/yourusername/blog-standalone/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/blog-standalone/discussions)

---

<div align="center">

**Built with ❤️ using modern web technologies**

⭐ Star this repo if you find it helpful!

</div>
