"use client"

import { useAuthStore } from "@/contexts/auth"
import jwtDecode from "jwt-decode"
import { useRouter } from "next/navigation"
import Navbar from "../Navbar"


export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const [access_token, refresh_token, logout] = useAuthStore(state => [state.access_token, state.refresh_token, state.logout])

  const navigate = useRouter()

  if (!access_token) {
    navigate.push("/login")
  }

  return <>
    <Navbar />
    {children}
  </>
}
