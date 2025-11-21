# Better-Auth Setup

This project uses [Better Auth](https://www.better-auth.com) for authentication with Drizzle ORM and PostgreSQL.

## Authentication Methods

- ✅ Email & Password
- ✅ Google OAuth
- ✅ GitHub OAuth

## Quick Setup

### 1. Environment Variables

Copy the values from `.env.example` to `.env` and fill in:

```bash
# Generate a secret (run this command)
openssl rand -base64 32

# Add to .env
BETTER_AUTH_SECRET=<generated-secret>
BETTER_AUTH_URL=http://localhost:3000
```

### 2. OAuth Setup

**GitHub OAuth:**

- Create app at: https://github.com/settings/developers
- Callback URL: `http://localhost:3000/api/auth/callback/github`

**Google OAuth:**

- Create credentials at: https://console.cloud.google.com/apis/credentials
- Callback URL: `http://localhost:3000/api/auth/callback/google`

## Usage

### Client Components

```tsx
import { useSession, signIn, signOut } from '@/lib/auth-client'

function MyComponent() {
  const { data: session } = useSession()

  // Email sign in
  await signIn.email({ email, password })

  // Social sign in
  await signIn.social({ provider: 'google' })
  await signIn.social({ provider: 'github' })

  // Sign out
  await signOut()
}
```

### Server Components

```tsx
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

async function MyServerComponent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return <div>Not authenticated</div>
  }

  return <div>Welcome {session.user.name}</div>
}
```

## Example Components

- [sign-in-form.tsx](./src/components/auth/sign-in-form.tsx) - Complete sign-in form
- [session-display.tsx](./src/components/auth/session-display.tsx) - Session display with sign-out

## Database Schema

Better-auth manages these tables:

- `user` - User accounts
- `session` - Active sessions
- `account` - OAuth accounts & passwords
- `verification` - Email verification tokens

## API Endpoints

All routes available at `/api/auth/*`:

- `/api/auth/sign-in/email` - Email sign in
- `/api/auth/sign-up/email` - Email sign up
- `/api/auth/sign-in/social` - OAuth (Google, GitHub)
- `/api/auth/session` - Get current session
- `/api/auth/sign-out` - Sign out

## Learn More

- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Drizzle ORM Adapter](https://www.better-auth.com/docs/adapters/drizzle)
