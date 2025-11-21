import { DashboardUser } from '@/types/dashboard'
import { useEffect, useState } from 'react'

interface UseUsersReturn {
  users: DashboardUser[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
  deleteUser: (id: string) => Promise<void>
  deleting: boolean
}

export function useUsers(): UseUsersReturn {
  const [users, setUsers] = useState<DashboardUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('https://69102d7545e65ab24ac5d435.mockapi.io/users')

      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }

      const data = await response.json()
      setUsers(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching users:', err)
    } finally {
      setLoading(false)
    }
  }

  const deleteUser = async (id: string) => {
    try {
      setDeleting(true)
      const response = await fetch(`https://69102d7545e65ab24ac5d435.mockapi.io/users/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete user')
      }

      // Update local state by removing the deleted user
      setUsers((prevUsers) => prevUsers.filter((user) => user.dealId !== id))
    } catch (err) {
      console.error('Error deleting user:', err)
      throw err
    } finally {
      setDeleting(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
    deleteUser,
    deleting,
  }
}
