'use client'
import { ReactNode, createContext } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
}

export const autenticacaoContexto = createContext({} as AuthContextType)

export const AuthProviderContexto = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = true
  return (
    <autenticacaoContexto.Provider value={{ isAuthenticated }}>
      {children}
    </autenticacaoContexto.Provider>
  )
}
