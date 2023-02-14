import { defineStore } from "pinia";
import router from "../router/index";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
    // register() {
    //   const auth = getAuth();
    //   createUserWithEmailAndPassword(auth, this.email.value, this.password.value)
    //     // .then((userCredential) => {
    //     //   const user = userCredential.user;
    //     //   alert("successfully registered");
    //     //   router.push("/property");
    //     // })
    //          .then((data) => {
    //       const user = userCredential.user;
    //       alert("successfully registered");
    //       router.push("/property");
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       this.errorMessage = error.message;
    //       alert(this.errorMessage);
    //     });
    // },

    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          alert("successfully sign in");
          router.push("/property");
          const user = userCredential.user;
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
          alert("¡Sesión finalizada!");
        })
        .catch((error) => {
          const errorCode = error.code;
          this.errorMessage = error.message;
          alert(this.errorMessage);
        });
    },
  },
});
