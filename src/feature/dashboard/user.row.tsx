import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { DashboardUser } from '@/types/dashboard'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'

interface UserTableRowProps {
  user: DashboardUser
  onDelete: (id: string, name: string) => void
}

export const UserTableRow = ({ user, onDelete }: UserTableRowProps) => {
  console.log(user)
  return (
    <TableRow>
      <TableCell className="px-6 py-3.5">
        <div className="flex items-center space-x-1.5">
          <Checkbox disabled />
          <Label>#{user.dealId}</Label>
        </div>
      </TableCell>
      <TableCell className="px-6 py-3.5">
        <div className="flex items-center space-x-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border">
            <Image
              className="absolute rounded-full object-cover p-0.5"
              // blurDataURL="LEHLh[WB2yk8pyoJadR*.7kCMdnj"
              // placeholder="blur"
              // fill
              alt={user.customer}
              src={user.avatar}
              width={100}
              height={100}
            />
          </div>
          <div className="space-y-0.5">
            <p className="text-sm leading-5 font-medium tracking-[-0.2px] text-[#344054]">
              {user.customer}
            </p>
            <p className="text-sm text-[#667085]">{user.email}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="px-6 py-3.5 text-sm text-[#344054]">{user.product}</TableCell>
      <TableCell className="px-6 py-3.5 text-sm font-medium text-[#344054]">
        {user.dealValue}
      </TableCell>
      <TableCell className="px-6 py-3.5 text-sm text-[#667085]">{user.closeDate}</TableCell>
      <TableCell className="px-6 py-3.5">
        <span
          className={cn(
            `inline-flex rounded-full px-2.5 py-1 text-xs font-medium`,
            user.status === 'Pending'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
          )}
        >
          {user.status}
        </span>
      </TableCell>
      <TableCell className="px-6 py-3.5">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(user.dealId, user.customer)}
          className="h-8 w-8 text-red-600 hover:bg-red-50 hover:text-red-700"
          title="Delete user"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  )
}
