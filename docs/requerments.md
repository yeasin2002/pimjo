# FED-11/25 - Assignment

## 🎯 Objective

Your task is to build a **fully functional front-end application** using **Next.js 16** and **Tailwind CSS**, following the provided **Figma design** and modern front-end best practices.

The goal is to evaluate your ability to implement design precision, clean architecture, authentication, and data handling.

---

### 🖌️ Design Reference

All pages and components **must strictly follow the provided Figma design**:

🔗 [Figma Design – Front-End Developer Assessment](https://www.figma.com/design/g5DDrAT6qYIM4eqQm5r6tW/Front-end-developer-assessment)

---

### 📋 Project Requirements

### 1. **Landing Page**

- Implement the landing page **exactly as per Figma** (pixel-perfect).
- Ensure the layout is fully **responsive** and visually consistent.
- Include all animations, hover states, and transitions from the design.
- **Header navigation menu** — dynamically fetched from:
  `GET https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu`

---

### 2. **Authentication Pages**

- Build both **Sign In** and **Sign Up** pages based on the design.
- Implement **authentication logic** using **Next.js 16 best practices**:
  - Use the **App Router**.
  - Secure pages with **middleware**.
  - Manage sessions or tokens efficiently (`NextAuth` or custom logic.)
- Include form validation, error states, and redirect logic after login/signup.

---

### 3. **Dashboard Page**

- After login, users should be redirected to the **Dashboard**.
- The dashboard must include:
  - **Users table** — fetched from:
    `GET https://69102d7545e65ab24ac5d435.mockapi.io/users`
  - Display **5 users per page** with **client-side pagination**.
  - Implement **client-side search** (optional: filter by name or email).
  - Enable **delete user** functionality via:
    `DELETE https://69102d7545e65ab24ac5d435.mockapi.io/users/:id`
- Add proper loading states, empty states, and error handling.

---

### ⚙️ Technical Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Routing:** Next.js file-based App Router
- **Database:** PostgreSQL (supabase/neon)
- **Deployment (optional):** Vercel or any preferred platform

---

### 🧩 Functional Expectations

| Feature          | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| **Landing Page** | Matches Figma pixel-for-pixel, responsive, accessible                |
| **Auth Pages**   | Functional, validated, and secured authentication flow (use auth.js) |
| **Dashboard**    | Dynamic data rendering, pagination, search, and delete               |
| **Header Menu**  | Fetched from API, dynamically rendered                               |
| **UX/UI**        | Smooth transitions, consistent spacing, and responsive layouts       |
| **Code Quality** | Clean, reusable, and modular components                              |

---

### 💡 Best Practices to Follow

- Follow **Next.js 16 App Router conventions** (server actions, route handlers, metadata, etc.).
- Use **server and client components** appropriately.
- Maintain **semantic HTML** and **accessibility**.
- Fully-responsive on all mobile devices.
- Keep **performance** and **readability** in mind — avoid unnecessary renders or API calls.
- Comment important logic for clarity.

---

### 📦 Deliverables

- A **GitHub repository** with:
  - The complete project code.
  - A short **README** including:
    - Setup and run instructions (`npm install`, `npm run dev`)
    - Description of your approach and structure.
    - Any assumptions or known issues.
- Deployed live version URL (preferably on **Vercel or Netlify**).

## 🔑 Test Login Access:

Create a test login to access dashboard, before you submit assignment.

username/email: hello@demo.com

password: demopass123

## **Submission Guideline:**

Submit your assignment through a **GitHub repository**. You can either share a **public repo link via email**, or if it’s private, **invite `musharofchy` and `said7388`** for access.

---

### 🧾 Evaluation Criteria

| Criteria                | Description                                         |
| ----------------------- | --------------------------------------------------- |
| **UI Accuracy**         | Pixel-perfect match with Figma                      |
| **Code Quality**        | Clean, structured, and maintainable code            |
| **Next.js Practices**   | Proper usage of Next.js 16 App Router & conventions |
| **Functionality**       | Auth, data fetching, pagination, search, and delete |
| **Performance**         | Optimized API usage and rendering                   |
| **UX/UI Consistency**   | Smooth, responsive, and accessible experience       |
| **Attention to Detail** | Micro-interactions, responsiveness, loading states  |

---

## **Deadline: Mentioned on Email**

---

### 🧭 Notes

- **Please avoid using AI coding tools (e.g., Copilot, Cursor, TRAE, etc.). Your code will be reviewed for originality, structure, and understanding.**
- All text, spacing, and colors should be consistent with the Figma design.
- Focus on **clarity, modularity, and production-level code**.
