# 🎯 Pimjo - Task

Your task is to build a fully functional front-end application using Next.js 16 and Tailwind CSS, following the provided Figma design and modern front-end best practices.

### Code Quality Analysis

![avg-maintainability](/generated/avg-maintainability.svg)
![worst-maintainability](/generated/worst-maintainability.svg)

### Lighthouse Score

![Performance](./generated/performance.svg)
![Accessibility](./generated/accessibility.svg)
![Best Practices](./generated/best-practices.svg)
![SEO](./generated/seo.svg)

**Figma Design**: [View Design](https://www.figma.com/design/g5DDrAT6qYIM4eqQm5r6tW/Front-end-developer-assessment)

## 🛠️ Tech Stack

### **Core**

- ⚡ **Next.js 15** - App Router & Server Components
- 🔷 **TypeScript 5.8** - Strict type safety
- ⚛️ **React 19** - Latest features

### **UI & Styling**

- 🎯 **Tailwind CSS** - Utility-first styling
- 🧩 **shadcn/ui** - Radix UI components
- 🎭 **Lucide React** - Icon library

### **Backend & Database**

- 🐘 **Drizzle ORM** - Type-safe database queries
- 🗄️ **PostgreSQL** - Primary database
- 🔐 **better-auth** - Authentication management

### **Development Tools**

- 🎯 **ESLint** - Code linting
- 💅 **Prettier** - Code formatting

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** or Bun
- **PostgreSQL** database
- Git

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd <project-directory>

# 2. Install dependencies
npm install
# or
bun install

# 3. Set up environment variables
cp .env.example .env  # Linux/Mac
copy .env.example .env  # Windows

# 4. Configure your .env file
# Add your DATABASE_URL and other required variables
# Example: DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# 5. Set up the database
npm run db:generate  # Generate migrations
npm run db:migrate   # Apply migrations
npm run db:seed      # Seed with test data (optional)

# 6. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### 🔐 Test the Application

1. **Landing Page**: Navigate to `/` to see the homepage with dynamic menu
2. **Sign In**: Go to `/sign-in` and use test credentials:
   - Email: `hello@demo.com`
   - Password: `demopass123`
3. **Dashboard**: After signing in, you'll be redirected to `/dashboard`

## 📜 Available Scripts

### 🔧 **Development**

```bash
npm run setup        # Quick project setup
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # TypeScript type checking
npm run clean        # Clean build artifacts
```

### 🗄️ **Database**

```bash
npm run db:generate  # Generate database migrations
npm run db:migrate   # Apply database migrations
npm run db:studio    # Open Drizzle Studio
npm run db:seed      # Seed database with sample data
```

### 💅 **Code Quality**

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run knip         # Check for unused code
npm run codehawk     # Analyze code quality
npm run prepare      # Setup Husky hooks
```

### 🪝 **Git Hooks (Husky)**

Pre-commit hooks automatically run on every commit:

- ESLint fixes and checks
- Prettier formatting
- TypeScript type checking
- Only on staged files (fast!)

See [HUSKY_SETUP.md](HUSKY_SETUP.md) for detailed configuration.

<!-- ### 🐳 **Docker**
```bash
npm run docker:build # Build Docker image
npm run docker:dev   # Run development container (Linux/Mac)
scripts/docker-dev.bat # Windows
npm run docker:prod  # Run production container (Linux/Mac)
npm run docker:test  # Run test container (Linux/Mac)

# Windows users can also use:
# scripts/docker-dev.bat  # Run development container (Windows)
``` -->

### 📊 **Analysis**

```bash
npm run analyze      # Analyze bundle size
```

## 🔧 Configuration

### Environment Variables

Required variables in `.env`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# better-auth
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth (Optional)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## 📋 API Endpoints

### ✅ Integrated

```typescript
// Dynamic Menu
GET https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu
// Status: Working in home-navbar.tsx
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `DATABASE_URL`
   - `BETTER_AUTH_SECRET`
   - `BETTER_AUTH_URL`
   - OAuth credentials (optional)
4. Deploy

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [better-auth](https://better-auth.com/) - Authentication
- [Drizzle ORM](https://orm.drizzle.team/) - Database ORM

---
