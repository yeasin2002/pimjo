import Image from 'next/image'
import type { TemplateCard as TemplateCardType } from './types'

interface TemplateCardProps {
  template: TemplateCardType
}

export const TemplateCard = ({ template }: TemplateCardProps) => {
  return (
    <div>
      <Image
        src={template.imgSrc}
        alt={template.title}
        width={508}
        height={297}
        className="rounded-lg"
      />
      <div className="mt-6 space-y-2">
        <h3 className="text-lg font-bold">{template.title}</h3>
        <p className="font-medium text-gray-700">{template.description}</p>
      </div>
    </div>
  )
}
