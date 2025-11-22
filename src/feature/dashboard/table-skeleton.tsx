import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function TableSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell className="px-6 py-3.5">
            <div className="flex items-center space-x-1.5">
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-16" />
            </div>
          </TableCell>
          <TableCell className="px-6 py-3.5">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-40" />
              </div>
            </div>
          </TableCell>
          <TableCell className="px-6 py-3.5">
            <Skeleton className="h-4 w-24" />
          </TableCell>
          <TableCell className="px-6 py-3.5">
            <Skeleton className="h-4 w-16" />
          </TableCell>
          <TableCell className="px-6 py-3.5">
            <Skeleton className="h-4 w-20" />
          </TableCell>
          <TableCell className="px-6 py-3.5">
            <Skeleton className="h-6 w-16 rounded-full" />
          </TableCell>
          <TableCell className="px-6 py-3.5">
            <Skeleton className="h-8 w-8 rounded" />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
