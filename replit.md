# The Charcoal Diner - Restaurant Website

## Overview

This is a static demo website for "The Charcoal Diner," a fictional premium Indian restaurant. The application is built using a modern full-stack architecture with React/TypeScript frontend, Express.js backend, and PostgreSQL database support. The project is designed to showcase high-quality design and presentation for a restaurant website with features like menu display, contact information, and customer testimonials.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESNext modules
- **Development**: Hot reloading with Vite integration
- **Middleware**: Express JSON parsing and custom logging middleware

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Located in `shared/schema.ts` for shared types between frontend and backend
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Frontend Components
1. **Navigation**: Sticky navigation with smooth scrolling
2. **Hero Section**: Full-screen hero with restaurant branding
3. **Menu Section**: Interactive menu with category filtering
4. **About Section**: Restaurant story and statistics
5. **Testimonials**: Customer review cards
6. **Contact Section**: Contact information and location details
7. **Footer**: Links and social media integration

### Backend Structure
- **Routes**: API routes handler in `server/routes.ts`
- **Storage**: Abstracted storage interface with in-memory implementation
- **Server**: Express server with development/production configurations

### Shared Schema
- **User Model**: Basic user schema with username/password
- **Type Safety**: Zod schemas for validation
- **Database Types**: Inferred types from Drizzle schema

## Data Flow

1. **Static Content**: Restaurant information, menu items, and images are hardcoded
2. **Client-Side Routing**: Single-page application with hash-based navigation
3. **Smooth Scrolling**: JavaScript-based smooth scrolling between sections
4. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
5. **SEO Optimization**: Meta tags, JSON-LD structured data, and Open Graph tags

## External Dependencies

### Core Dependencies
- **UI Framework**: React with React DOM
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Database**: Drizzle ORM with PostgreSQL adapter

### Development Tools
- **Build**: Vite with TypeScript support
- **Hot Reload**: Vite development server
- **Type Checking**: TypeScript compiler
- **Database Tools**: Drizzle Kit for migrations

### SEO and Performance
- **Schema Markup**: JSON-LD structured data for restaurants
- **Meta Tags**: Comprehensive meta tags for social sharing
- **Performance**: Optimized images from Unsplash CDN
- **Accessibility**: Semantic HTML and ARIA labels

## Deployment Strategy

### Development
- **Command**: `npm run dev` starts the development server
- **Hot Reload**: Vite provides instant updates during development
- **Type Checking**: TypeScript compilation on file changes

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: ESBuild bundles the server code
- **Output**: `dist/` directory contains both frontend and backend builds

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: NODE_ENV=development for development features
- **Production**: NODE_ENV=production for optimized builds

### Static Assets
- **Images**: External CDN (Unsplash) for food photography
- **Fonts**: Google Fonts for typography (Inter, Poppins, DM Sans)
- **Icons**: Lucide React for scalable vector icons

The application follows modern web development practices with a focus on performance, accessibility, and SEO optimization for a restaurant website.