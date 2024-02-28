'use client'
import { autenticacaoContexto } from '@/context/contextogbs'
import { useContext } from 'react'

export default function Home() {
  const { isAuthenticated } = useContext(autenticacaoContexto)
  return (
    <div>
      <h1>home</h1>

      {isAuthenticated && <p>autenticado</p>}
      {!isAuthenticated && <p>Não autenticado</p>}
    </div>
  )
}
