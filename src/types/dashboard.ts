export interface DashboardUser {
  dealId: string
  customer: string
  email: string
  product: string
  dealValue: string
  closeDate: string
  status: 'Complete' | 'Pending'
  avatar: string
}
