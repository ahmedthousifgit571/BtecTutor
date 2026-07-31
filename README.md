# BTechTutor

Kerala's premier coaching institute platform for **GATE** and **KTU** exam preparation. Built with Next.js 14, featuring a content-rich public site, an admin dashboard, and a PostgreSQL-backed data layer.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Running the Dev Server](#running-the-dev-server)
- [Available Scripts](#available-scripts)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [License](#license)

---

## Features

### Public Site

- **Hero & Landing Sections** — animated hero, stats marquee, "Why Us", testimonials, FAQ, and lead-capture form
- **GATE Coaching Pages** — branch-level (ECE, EEE, Instrumentation) and subject-level pages with syllabus, PYQs, mock tests, and video links
- **KTU Subject Pages** — scheme-aware (2019 / 2024) department and subject pages
- **Blog** — CMS-driven blog with SEO metadata and dynamic slugs
- **Location Pages** — city-specific SEO landing pages (Kochi, Trivandrum, Calicut, etc.)
- **Reviews & Testimonials** — moderated student reviews with rating system
- **Faculty Profiles** — dedicated faculty listing page
- **Contact / Enquiry** — lead form that stores enquiries in the DB and sends email via Resend
- **SEO** — dynamic `sitemap.xml`, `robots.txt`, OpenGraph, JSON-LD organization schema

### Admin Dashboard

- Manage **blog posts**, **enquiries**, **reviews**, and **content**
- Protected admin routes under `/admin`

### Technical Highlights

- **Smooth scrolling** via Lenis
- **Animations** with GSAP and Framer Motion
- **Fluid typography** using Tailwind CSS `clamp()` utilities
- **Scroll progress bar** and sticky CTA
- **Optimized images** (AVIF/WebP) from Supabase storage

---

## Tech Stack

| Layer         | Technology                                      |
| ------------- | ----------------------------------------------- |
| Framework     | Next.js 14 (App Router)                         |
| Language      | TypeScript                                      |
| Styling       | Tailwind CSS, `clsx`, `tailwind-merge`          |
| Animation     | GSAP, Framer Motion, Lenis (smooth scroll)      |
| Database      | PostgreSQL via Prisma ORM                        |
| Auth          | NextAuth (secret-based)                          |
| Email         | Resend                                           |
| Storage       | Supabase (remote images)                         |
| Icons         | Lucide React                                     |
| Fonts         | Inter, Poppins (Google Fonts via `next/font`)    |
| Linting       | ESLint, Prettier                                 |

---

## Project Structure

```
BtecTutor/
├── prisma/
│   ├── migrations/        # Prisma migration files
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Seed script (GATE, KTU, blog, reviews, etc.)
├── public/                # Static assets (logo, images)
├── src/
│   ├── app/
│   │   ├── (admin)/       # Admin dashboard routes
│   │   ├── (public)/      # Public-facing pages
│   │   ├── api/           # API routes (enquiry, revalidate)
│   │   ├── layout.tsx     # Root layout
│   │   ├── robots.ts      # Dynamic robots.txt
│   │   └── sitemap.ts     # Dynamic sitemap.xml
│   ├── assets/            # Static imported assets
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, StickyCTA
│   │   ├── providers/     # LenisProvider, etc.
│   │   ├── sections/      # Landing page sections (Hero, CourseGrid, …)
│   │   └── ui/            # Reusable UI components
│   └── lib/
│       ├── content/       # Static content files (how-it-works, CTA, etc.)
│       ├── constants.ts
│       ├── gsap-utils.ts
│       ├── prisma.ts      # Prisma client singleton
│       ├── seo.ts         # SEO helpers (JSON-LD builders)
│       └── utils.ts
├── .env.example           # Required environment variables
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or pnpm/yarn)
- **PostgreSQL** database (local or hosted — e.g. Supabase)

### Installation

```bash
git clone https://github.com/<your-username>/BtecTutor.git
cd BtecTutor
npm install
```

### Environment Variables

Copy the example file and fill in the values:

```bash
cp .env.example .env
```

| Variable                        | Description                          |
| ------------------------------- | ------------------------------------ |
| `DATABASE_URL`                  | Prisma connection string (pooled)    |
| `DIRECT_URL`                    | Direct Postgres connection URL       |
| `NEXT_PUBLIC_SITE_URL`          | Production site URL                  |
| `NEXT_PUBLIC_SITE_NAME`         | Site display name                    |
| `NEXT_PUBLIC_SUPABASE_URL`      | Supabase project URL                 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key             |
| `RESEND_API_KEY`                | Resend API key for transactional email |
| `RESEND_FROM_EMAIL`             | Sender email address                 |
| `NEXTAUTH_SECRET`               | NextAuth secret                      |
| `NEXTAUTH_URL`                  | NextAuth callback URL                |
| `REVALIDATION_SECRET`           | Secret for on-demand ISR revalidation |

### Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npm run db:migrate

# Seed with sample data
npm run db:seed

# (Optional) Open Prisma Studio
npm run db:studio
```

### Running the Dev Server

```bash
npm run dev
```

The app will be available at **http://localhost:3000**.

---

## Available Scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start the Next.js development server     |
| `npm run build`    | Create an optimized production build     |
| `npm run start`    | Serve the production build               |
| `npm run lint`     | Run ESLint                               |
| `npm run db:migrate` | Run Prisma migrations                  |
| `npm run db:seed`  | Seed the database with sample data       |
| `npm run db:studio`| Open Prisma Studio GUI                   |

---

## Database Schema

The Prisma schema defines the following models:

- **Course** — GATE branches & KTU departments (with scheme, branch, department)
- **Subject** — individual subjects linked to a course (syllabus, PYQs, FAQs, video links)
- **MockTest** — timed mock tests linked to a subject
- **BlogPost** — JSON-content blog entries with SEO fields
- **LocationPage** — city-specific SEO landing pages
- **Review** — student reviews with moderation (`approved` flag)
- **Enquiry** — contact form submissions
- **Faculty** — faculty profiles
- **Admin** — admin users with hashed passwords and roles

---

## Deployment

This is a standard Next.js 14 application. Deploy to any Node.js-compatible host:

1. **Vercel** (recommended) — connect the repo and set environment variables
2. **Netlify** — use the Next.js runtime adapter
3. **Self-hosted** — `npm run build && npm run start`

Ensure the production PostgreSQL database is accessible and migrations are applied before the first deploy.

---

## License

This project is proprietary. All rights reserved.
