export const FooterWithPagination = () => {
  return (
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
  )
}
