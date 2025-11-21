import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Filter, SearchIcon } from 'lucide-react'
import Image from 'next/image'

export const UserTable = () => {
  return (
    <div>
      {/* Table Header Section */}
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

      {/* Table */}
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
          {/* User 1 */}
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
                <p className="text-sm leading-5 font-medium tracking-[-0.2px] text-[#344054]">
                  John Doe
                </p>
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

          {/* User 2 */}
          <TableRow>
            <TableCell className="px-6 py-3.5">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>#D-002</Label>
              </div>
            </TableCell>
            <TableCell className="flex items-center space-x-3 px-6 py-3.5">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border">
                <Image
                  className="absolute rounded-full object-cover p-0.5"
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt="Jane Smith"
                  src="https://i.pravatar.cc/150?img=5"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 font-medium tracking-[-0.2px] text-[#344054]">
                  Jane Smith
                </p>
                <p className="text-[#667085]">jane.smith@example.com</p>
              </div>
            </TableCell>
            <TableCell className="px-6 py-3.5">Business Plan</TableCell>
            <TableCell className="px-6 py-3.5">$8,400</TableCell>
            <TableCell className="px-6 py-3.5">2024-03-20</TableCell>
            <TableCell className="px-6 py-3.5">Pending</TableCell>
            <TableCell className="px-6 py-3.5">
              <span className="text-sm text-[#667085]">—</span>
            </TableCell>
          </TableRow>

          {/* User 3 */}
          <TableRow>
            <TableCell className="px-6 py-3.5">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>#D-003</Label>
              </div>
            </TableCell>
            <TableCell className="flex items-center space-x-3 px-6 py-3.5">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border">
                <Image
                  className="absolute rounded-full object-cover p-0.5"
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt="Mike Johnson"
                  src="https://i.pravatar.cc/150?img=33"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 font-medium tracking-[-0.2px] text-[#344054]">
                  Mike Johnson
                </p>
                <p className="text-[#667085]">mike.j@example.com</p>
              </div>
            </TableCell>
            <TableCell className="px-6 py-3.5">Starter Plan</TableCell>
            <TableCell className="px-6 py-3.5">$2,100</TableCell>
            <TableCell className="px-6 py-3.5">2024-03-18</TableCell>
            <TableCell className="px-6 py-3.5">Active</TableCell>
            <TableCell className="px-6 py-3.5">
              <span className="text-sm text-[#667085]">—</span>
            </TableCell>
          </TableRow>

          {/* User 4 */}
          <TableRow>
            <TableCell className="px-6 py-3.5">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>#D-004</Label>
              </div>
            </TableCell>
            <TableCell className="flex items-center space-x-3 px-6 py-3.5">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border">
                <Image
                  className="absolute rounded-full object-cover p-0.5"
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt="Sarah Wilson"
                  src="https://i.pravatar.cc/150?img=20"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 font-medium tracking-[-0.2px] text-[#344054]">
                  Sarah Wilson
                </p>
                <p className="text-[#667085]">sarah.w@example.com</p>
              </div>
            </TableCell>
            <TableCell className="px-6 py-3.5">Enterprise Plan</TableCell>
            <TableCell className="px-6 py-3.5">$15,000</TableCell>
            <TableCell className="px-6 py-3.5">2024-03-25</TableCell>
            <TableCell className="px-6 py-3.5">Active</TableCell>
            <TableCell className="px-6 py-3.5">
              <span className="text-sm text-[#667085]">—</span>
            </TableCell>
          </TableRow>

          {/* User 5 */}
          <TableRow>
            <TableCell className="px-6 py-3.5">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>#D-005</Label>
              </div>
            </TableCell>
            <TableCell className="flex items-center space-x-3 px-6 py-3.5">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border">
                <Image
                  className="absolute rounded-full object-cover p-0.5"
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt="Alex Brown"
                  src="https://i.pravatar.cc/150?img=8"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 font-medium tracking-[-0.2px] text-[#344054]">
                  Alex Brown
                </p>
                <p className="text-[#667085]">alex.brown@example.com</p>
              </div>
            </TableCell>
            <TableCell className="px-6 py-3.5">Premium Plan</TableCell>
            <TableCell className="px-6 py-3.5">$6,800</TableCell>
            <TableCell className="px-6 py-3.5">2024-03-22</TableCell>
            <TableCell className="px-6 py-3.5">Closed</TableCell>
            <TableCell className="px-6 py-3.5">
              <span className="text-sm text-[#667085]">—</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Footer with pagination (disabled) */}
      <div className="flex items-center justify-between rounded-b-xl border-t bg-white px-3 py-4 md:px-6">
        <div className="pl-5">
          <p className="text-sm text-[#667085]">
            Showing <span className="font-medium text-[#344054]">5</span> of{' '}
            <span className="font-medium text-[#344054]">5</span> results
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            disabled
            className="cursor-not-allowed rounded-[14px] border border-[#D0D5DD] bg-white px-3 py-2 text-[#667085] opacity-50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="hidden size-10 rounded-xl bg-[#3758F9] p-3 text-sm leading-5 text-white md:block">
            1
          </button>
          <button
            disabled
            className="cursor-not-allowed rounded-[14px] border border-[#D0D5DD] bg-white px-3 py-2 text-[#667085] opacity-50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
