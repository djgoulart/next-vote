"use client"

import { signInGitHub } from "@/auth/github/github.provider"
import { useAuthStore } from "@/contexts/auth"

export default function Login() {
  const loginUser = useAuthStore(state => state.loginUser)
  const handleSignIn = async () => {
    const resp = await signInGitHub()
    loginUser(resp)
  }
  return <>
    <button onClick={handleSignIn}>Github</button> </>
}
