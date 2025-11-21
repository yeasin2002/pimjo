import { Input } from '@/components/ui/input'
import { Filter, SearchIcon, X } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface TableHeaderWithSearchFilterProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  totalUsers: number
  statusFilter: string
  onStatusFilterChange: (value: string) => void
}

const TableHeaderWithSearchFilter = ({
  searchQuery,
  onSearchChange,
  totalUsers,
  statusFilter,
  onStatusFilterChange,
}: TableHeaderWithSearchFilterProps) => {
  return (
    <div className="flex items-center justify-between rounded-t-xl bg-white px-3 py-4 md:px-6">
      <div>
        <p className="text-[18px] leading-7 font-bold tracking-[-0.2px] text-[#1D2939]">
          All Users
        </p>
        <p className="text-sm text-[#667085]">{totalUsers} total users</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative hidden md:block">
          <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 transform text-[#667085]" />
          <Input
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-11 rounded-[12px] border border-[#D0D5DD] py-3.5 pr-10 pl-10 md:w-[320px]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute top-1/2 right-3 -translate-y-1/2 transform text-[#667085] hover:text-[#344054]"
              title="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="flex h-11 items-center space-x-1 rounded-[12px] border border-[#D0D5DD] bg-white px-3 py-4 md:hidden">
          <SearchIcon className="text-[#344054]" />
        </div>
        <Select value={statusFilter} onValueChange={onStatusFilterChange}>
          <SelectTrigger className="h-11 w-[150px] rounded-[12px] border border-[#D0D5DD] bg-white px-3">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-[#344054]" />
              <SelectValue placeholder="Filter" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Complete">Complete</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default TableHeaderWithSearchFilter
