import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { SearchX } from 'lucide-react'

interface EmptyStateProps {
  message?: string
  description?: string
  onReset?: () => void
  showReset?: boolean
}

export function EmptyState({
  message = 'No users found',
  description = 'Try adjusting your search or filter to find what you are looking for.',
  onReset,
  showReset = false,
}: EmptyStateProps) {
  return (
    <TableRow>
      <TableCell colSpan={7} className="h-64 text-center">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="rounded-full bg-gray-100 p-3">
            <SearchX className="h-6 w-6 text-gray-400" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-900">{message}</p>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          {showReset && onReset && (
            <Button variant="outline" onClick={onReset} className="mt-2">
              Clear filters
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  )
}
