interface FooterWithPaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

export const FooterWithPagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: FooterWithPaginationProps) => {
  const startIndex = (currentPage - 1) * itemsPerPage + 1
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems)

  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < totalPages

  return (
    <div className="flex items-center justify-between rounded-b-xl border-t bg-white px-3 py-4 md:px-6">
      <div className="pl-5">
        <p className="text-sm text-[#667085]">
          Showing <span className="font-medium text-[#344054]">{startIndex}</span> to{' '}
          <span className="font-medium text-[#344054]">{endIndex}</span> of{' '}
          <span className="font-medium text-[#344054]">{totalItems}</span> results
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrevious}
          className={`rounded-[14px] border border-[#D0D5DD] bg-white px-3 py-2 text-[#667085] ${
            canGoPrevious ? 'cursor-pointer hover:bg-gray-50' : 'cursor-not-allowed opacity-50'
          }`}
          title="Previous page"
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

        {/* Page numbers */}
        <div className="hidden items-center space-x-1 md:flex">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`size-10 rounded-xl p-3 text-sm leading-5 ${
                page === currentPage
                  ? 'bg-[#3758F9] text-white'
                  : 'border border-[#D0D5DD] bg-white text-[#344054] hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Mobile page indicator */}
        <div className="flex items-center md:hidden">
          <span className="text-sm text-[#344054]">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext}
          className={`rounded-[14px] border border-[#D0D5DD] bg-white px-3 py-2 text-[#667085] ${
            canGoNext ? 'cursor-pointer hover:bg-gray-50' : 'cursor-not-allowed opacity-50'
          }`}
          title="Next page"
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
  )
}
