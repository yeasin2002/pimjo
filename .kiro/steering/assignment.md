# FED-11/25 Assignment Guidelines

## 🎯 Project Overview

This is a **Front-End Developer Assessment** project building a fully functional application with:
- **Landing Page** with dynamic header menu
- **Authentication System** (Sign In/Sign Up)
- **Dashboard** with user management

**Critical**: All pages must match the Figma design pixel-perfectly.

**Figma Design**: https://www.figma.com/design/g5DDrAT6qYIM4eqQm5r6tW/Front-end-developer-assessment

---

## 📋 Core Requirements

### 1. Landing Page
- **Pixel-perfect implementation** of Figma design
- Fully responsive across all devices
- Include all animations, hover states, and transitions
- **Dynamic Header Menu** fetched from API:
  - Endpoint: `GET https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu`
  - Must be dynamically rendered (not hardcoded)

### 2. Authentication Pages

#### Sign In Page
- Match Figma design exactly
- Form validation with proper error states
- Redirect to dashboard after successful login
- Test credentials:
  - Email: `hello@demo.com`
  - Password: `demopass123`

#### Sign Up Page
- Match Figma design exactly
- Form validation with proper error states
- Redirect to dashboard after successful registration

#### Authentication Implementation
- Use **better-auth** (already configured in `src/lib/auth.ts`)
- Leverage Next.js 16 App Router
- Secure routes with middleware (already in `src/middleware.ts`)
- Session management with better-auth
- Support email/password authentication
- Optional: GitHub and Google OAuth (already configured)

### 3. Dashboard Page

#### Users Table
- Fetch users from: `GET https://69102d7545e65ab24ac5d435.mockapi.io/users`
- Display **5 users per page** with client-side pagination
- Implement **client-side search** (filter by name or email)
- **Delete user** functionality:
  - Endpoint: `DELETE https://69102d7545e65ab24ac5d435.mockapi.io/users/:id`
  - Show confirmation dialog before deletion
  - Update UI after successful deletion

#### UI States
- Loading states during data fetching
- Empty states when no users found
- Error states with retry options
- Success feedback for actions (delete, etc.)

---

## 🔧 Technical Implementation

### API Integration

#### Header Menu API
```typescript
// Endpoint: GET https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu
// Fetch in Server Component or use client-side fetching
// Cache appropriately for performance
```

#### Users API
```typescript
// GET https://69102d7545e65ab24ac5d435.mockapi.io/users
// DELETE https://69102d7545e65ab24ac5d435.mockapi.io/users/:id
// Implement client-side pagination (5 per page)
// Implement client-side search/filter
```

### Authentication Flow

#### Current Setup
- **better-auth** configured in `src/lib/auth.ts`
- Middleware protection in `src/middleware.ts`
- Auth routes: `/sign-in`, `/sign-up`
- Protected route: `/dashboard`

#### Required Flow
1. Unauthenticated users → Redirect to `/sign-in`
2. Sign in with test credentials → Redirect to `/dashboard`
3. Authenticated users accessing auth pages → Redirect to `/dashboard`
4. Sign out → Redirect to landing page

### Component Structure

#### Existing Components
- `src/components/auth/sign-in-form.tsx` - Sign in form
- `src/components/shared/home-navbar.tsx` - Landing page navbar
- `src/components/ui/*` - shadcn/ui components

#### Required Components
- Landing page sections (hero, features, etc.)
- Dynamic header menu component
- Sign up form component
- Dashboard layout with sidebar/navigation
- Users table component with pagination
- Search/filter component
- Delete confirmation dialog
- Loading skeletons
- Empty state components

---

## 🎨 Design & UX Requirements

### Pixel-Perfect Implementation
- Match Figma spacing, typography, and colors exactly
- Use Tailwind CSS classes for styling
- Maintain design consistency across all pages
- Implement all micro-interactions from design

### Responsive Design
- Mobile-first approach
- Test on multiple screen sizes
- Ensure touch-friendly interactions on mobile
- Maintain visual hierarchy on all devices

### Accessibility
- Semantic HTML elements
- Proper ARIA labels
- Keyboard navigation support
- Focus states for interactive elements
- Alt text for images
- Color contrast compliance

### Performance
- Optimize images (use next/image)
- Minimize unnecessary re-renders
- Efficient API calls (avoid redundant fetches)
- Loading states for better perceived performance
- Code splitting where appropriate

---

## 📁 Project Structure

