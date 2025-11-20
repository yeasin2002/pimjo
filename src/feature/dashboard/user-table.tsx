import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter, SearchIcon } from "lucide-react";
import Image from "next/image";

export const UserTable = () => {
  return (
    <div>
      {/* Table Header Section */}
      <div className="bg-white rounded-t-xl py-4 md:px-6 px-3 flex items-center justify-between">
        <div>
          <p className="leading-7 tracking-[-0.2px] text-[18px] font-bold text-[#1D2939]">
            All Users
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative md:block hidden">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              placeholder="Search..."
              disabled
              className="pl-10 py-3.5 pr-4 md:w-[320px] h-11 rounded-[12px] border-[#D0D5DD] border"
            />
          </div>
          <div className="py-4 px-3 space-x-1 h-11 rounded-[12px] md:hidden flex items-center border border-[#D0D5DD] bg-white">
            <SearchIcon className="text-[#344054]" />
          </div>
          <div className="py-4 px-3 space-x-1 h-11 rounded-[12px] flex items-center border border-[#D0D5DD] bg-white">
            <Filter className="text-[#344054] w-5 h-5" />
            <p className="text-[#344054] leading-5 text-sm tracking-[-0.02px] md:block hidden">
              Filter
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <Table className="bg-white w-full">
        <TableHeader className="bg-[#F9FAFB]">
          <TableRow>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>Deal ID</Label>
              </div>
            </TableHead>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Customer
            </TableHead>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Product/Service
            </TableHead>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Deal Value
            </TableHead>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Close Date
            </TableHead>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Status
            </TableHead>
            <TableHead className="py-3 px-6 leading-5 text-sm font-medium tracking-[-0.02px] text-[#667085]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* User 1 */}
          <TableRow>
            <TableCell className="py-3.5 px-6">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>#D-001</Label>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6 flex items-center space-x-3">
              <div className="border rounded-full relative overflow-hidden w-10 h-10">
                <Image
                  className="absolute object-cover p-0.5 rounded-full"
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt="John Doe"
                  src="https://i.pravatar.cc/150?img=12"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 tracking-[-0.2px] font-medium text-[#344054]">
                  John Doe
                </p>
                <p className="text-[#667085]">john.doe@example.com</p>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6">Premium Plan</TableCell>
            <TableCell className="py-3.5 px-6">$5,200</TableCell>
            <TableCell className="py-3.5 px-6">2024-03-15</TableCell>
            <TableCell className="py-3.5 px-6">Active</TableCell>
            <TableCell className="py-3.5 px-6">
              <span className="text-[#667085] text-sm">—</span>
            </TableCell>
          </TableRow>

          {/* User 2 */}
          <TableRow>
            <TableCell className="py-3.5 px-6">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>#D-002</Label>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6 flex items-center space-x-3">
              <div className="border rounded-full relative overflow-hidden w-10 h-10">
                <Image
                  className="absolute object-cover p-0.5 rounded-full"
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt="Jane Smith"
                  src="https://i.pravatar.cc/150?img=5"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 tracking-[-0.2px] font-medium text-[#344054]">
                  Jane Smith
                </p>
                <p className="text-[#667085]">jane.smith@example.com</p>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6">Business Plan</TableCell>
            <TableCell className="py-3.5 px-6">$8,400</TableCell>
            <TableCell className="py-3.5 px-6">2024-03-20</TableCell>
            <TableCell className="py-3.5 px-6">Pending</TableCell>
            <TableCell className="py-3.5 px-6">
              <span className="text-[#667085] text-sm">—</span>
            </TableCell>
          </TableRow>

          {/* User 3 */}
          <TableRow>
            <TableCell className="py-3.5 px-6">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>#D-003</Label>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6 flex items-center space-x-3">
              <div className="border rounded-full relative overflow-hidden w-10 h-10">
                <Image
                  className="absolute object-cover p-0.5 rounded-full"
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt="Mike Johnson"
                  src="https://i.pravatar.cc/150?img=33"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 tracking-[-0.2px] font-medium text-[#344054]">
                  Mike Johnson
                </p>
                <p className="text-[#667085]">mike.j@example.com</p>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6">Starter Plan</TableCell>
            <TableCell className="py-3.5 px-6">$2,100</TableCell>
            <TableCell className="py-3.5 px-6">2024-03-18</TableCell>
            <TableCell className="py-3.5 px-6">Active</TableCell>
            <TableCell className="py-3.5 px-6">
              <span className="text-[#667085] text-sm">—</span>
            </TableCell>
          </TableRow>

          {/* User 4 */}
          <TableRow>
            <TableCell className="py-3.5 px-6">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>#D-004</Label>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6 flex items-center space-x-3">
              <div className="border rounded-full relative overflow-hidden w-10 h-10">
                <Image
                  className="absolute object-cover p-0.5 rounded-full"
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt="Sarah Wilson"
                  src="https://i.pravatar.cc/150?img=20"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 tracking-[-0.2px] font-medium text-[#344054]">
                  Sarah Wilson
                </p>
                <p className="text-[#667085]">sarah.w@example.com</p>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6">Enterprise Plan</TableCell>
            <TableCell className="py-3.5 px-6">$15,000</TableCell>
            <TableCell className="py-3.5 px-6">2024-03-25</TableCell>
            <TableCell className="py-3.5 px-6">Active</TableCell>
            <TableCell className="py-3.5 px-6">
              <span className="text-[#667085] text-sm">—</span>
            </TableCell>
          </TableRow>

          {/* User 5 */}
          <TableRow>
            <TableCell className="py-3.5 px-6">
              <div className="flex items-center space-x-1.5">
                <Checkbox disabled />
                <Label>#D-005</Label>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6 flex items-center space-x-3">
              <div className="border rounded-full relative overflow-hidden w-10 h-10">
                <Image
                  className="absolute object-cover p-0.5 rounded-full"
                  blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
                  placeholder="blur"
                  fill
                  alt="Alex Brown"
                  src="https://i.pravatar.cc/150?img=8"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm leading-5 tracking-[-0.2px] font-medium text-[#344054]">
                  Alex Brown
                </p>
                <p className="text-[#667085]">alex.brown@example.com</p>
              </div>
            </TableCell>
            <TableCell className="py-3.5 px-6">Premium Plan</TableCell>
            <TableCell className="py-3.5 px-6">$6,800</TableCell>
            <TableCell className="py-3.5 px-6">2024-03-22</TableCell>
            <TableCell className="py-3.5 px-6">Closed</TableCell>
            <TableCell className="py-3.5 px-6">
              <span className="text-[#667085] text-sm">—</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {/* Footer with pagination (disabled) */}
      <div className="flex items-center justify-between py-4 md:px-6 px-3 bg-white border-t rounded-b-xl">
        <div className="pl-5">
          <p className="text-sm text-[#667085]">
            Showing <span className="font-medium text-[#344054]">5</span> of{" "}
            <span className="font-medium text-[#344054]">5</span> results
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            disabled
            className="px-3 py-2 rounded-[14px] border border-[#D0D5DD] bg-white text-[#667085] opacity-50 cursor-not-allowed"
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
          <button className="bg-[#3758F9] text-white leading-5 text-sm p-3 rounded-xl size-10 md:block hidden">
            1
          </button>
          <button
            disabled
            className="px-3 py-2 rounded-[14px] border border-[#D0D5DD] bg-white text-[#667085] opacity-50 cursor-not-allowed"
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
  );
};


