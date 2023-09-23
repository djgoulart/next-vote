"use client"

import { useAuthStore } from "@/contexts/auth"
import jwtDecode from "jwt-decode"


export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const [access_token, refresh_token, logout] = useAuthStore(state => [state.access_token, state.refresh_token, state.logout])

  if (!access_token) {
    logout()
    return;
  }

  const accessTokenInfo: { exp: number } = jwtDecode(access_token)

  if (Date.now() > accessTokenInfo.exp) {
  // TODO: Criar refresh token
    console.log("teste")
  }

  return <>
    {children}
  </>
}
