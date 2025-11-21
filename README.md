# 🎯 Front-End Developer Assessment (FED-11/25)

A full-stack application featuring authentication, dynamic content management, and user dashboard built with Next.js 15, TypeScript, and modern web technologies.

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
- 🧪 **Vitest** - Unit testing
- 🎭 **Playwright** - E2E testing

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

### 🧪 **Testing**
```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
npm run test:e2e     # Run E2E tests
npm run test:e2e:ui  # Run E2E tests with UI
```

### 💅 **Code Quality**
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run knip         # Check for unused code
npm run codehawk     # Analyze code quality
```

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

### 📚 **Storybook**
```bash
npm run storybook       # Start Storybook dev server
npm run build-storybook # Build Storybook for production
```

### 📊 **Analysis**
```bash
npm run analyze      # Analyze bundle size
```

## 📁 Project Structure

```
├── .kiro/                    # Kiro AI assistant configuration
├── public/                   # Static assets
├── src/
│   ├── app/
│   │   ├── (auth)/          # Authentication routes
│   │   │   ├── sign-in/     ✅ Implemented
│   │   │   └── sign-up/     ⏳ In Progress
│   │   ├── dashboard/       🚧 Needs API integration
│   │   ├── api/auth/        ✅ better-auth routes
│   │   └── page.tsx         ✅ Landing page
│   ├── components/
│   │   ├── auth/            ✅ Auth form components
│   │   ├── shared/          ✅ Shared components (navbar, etc.)
│   │   └── ui/              ✅ shadcn/ui components
│   ├── feature/
│   │   ├── auth/            ✅ Auth feature components
│   │   ├── dashboard/       🚧 Dashboard features
│   │   └── homepage/        ✅ Landing page sections
│   ├── hooks/               🚧 Custom React hooks
│   ├── lib/                 ✅ Utilities & auth config
│   ├── db/                  ✅ Database schema & config
│   ├── types/               ⏳ TypeScript definitions
│   └── middleware.ts        ✅ Route protection
└── tests/                   # E2E and integration tests
```

### Key Files
- `src/middleware.ts` - Route protection and authentication guards
- `src/lib/auth.ts` - better-auth server configuration
- `src/lib/auth-client.ts` - Client-side auth utilities
- `src/components/shared/home-navbar.tsx` - Dynamic menu implementation
- `src/feature/dashboard/user-table.tsx` - User table (needs API integration)

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

### Database Setup

1. Create a PostgreSQL database
2. Add `DATABASE_URL` to `.env`
3. Run migrations:
   ```bash
   npm run db:generate
   npm run db:migrate
   ```
4. Seed test data (includes test user):
   ```bash
   npm run db:seed
   ```

### Authentication Setup

The project uses **better-auth** with:
- Email/password authentication
- GitHub OAuth (optional)
- Google OAuth (optional)
- Session-based authentication
- Middleware route protection 

## 📋 API Endpoints

### ✅ Integrated
```typescript
// Dynamic Menu
GET https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu
// Status: Working in home-navbar.tsx
```

### ⏳ Pending Integration
```typescript
// Users List
GET https://69102d7545e65ab24ac5d435.mockapi.io/users
// Needed for: Dashboard user table

// Delete User
DELETE https://69102d7545e65ab24ac5d435.mockapi.io/users/:id
// Needed for: Delete user functionality
```

## 🎯 Development Roadmap

### Phase 1: Critical Features (Current Focus)
- [ ] Integrate Users API in dashboard
- [ ] Implement client-side pagination (5 per page)
- [ ] Add search/filter functionality
- [ ] Implement delete user with confirmation
- [ ] Complete sign-up page

### Phase 2: Polish & Quality
- [ ] Add loading states for all async operations
- [ ] Add empty states for no data scenarios
- [ ] Improve error handling with retry options
- [ ] Review Figma design compliance
- [ ] Add comprehensive form validation

### Phase 3: Testing & Optimization
- [ ] Test authentication flow end-to-end
- [ ] Test pagination and search
- [ ] Performance optimization
- [ ] Accessibility review
- [ ] Cross-browser testing

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

## 🐛 Known Issues

- User table currently shows static data (API integration pending)
- Pagination controls are disabled (implementation pending)
- Search functionality is disabled (implementation pending)
- Sign-up page needs implementation

## 📚 Documentation

For detailed implementation guidance, see:
- `.kiro/steering/current-status.md` - Current project status
- `.kiro/steering/assignment.md` - Assignment requirements
- `.kiro/steering/tech.md` - Tech stack details
- `.kiro/steering/structure.md` - Project structure

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [better-auth](https://better-auth.com/) - Authentication
- [Drizzle ORM](https://orm.drizzle.team/) - Database ORM

---

**Project Type**: Front-End Developer Assessment (FED-11/25)  
**Status**: In Development (~60% Complete)


