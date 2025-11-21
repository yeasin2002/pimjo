'use client'

import { DeleteUserDialog } from '@/components/dashboard/delete-user-dialog'
import { EmptyState } from '@/components/dashboard/empty-state'
import { ErrorState } from '@/components/dashboard/error-state'
import { TableSkeleton } from '@/components/dashboard/table-skeleton'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { useUsers } from '@/hooks/use-users'
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { FooterWithPagination } from './footer-with-pagination'
import TableHeaderWithSearchFilter from './table-header-with-search-filter'
import { UserTableRow } from './user.row'

const ITEMS_PER_PAGE = 5

export const UserTable = () => {
  const { users, loading, error, refetch, deleteUser, deleting } = useUsers()

  // Use nuqs for URL state management
  const [{ page, search }, setQuery] = useQueryStates(
    {
      page: parseAsInteger.withDefault(1),
      search: parseAsString.withDefault(''),
    },
    {
      history: 'push',
    }
  )

  // Delete dialog state
  const [deleteDialog, setDeleteDialog] = useState<{
    open: boolean
    userId: string
    userName: string
  }>({
    open: false,
    userId: '',
    userName: '',
  })

  // Filter users based on search query
  const filteredUsers = useMemo(() => {
    if (!search) return users

    const query = search.toLowerCase()
    return users.filter(
      (user) =>
        user.customer.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
    )
  }, [users, search])

  // Paginate filtered users
  const paginatedUsers = useMemo(() => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return filteredUsers.slice(startIndex, endIndex)
  }, [filteredUsers, page])

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)

  // Handle search change
  const handleSearchChange = (value: string) => {
    setQuery({ search: value, page: 1 }) // Reset to page 1 when searching
  }

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setQuery({ page: newPage })
  }

  // Handle delete user
  const handleDeleteClick = (userId: string, userName: string) => {
    setDeleteDialog({
      open: true,
      userId,
      userName,
    })
  }

  const handleDeleteConfirm = async () => {
    try {
      await deleteUser(deleteDialog.userId)

      toast.success(`${deleteDialog.userName} has been successfully deleted.`)

      // Close dialog
      setDeleteDialog({ open: false, userId: '', userName: '' })

      // If current page is now empty, go to previous page
      if (paginatedUsers.length === 1 && page > 1) {
        setQuery({ page: page - 1 })
      }
    } catch {
      toast.error('Failed to delete user. Please try again.')
    }
  }

  // Handle clear search
  const handleClearSearch = () => {
    setQuery({ search: '', page: 1 })
  }

  return (
    <div>
      <TableHeaderWithSearchFilter
        searchQuery={search}
        onSearchChange={handleSearchChange}
        totalUsers={users.length}
      />
      <Table className="w-full bg-white">
        <TableHeader className="bg-[#F9FAFB]">
          <TableRow>
            <TableHead className="px-6 py-3 text-sm leading-5 font-medium tracking-[-0.02px] text-[#667085]">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>Deal ID</Label>
              </div>
            </TableHead>
            <TableHead className="px-6 py-3 text-sm leading-5 font-medium tracking-[-0.02px] text-[#667085]">
              Customer
            </TableHead>
            <TableHead className="px-6 py-3 text-sm leading-5 font-medium tracking-[-0.02px] text-[#667085]">
              Product/Service
            </TableHead>
            <TableHead className="px-6 py-3 text-sm leading-5 font-medium tracking-[-0.02px] text-[#667085]">
              Deal Value
            </TableHead>
            <TableHead className="px-6 py-3 text-sm leading-5 font-medium tracking-[-0.02px] text-[#667085]">
              Close Date
            </TableHead>
            <TableHead className="px-6 py-3 text-sm leading-5 font-medium tracking-[-0.02px] text-[#667085]">
              Status
            </TableHead>
            <TableHead className="px-6 py-3 text-sm leading-5 font-medium tracking-[-0.02px] text-[#667085]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableSkeleton />
          ) : error ? (
            <ErrorState message={error} onRetry={refetch} />
          ) : filteredUsers.length === 0 ? (
            <EmptyState
              message={search ? 'No users found' : 'No users available'}
              description={
                search
                  ? 'Try adjusting your search to find what you are looking for.'
                  : 'There are no users in the system yet.'
              }
              onReset={search ? handleClearSearch : undefined}
              showReset={!!search}
            />
          ) : (
            paginatedUsers.map((user) => (
              <UserTableRow key={user.dealId} user={user} onDelete={handleDeleteClick} />
            ))
          )}
        </TableBody>
      </Table>

      <FooterWithPagination
        currentPage={page}
        totalPages={totalPages || 1}
        totalItems={filteredUsers.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />

      <DeleteUserDialog
        open={deleteDialog.open}
        onOpenChange={(open) => setDeleteDialog((prev) => ({ ...prev, open }))}
        onConfirm={handleDeleteConfirm}
        userName={deleteDialog.userName}
        isDeleting={deleting}
      />
    </div>
  )
}
