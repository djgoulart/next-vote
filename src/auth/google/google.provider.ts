import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider()
const auth = getAuth();

export async function signInGoogle() {
  return await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      if (!credential) {
        console.log("Falhou aqui 1 ")
      }
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      console.log(error)
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
