import { BarChart, Grid, Layout, Megaphone, ShoppingCart, Sparkles } from 'lucide-react'

export const iconMap: Record<string, React.ElementType> = {
  layout: Layout,
  'bar-chart': BarChart,
  sparkles: Sparkles,
  megaphone: Megaphone,
  'shopping-cart': ShoppingCart,
  grid: Grid,
}

export interface NavItem {
  id: string
  label: string
  type?: 'mega'
  href?: string
  columns?: {
    title: string
    description: string
    icon: string
    href: string
  }[]
}

export async function getMenuData() {
  try {
    const res = await fetch('https://69102d7545e65ab24ac5d435.mockapi.io/mega-menu')
    if (!res.ok) throw new Error('Failed to fetch menu data')
    return res.json() as Promise<NavItem[]>
  } catch (error) {
    console.error('Error fetching menu:', error)
    return []
  }
}
