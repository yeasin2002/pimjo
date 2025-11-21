import { cn } from '@/lib/utils'
import Image from 'next/image'
import { products } from './footer-data'

export const ProductsShowcase = () => {
  return (
    <div className="px-4 md:px-10">
      <div className="mb-5 text-center md:text-left">
        <p className="leading-6 text-[#374151]">Explore our others products</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={cn('flex items-center justify-center border-t px-2 py-5 md:px-10', {
              'border-r': index < products.length - 1,
              'md:border-r-0': index === products.length - 1,
            })}
          >
            <Image src={product.src} alt={product.title} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}
