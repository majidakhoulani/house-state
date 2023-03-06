import { defineStore } from "pinia";
import router from "../router/index";
import firebaseConfig from '@/firebaseConfig'
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
export const almacen = defineStore({
  id: "main",
  state: () => ({
    isLoggedIn: true,
    email: "",
    password: "",
    repassword: "",
    errorMessage: "",
  }),
  getters: {},
  actions: {
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("successfully registered");
          router.push("/property");
        })
        //      .then((data) => {
        //   const user = userCredential.user;
        //   alert("successfully registered");
        //   router.push("/property");
        // })
        .catch((error) => {
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },

    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("successfully sign in");
          router.push("/property");
        })
        .catch((error) => {
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },
    SignINWithGoogle(){
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth,provider)
        .then((result) => {
          alert("successfully sign in");
          // router.push("/property");
          const user = result.user;
          console.log( user)
        })
        .catch((error) => {
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });

    },
    signout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          alert("Session finished!");
          router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },
  },
});
