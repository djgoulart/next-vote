import { decodeBase64 } from "@/lib/utils";
import { User } from "@/models/user";
import { create } from "zustand"

const ACCESS_TOKEN_KEY = "vote:access_token"
const REFRESH_TOKEN_KEY = "vote:refresh_token"
const USER_KEY = "vote:user"

type LoginUserType = {
  user: User
  access_token: string
  refresh_token: string
}
export type AuthProviderType = "github.com" | "google.com";

export type AuthState = {
  user: User | null
  access_token: string | null
  refresh_token: string | null
  auth_provider: AuthProviderType | null
}

type Action = {
  loginUser(data: AuthState): void
  logout(): void
}


export const useAuthStore = create<AuthState & Action>((set) => ({
  user: localStorage.getItem(USER_KEY) ? JSON.parse(localStorage.getItem(USER_KEY) ?? "") : null,
  access_token: localStorage.getItem(ACCESS_TOKEN_KEY),
  refresh_token: localStorage.getItem(REFRESH_TOKEN_KEY),
  auth_provider: null,
  loginUser(data) {
    console.log(data)
    localStorage.setItem(ACCESS_TOKEN_KEY, data.access_token!)
    localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token!)
    localStorage.setItem(USER_KEY, JSON.stringify(data.user))

    const authProviderDecoded = data.auth_provider

    if (authProviderDecoded !== "github.com" && authProviderDecoded !== "google.com") {
      return false
    }

    set({
      user: data.user,
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      auth_provider: authProviderDecoded
    })
  },
  logout() {
    set({
      user: null,
      access_token: null,
      refresh_token: null,
      auth_provider: null
    })
  }
}))