### Current Structure
```
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/          ✅ Implemented
│   │   │   └── page.tsx
│   │   ├── sign-up/          ⏳ Needs implementation
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── dashboard/            ✅ Basic structure done
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   └── auth/             ✅ better-auth routes
│   └── page.tsx              ✅ Landing page complete
├── components/
│   ├── auth/
│   │   ├── sign-in-form.tsx  ✅ Implemented
│   │   └── session-display.tsx
│   ├── shared/
│   │   ├── home-navbar.tsx   ✅ Dynamic menu integrated
│   │   ├── patter-wrapper.tsx
│   │   └── SectionHeader.tsx
│   ├── icons/                ✅ GitHub, Google icons
│   └── ui/                   ✅ Full shadcn/ui library
├── feature/
│   ├── auth/                 ✅ Auth form components
│   │   ├── form-divider.tsx
│   │   ├── form-input.tsx
│   │   ├── o-authentication.tsx
│   │   ├── password-input.tsx
│   │   └── sign-in-header.tsx
│   ├── dashboard/            🚧 Needs API integration
│   │   ├── statics-cards.tsx ✅ UI done
│   │   └── user-table.tsx    🚧 Static data, needs API
│   └── homepage/             ✅ All sections complete
│       ├── analytics-overview.tsx
│       ├── footer.tsx
│       ├── hero.tsx
│       ├── news-letter.tsx
│       ├── why-choose-us.tsx
│       ├── template-showcase/
│       └── testimonials/
├── hooks/
│   └── use-mobile.tsx        ✅ Implemented
├── lib/
│   ├── auth.ts               ✅ better-auth configured
│   └── auth-client.ts        ✅ Client-side auth
└── middleware.ts             ✅ Route protection working
```

### Required Additions
```
src/
├── components/
│   └── dashboard/
│       ├── delete-user-dialog.tsx    ⏳ TODO
│       ├── user-search.tsx           ⏳ TODO (UI exists, needs logic)
│       └── pagination-controls.tsx   ⏳ TODO (UI exists, needs logic)
├── hooks/
│   ├── use-users.ts                  ⏳ TODO - Fetch users from API
│   └── use-pagination.ts             ⏳ TODO - Client-side pagination
├── types/
│   ├── user.ts                       ⏳ TODO - User type definitions
│   └── menu.ts                       ✅ Can infer from existing code
└── feature/
    └── auth/
        └── sign-up-form.tsx          ⏳ TODO - Match Figma design
```

---

## ✅ Implementation Checklist

### Landing Page
- [x] Implement hero section matching Figma
- [x] Fetch and render dynamic header menu
- [x] Add all sections from design (Hero, Analytics, Features, Testimonials, Newsletter, Footer)
- [x] Implement animations and transitions
- [x] Ensure full responsiveness
- [x] Test all interactive elements

### Authentication
- [x] Build sign-in page matching Figma
- [ ] Build sign-up page matching Figma ⚠️ **HIGH PRIORITY**
- [x] Implement basic form validation
- [ ] Add comprehensive error handling and display ⚠️ **NEEDS IMPROVEMENT**
- [x] Test authentication flow (basic working)
- [x] Verify middleware protection (working)
- [x] Test redirect logic (working)

### Dashboard
- [x] Create dashboard layout
- [ ] Fetch and display users from API ⚠️ **HIGH PRIORITY** (currently static data)
- [ ] Implement pagination (5 per page) ⚠️ **HIGH PRIORITY** (UI exists, needs logic)
- [ ] Add search/filter functionality ⚠️ **HIGH PRIORITY** (UI exists, disabled)
- [ ] Implement delete user feature ⚠️ **HIGH PRIORITY** (not started)
- [ ] Add loading states ⚠️ **MEDIUM PRIORITY**
- [ ] Add empty states ⚠️ **MEDIUM PRIORITY**
- [ ] Add error handling ⚠️ **MEDIUM PRIORITY**
- [ ] Test all CRUD operations

### Quality Assurance
- [ ] Pixel-perfect match with Figma ⚠️ **NEEDS REVIEW**
- [x] Responsive on all devices (basic done)
- [ ] Accessibility compliance ⚠️ **NEEDS REVIEW**
- [ ] Performance optimization
- [ ] Code quality and cleanliness
- [ ] Proper error handling
- [ ] Loading states everywhere
- [ ] Comments for complex logic

---

## 🎯 Next Steps Priority

### 🔴 Critical (Must Complete)
1. **Integrate Users API** - Replace static data with real API calls
2. **Implement Client-Side Pagination** - 5 users per page
3. **Implement Search/Filter** - Filter by name or email
4. **Implement Delete User** - With confirmation dialog
5. **Build Sign-Up Page** - Match Figma design

### 🟡 Important (Should Complete)
6. Add loading states for all async operations
7. Add empty states when no data
8. Add error states with retry options
9. Improve form validation and error messages
10. Add success feedback for actions

### 🟢 Nice to Have
11. Add animations and micro-interactions
12. Optimize performance
13. Add comprehensive comments
14. Write tests for critical flows

---

## 🚫 Important Constraints

### Code Originality
- **No AI coding tools** (Copilot, Cursor, etc.)
- Code will be reviewed for originality
- Focus on demonstrating understanding
- Write clean, maintainable code

