import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import {app} from "../../lib/firebase/firebase"
import { AuthProviderType, AuthState } from "@/contexts/auth";

console.log(app)
const provider = new GithubAuthProvider()
const auth = getAuth();
export async function signInGitHub(): Promise<AuthState> {
  return await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (!credential) {
        throw new Error("")
      }
      const token = credential.accessToken;

      const user = result.user;
      if (!user) {
        throw new Error("")
      }

      return {
        auth_provider: result.providerId as AuthProviderType,
        user: {
          email: user.email,
          id: user.uid,
          name: user.displayName,
          picture_url: user.photoURL
        },
        refresh_token: user.refreshToken,
        access_token: token!
      }
    }).catch((error) => {
      console.log(error)
      throw error
    });
}
