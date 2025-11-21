import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { TableCell, TableRow } from '@/components/ui/table'
import Image from 'next/image'

export const UserTableRow = () => {
  return (
    <TableRow>
      <TableCell className="px-6 py-3.5">
        <div className="flex items-center space-x-1.5">
          <Checkbox disabled />
          <Label>#D-001</Label>
        </div>
      </TableCell>
      <TableCell className="flex items-center space-x-3 px-6 py-3.5">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border">
          <Image
            className="absolute rounded-full object-cover p-0.5"
            blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
            placeholder="blur"
            fill
            alt="John Doe"
            src="https://i.pravatar.cc/150?img=12"
          />
        </div>
        <div className="space-y-0.5">
          <p className="text-sm leading-5 font-medium tracking-[-0.2px] text-[#344054]">John Doe</p>
          <p className="text-[#667085]">john.doe@example.com</p>
        </div>
      </TableCell>
      <TableCell className="px-6 py-3.5">Premium Plan</TableCell>
      <TableCell className="px-6 py-3.5">$5,200</TableCell>
      <TableCell className="px-6 py-3.5">2024-03-15</TableCell>
      <TableCell className="px-6 py-3.5">Active</TableCell>
      <TableCell className="px-6 py-3.5">
        <span className="text-sm text-[#667085]">—</span>
      </TableCell>
    </TableRow>
  )
}
