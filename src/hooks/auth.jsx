import { createContext, useContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function singIn({ email, password }) {
    try {
      const response = await api.post('sessions', { email, password })

      const { user } = response.data

      localStorage.setItem('@food:user', JSON.stringify(user))

      setData({ user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possivel entrar.')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@food:user')

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@food:user')

    if (user) {
      setData({
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ singIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
