import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routs'
import { api } from '../services/api'

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get('/users/validated').catch(error => {
      if (error.response?.status === 401) {
        signOut()
      }
    })
  }, [])

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}
