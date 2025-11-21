import { Input } from '@/components/ui/input'
import { Filter, SearchIcon } from 'lucide-react'

const TableHeaderWithSearchFilter = () => {
  return (
    <div className="flex items-center justify-between rounded-t-xl bg-white px-3 py-4 md:px-6">
      <div>
        <p className="text-[18px] leading-7 font-bold tracking-[-0.2px] text-[#1D2939]">
          All Users
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative hidden md:block">
          <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 transform" />
          <Input
            placeholder="Search..."
            disabled
            className="h-11 rounded-[12px] border border-[#D0D5DD] py-3.5 pr-4 pl-10 md:w-[320px]"
          />
        </div>
        <div className="flex h-11 items-center space-x-1 rounded-[12px] border border-[#D0D5DD] bg-white px-3 py-4 md:hidden">
          <SearchIcon className="text-[#344054]" />
        </div>
        <div className="flex h-11 items-center space-x-1 rounded-[12px] border border-[#D0D5DD] bg-white px-3 py-4">
          <Filter className="h-5 w-5 text-[#344054]" />
          <p className="hidden text-sm leading-5 tracking-[-0.02px] text-[#344054] md:block">
            Filter
          </p>
        </div>
      </div>
    </div>
  )
}

export default TableHeaderWithSearchFilter
