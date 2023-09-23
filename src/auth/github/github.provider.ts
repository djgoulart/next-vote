import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { app, db } from "@/lib/firebase/firebase";
import { useAuthStore } from "@/contexts/auth";
// FIXME: Se eu nao colocar console log no app, ele reclama que o firebase nao foi iniciado
console.log(app)

const provider = new GithubAuthProvider()
const auth = getAuth();
export async function signInGitHub() {
  return await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (!credential) {
        return
      }
      const token = credential.accessToken;

      const user = result.user;
      if (!user) {
        return
      }

      return {
        auth_provider: "Github",
        user: {
          email: user.email,
          id: user.uid,
          name: user.displayName,
          picture_url: user.photoURL
        },
        refresh_token: user.refreshToken,
        access_token: token
      }
    }).catch((error) => {
      console.log(error)
    });
}