### Design Fidelity
- Must match Figma exactly
- All text, spacing, and colors consistent
- Include all micro-interactions
- Maintain design system

### Best Practices
- Follow Next.js 16 conventions
- Use Server/Client Components appropriately
- Implement proper error boundaries
- Write semantic, accessible HTML
- Comment important logic

---

## 📦 Deliverables

### GitHub Repository
- Complete project code
- Clear commit history
- Proper .gitignore
- No sensitive data in commits

### README.md
- Setup instructions (`npm install`, `npm run dev`)
- Environment variables setup
- Test credentials
- Project structure overview
- Approach and architecture description
- Known issues or assumptions

### Deployment
- Live URL (Vercel/Netlify preferred)
- Working authentication
- All features functional
- Responsive on all devices

### Submission
- Public repo link OR
- Private repo with access for: `musharofchy` and `said7388`

---

## 🎯 Evaluation Focus

### Priority 1: UI Accuracy
- Pixel-perfect Figma match
- Responsive design
- All animations and transitions
- Consistent spacing and typography

### Priority 2: Functionality
- Working authentication flow
- Dynamic data fetching
- Pagination and search
- Delete functionality
- Proper error handling

### Priority 3: Code Quality
- Clean, readable code
- Proper component structure
- TypeScript usage
- Performance optimization
- Accessibility compliance

### Priority 4: Attention to Detail
- Loading states
- Empty states
- Error messages
- Micro-interactions
- Edge case handling

---

## 💡 Development Tips

### Getting Started
1. Study Figma design thoroughly
2. Set up test credentials in database
3. Test authentication flow first
4. Build components incrementally
5. Test responsiveness continuously

### API Integration
- Create custom hooks for data fetching
- Implement proper error handling
- Add loading states
- Cache data appropriately
- Handle edge cases (empty data, errors)

### State Management
- Use React hooks for local state
- Consider URL state for pagination/search
- Implement optimistic updates for better UX
- Handle loading and error states

### Testing Strategy
- Test authentication flow thoroughly
- Verify all API integrations
- Test responsive design on multiple devices
- Check accessibility with keyboard navigation
- Validate form inputs

---

## 📊 Current Implementation Details

### Landing Page ✅
- **Status**: Fully implemented and functional
- **Components**: Hero, Analytics Overview, Why Choose Us, Template Showcase, Testimonials, Newsletter, Footer
- **Dynamic Menu**: Successfully fetching from `https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu`
- **Responsive**: Mobile and desktop layouts working
- **Location**: `src/app/page.tsx` + `src/feature/homepage/*`

### Authentication System ✅ (Partial)
- **Sign In**: Fully functional with email/password and OAuth (GitHub, Google)
  - Location: `src/app/(auth)/sign-in/page.tsx`
  - Form: `src/components/auth/sign-in-form.tsx`
  - Test credentials working: `hello@demo.com` / `demopass123`
- **Sign Up**: ⚠️ **NOT YET IMPLEMENTED** - High priority
  - Route exists: `src/app/(auth)/sign-up/page.tsx`
  - Needs form component matching Figma design
- **Middleware**: Working correctly
  - Redirects unauthenticated users to `/sign-in`
  - Redirects authenticated users from auth pages to `/dashboard`
  - Location: `src/middleware.ts`

### Dashboard 🚧 (Needs Work)
- **Layout**: Basic structure complete
  - Location: `src/app/dashboard/page.tsx`
  - Components: `src/feature/dashboard/*`
- **Statistics Cards**: UI implemented
  - Location: `src/feature/dashboard/statics-cards.tsx`
- **User Table**: ⚠️ **CRITICAL - Needs API Integration**
  - Location: `src/feature/dashboard/user-table.tsx`
  - Current: Shows 5 static/mock users
  - Needed: Fetch from `https://69102d7545e65ab24ac5d435.mockapi.io/users`
  - Pagination UI exists but not functional
  - Search UI exists but disabled
  - Delete functionality not implemented

### What's Working
1. ✅ Dynamic header menu from API
2. ✅ Authentication flow (sign in only)
3. ✅ Route protection with middleware
4. ✅ Landing page with all sections
5. ✅ Dashboard layout and UI structure
6. ✅ OAuth integration (GitHub, Google)

### What Needs Implementation
1. ⚠️ **Sign Up page** - Match Figma design
2. ⚠️ **Users API integration** - Replace static data
3. ⚠️ **Client-side pagination** - 5 users per page
4. ⚠️ **Search/filter functionality** - By name or email
5. ⚠️ **Delete user feature** - With confirmation dialog
6. ⚠️ **Loading states** - For all async operations
7. ⚠️ **Empty states** - When no users found
8. ⚠️ **Error handling** - With retry options

---

## 🔑 Test Credentials

**Email**: hello@demo.com  
**Password**: demopass123

Ensure these credentials work before submission.
