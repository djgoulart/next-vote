"use client"

import { signInGitHub } from "@/auth/github/github.provider"
import { signInGoogle } from "@/auth/google/google.provider"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/contexts/auth"
import { GithubIcon } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaGit, FaGithub, FaGoogle } from "react-icons/fa";

export default function Login() {
  const loginUser = useAuthStore(state => state.loginUser)
  const redirect = useRouter()

  const handleSignInGoogle = async () => {
    const resp = await signInGoogle()
    loginUser(resp)
    redirect.push("/")
  }

  const handleSignInGitHub = async () => {
    const resp = await signInGitHub()
    loginUser(resp)
    redirect.push("/")
  }
  return (
    <div className="w-full min-h-screen flex align-items-center justify-content-center">
      <Button onClick={() => handleSignInGitHub()}>
        <p className="pr-3">
          GitHub
        </p>
        <FaGithub size="24" />
      </Button>
      <Button variant="link" onClick={() => handleSignInGoogle()}>
        <p className="pr-3">
          Google
        </p>
        <FaGoogle size="24" />
      </Button>
    </div>
  )
}
