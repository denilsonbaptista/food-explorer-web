import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'
import { USER_ROLE } from '../utils/roles'

import { AuthRoutes } from './auth.routs'
import { AdminRoutes } from './admin.routes'
import { CustomerRoutes } from './customer.routes'

import { api } from '../services/api'

export function Routes() {
  const { user, signOut } = useAuth()

  function DynamicRoutes() {
    if (user) {
      switch (user.role) {
        case USER_ROLE.ADMIN:
          return <AdminRoutes />
        case USER_ROLE.CUSTOMER:
          return <CustomerRoutes />
        default:
          return <CustomerRoutes />
      }
    } else {
      return <AuthRoutes />
    }
  }

  useEffect(() => {
    api.get('/users/validated').catch(error => {
      if (error.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  return <BrowserRouter>{DynamicRoutes()}</BrowserRouter>
}
