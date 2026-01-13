import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";
import { sequence } from "astro:middleware";

const isProtectedRoute = createRouteMatcher(['/admin(.*)'])

const clerkAuth = clerkMiddleware((auth, context) => {
  const { userId, has, redirectToSignIn } = auth();
  const isAuthenticated = !!userId;

  if (!isAuthenticated && isProtectedRoute(context.request) && (!has({permission: 'org:admin:example1'}) || !has({permission: 'org:admin:example2'}))) {

    return redirectToSignIn();
    
  }
    
});

const cspMiddleware = async (context: any, next: any) => {
  const response = await next();
  
  // Agregar CSP header permisivo para permitir React hydration
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.admin.nous.cr https://*.clerk.accounts.dev https://challenges.cloudflare.com https://upload-widget.cloudinary.com https://*.cloudinary.com blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https: http:; connect-src 'self' https://blog-api-rrttqa.fly.dev https://*.clerk.accounts.dev https://clerk.admin.nous.cr https://api.cloudinary.com https://upload-widget.cloudinary.com https://*.cloudinary.com wss://*.clerk.accounts.dev; frame-src 'self' https://challenges.cloudflare.com https://*.clerk.accounts.dev https://upload-widget.cloudinary.com https://*.cloudinary.com; worker-src 'self' blob:;"
  );
  
  return response;
};

export const onRequest = sequence(clerkAuth, cspMiddleware);
