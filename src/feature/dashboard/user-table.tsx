import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { FooterWithPagination } from './footer-with-pagination'
import TableHeaderWithSearchFilter from './table-header-with-search-filter'
import { UserTableRow } from './user.row'

export const UserTable = () => {
  return (
    <div>
      <TableHeaderWithSearchFilter />
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
          <UserTableRow />
          <UserTableRow />
          <UserTableRow />
          <UserTableRow />
          <UserTableRow />
        </TableBody>
      </Table>

      <FooterWithPagination />
    </div>
  )
}
