import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { AlertCircle } from 'lucide-react'

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export function ErrorState({
  message = 'Failed to load users. Please try again.',
  onRetry,
}: ErrorStateProps) {
  return (
    <TableRow>
      <TableCell colSpan={7} className="h-64 text-center">
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="rounded-full bg-red-100 p-3">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-900">Something went wrong</p>
            <p className="text-sm text-gray-500">{message}</p>
          </div>
          {onRetry && (
            <Button onClick={onRetry} className="mt-2">
              Try again
            </Button>
          )}
        </div>
      </TableCell>
    </TableRow>
  )
}
