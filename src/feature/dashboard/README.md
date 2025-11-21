# Dashboard Feature

Complete implementation of the dashboard with user management functionality.

## Features

### ✅ User Table

- Fetches users from API: `GET https://69102d7545e65ab24ac5d435.mockapi.io/users`
- Displays user data in a responsive table
- Shows user avatar, name, email, product, deal value, close date, and status

### ✅ Pagination

- Client-side pagination with 5 users per page
- Previous/Next navigation buttons
- Page number indicators
- Dynamic "Showing X to Y of Z results" text
- State persists in URL query parameters

### ✅ Search & Filter

- Real-time search by customer name or email
- Search query persists in URL
- Clear search button (X icon)
- Auto-resets to page 1 when searching
- Shows empty state when no results found

### ✅ Delete User

- Delete button in Action column
- Confirmation dialog before deletion
- API call: `DELETE https://69102d7545e65ab24ac5d435.mockapi.io/users/:id`
- Optimistic UI update
- Success/error toast notifications
- Loading state during deletion

### ✅ UI States

- **Loading**: Skeleton rows while fetching data
- **Empty**: Message when no users exist or search returns no results
- **Error**: Error message with retry button
- **Success**: Toast notifications for successful actions

## Components

### Main Components

- `user-table.tsx` - Main table component with all logic
- `user.row.tsx` - Individual user row component
- `table-header-with-search-filter.tsx` - Search and filter header
- `footer-with-pagination.tsx` - Pagination footer
- `statics-cards-container.tsx` - Statistics cards

### UI Components

- `src/components/dashboard/delete-user-dialog.tsx` - Delete confirmation dialog
- `src/components/dashboard/table-skeleton.tsx` - Loading skeleton
- `src/components/dashboard/empty-state.tsx` - Empty state component
- `src/components/dashboard/error-state.tsx` - Error state component

### Hooks

- `src/hooks/use-users.ts` - Custom hook for user data management
  - Fetches users from API
  - Handles delete operations
  - Manages loading and error states
  - Provides refetch functionality

## State Management

### URL State (using nuqs)

- `page` - Current page number (default: 1)
- `search` - Search query (default: '')

Benefits:

- State persists across page refreshes
- Shareable URLs with specific page/search
- Browser back/forward navigation works
- Clean URL structure

## API Integration

### Endpoints Used

```typescript
// Fetch all users
GET https://69102d7545e65ab24ac5d435.mockapi.io/users

// Delete a user
DELETE https://69102d7545e65ab24ac5d435.mockapi.io/users/:id
```

### Error Handling

- Network errors caught and displayed
- Retry functionality for failed fetches
- Toast notifications for delete errors
- Graceful degradation

## Usage

```tsx
import { UserTable } from '@/feature/dashboard'

export default function DashboardPage() {
  return (
    <div>
      <UserTable />
    </div>
  )
}
```

## Technical Details

### Dependencies

- `nuqs` - URL state management
- `react-hot-toast` - Toast notifications
- `lucide-react` - Icons
- `shadcn/ui` - UI components

### Performance Optimizations

- `useMemo` for filtered and paginated data
- Optimistic UI updates for delete operations
- Efficient re-renders with proper dependencies
- Client-side filtering and pagination (no extra API calls)

### Accessibility

- Semantic HTML table structure
- Keyboard navigation support
- Focus states on interactive elements
- ARIA labels where needed
- Alt text for images

## Future Enhancements

Potential improvements:

- Bulk delete functionality
- Export to CSV
- Advanced filtering (by status, date range, etc.)
- Sorting by columns
- Edit user functionality
- User details modal
