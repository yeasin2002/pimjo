import TemplateIcon from '@/components/icons/svg/template'

interface SectionHeaderProps {
  badgeText?: string
  title?: string
  subtitle?: React.ReactNode
}

export const SectionHeader = ({
  badgeText = 'Templates',
  title = 'Ready-to-use Figma templates for building websites faster.',
  subtitle = (
    <>
      Design and explore stunning website layouts with our{' '}
      <span className="font-medium text-[#374151]">ready-made templates.</span>
    </>
  ),
}: SectionHeaderProps) => {
  return (
    <div className="mt-20 border-t border-gray-200">
      <div className="p-12">
        <div>
          <div className="mb-4 inline-flex h-[34px] w-[120px] items-center gap-2 rounded-full border border-gray-200 bg-white py-[7px] pr-3 pl-2.5 text-[#6B7280]">
            <TemplateIcon />
            <span className="text-sm">{badgeText}</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold">{title}</h2>
          <p className="max-w-3xl text-lg text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
