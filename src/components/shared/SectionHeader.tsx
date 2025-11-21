interface SectionHeaderProps {
  icon?: React.ReactNode
  badgeText?: string
  title?: string
  subtitle?: React.ReactNode
  className?: string
}

export const SectionHeader = ({
  icon,
  badgeText,
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`mt-20 border-t border-gray-200 ${className}`}>
      <div className="p-12">
        <div className={className.includes('text-center') ? 'text-center' : ''}>
          {(icon || badgeText) && (
            <div className="mb-4 inline-flex h-[34px] w-[120px] items-center gap-2 rounded-full border border-gray-200 bg-white py-[7px] pr-3 pl-2.5 text-[#6B7280]">
              {icon}
              {badgeText && <span className="text-sm">{badgeText}</span>}
            </div>
          )}
          {title && <h2 className="mb-4 text-4xl font-bold">{title}</h2>}
          {subtitle && (
            <p
              className={`max-w-3xl text-lg text-gray-600 ${className.includes('text-center') ? 'mx-auto' : ''}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
