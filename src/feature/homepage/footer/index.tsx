import { Copyright } from './copyright'
import { FooterContent } from './footer-content'
import { ProductsShowcase } from './products-showcase'

export const Footer = () => {
  return (
    <footer className="w-full">
      <FooterContent />
      <ProductsShowcase />
      <Copyright />
    </footer>
  )
}
