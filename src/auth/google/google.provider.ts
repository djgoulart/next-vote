import { AuthProviderType, AuthState } from "@/contexts/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider()
const auth = getAuth();

export async function signInGoogle(): Promise<AuthState> {
  return await signInWithPopup(auth, provider).then((result) => {
    const teste = GoogleAuthProvider.credentialFromResult(result)

    if(!teste) {
      throw new Error()
    }
    const user = result.user

    return {
      auth_provider: result.providerId as AuthProviderType,
      user: {
        email: user.email,
        id: user.uid,
        name: user.displayName,
        picture_url: user.photoURL
      },
      refresh_token: user.refreshToken,
      access_token: teste.accessToken!
    }
  }).catch(err => {
    console.log("Erro login")
    throw err
  })
}

export async function refreshGoogle(accessToken: string, refreshToken: string) {
  return await refreshToken()
}
