# Migrating from React to Next.js

This document provides instructions for migrating the Discussion With The Changemakers (DWC) website from a Vite-based React application to Next.js for improved SEO and performance.

## Why Next.js?

Next.js offers several advantages for the DWC website:

1. **Improved SEO**: Server-side rendering and static site generation capabilities
2. **Built-in Image Optimization**: Automatic image optimization
3. **Improved Performance**: Automatic code splitting and optimized loading
4. **API Routes**: Serverless functions without additional configuration
5. **Enhanced Developer Experience**: File-based routing and built-in TypeScript support

## Migration Steps

### 1. Install Next.js and Required Dependencies

First, rename your current package.json to package.json.old and use the new Next.js package.json:

```bash
mv package.json package.json.old
mv package.json.next package.json
```

Then install the dependencies:

```bash
npm install
```

### 2. Update Project Structure

The Next.js app uses the App Router structure:

- `/src/app/`: Contains page components and layout files
- `/src/app/page.js`: Homepage
- `/src/app/layout.js`: Root layout component
- `/src/components/`: Reusable components

### 3. Migrating Components

1. Replace React Router with Next.js routing:

   - Use the new `Link` component from `/src/components/common/Link.js` instead of React Router's Link
   - Pages are now defined in the `/src/app/` directory

2. Replace SEO components:

   - Use Next.js metadata API in page files
   - For dynamic content, use the new `NextSEO` component

3. Update Structured Data:

   - Use the new `NextStructuredData` component or inline script tags

4. Client vs Server Components:

   - In Next.js App Router, all components are Server Components by default
   - Components using hooks (`useState`, `useEffect`, etc.) or browser APIs must be marked with `"use client"` directive at the top of the file
   - We've added this directive to:
     - `BackToTop.jsx`
     - `Modal.jsx`
     - `ScrollAnimation.jsx`
     - `Hero.jsx`
     - `NextNavbar.jsx`
   - We've created a `ClientProvider` component to manage client-side components

5. Image Handling:
   - Move images from `/src/assets/` to `/public/images/`
   - Update image imports to use relative paths (e.g., `/images/logo.png`)
   - For optimized images, use Next.js `Image` component

### 4. Configuration Files

- `next.config.js`: Next.js configuration
- `vercel.json`: Updated for Next.js deployment
- `.npmrc`: Updated with necessary flags for React 19 compatibility

### 5. SEO Enhancements

The migration includes several SEO enhancements:

- Automatic sitemap generation (`/src/app/sitemap.js`)
- Robots.txt generation (`/src/app/robots.js`)
- Structured data implementation
- Metadata API usage
- Security headers in middleware

### 6. Deployment

Deploy to Vercel with:

```bash
vercel
```

Or for production:

```bash
vercel --prod
```

## Troubleshooting

### React 19 Compatibility

If you encounter issues with React 19 compatibility:

1. Ensure the `.npmrc` file contains:

   ```
   legacy-peer-deps=true
   strict-peer-dependencies=false
   node-linker=hoisted
   ```

2. Check for incompatible dependencies and consider alternatives:
   - Replace `react-helmet-async` with Next.js metadata API
   - Replace `react-router-dom` with Next.js routing

### Client Component Errors

If you see errors like: "You're importing a component that needs useEffect. It only works in a Client Component but none of its parents are marked with 'use client'":

1. Add the `"use client"` directive at the top of any component that uses:

   - React hooks (`useState`, `useEffect`, `useRef`, etc.)
   - Browser APIs (`window`, `document`, `localStorage`, etc.)
   - Event listeners
   - Third-party libraries that use the above

2. Common components that need the directive:

   - Components with animations or transitions
   - Form components with state
   - Components that interact with the DOM
   - Components using browser-specific features

3. Use the ClientProvider pattern:
   - Create a wrapper component with `"use client"` directive
   - Place client-side components inside this wrapper
   - This keeps server components as the default

### Build Errors

If you encounter build errors:

1. Check the Next.js console output for specific errors
2. Ensure all components are properly migrated to work with Next.js
3. Verify that all imports use the correct paths
4. Make sure static assets are in the `/public` directory

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)
