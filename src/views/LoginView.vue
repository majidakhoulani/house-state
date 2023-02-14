<template>
  <section class="login text-center pt-16 pb-16">
      <div class="login-title pt-6">
          <h1 class="text-h4 font-weight-bold pb-2 text-dark">Create an Account</h1>
          <p class="text-grey font-italic">Welcome To Our Website</p>
      </div>
      <div class="login-content mt-12 ">
          <v-container>
              <v-row no-gutters>
                  <v-col cols="4" class="ma-auto">
                    <!-- @submit.prevent="submit" -->
                      <v-form >
                          <v-text-field type="text" v-model="email" label="Email"></v-text-field>

                          <v-text-field v-model="password" type="password" label="Password">
                          </v-text-field>
                          <v-btn color="#ffc800" elevation="2" class="mt-12 pa-2 h-50 mr-16" width="150px"
                              type="submit" @click="register">
                              <span class="text-white text-uppercase text-h6">Register</span>
                          </v-btn>
                          <v-btn color="#ffc800" elevation="2" class="mt-12 pa-2 h-50" width="150px"
                              type="submit" @click="SignINWithGoogle">
                              <span class="text-white text-uppercase text-h6">SignINWithGoogle</span>
                          </v-btn>
                      </v-form>
                  </v-col>
              </v-row>
          </v-container>
      </div>
  </section>

  <TheFooter />
</template>
<script>
import { almacen } from '@/store/auth'
import { mapState } from 'pinia'
import { mapActions } from 'pinia'
// import {
//   getAuth,
//   signOut,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
export default{
  computed:{
    ...mapState(almacen ,['email','password'])
  },
  // data(){
  //   return{
  //   password:'',
  //   email:'',
  //   errorMessage: ''
  //   }

  // },
  methods:{
    ...mapActions(almacen ,['register'])
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

  }
}
  // export default {
  //     data() {
  //         return {
  //             email: '',
  //             password: '',
  //         }
  //     },
  //     methods: {
  //         submit() {
  //             this.login(this.username, this.password)
  //         },
  //         ...mapActions(useUserStore, ['login'])
  //     }
  // }
</script>
<style>
  .login {
      background-color: #F8F9FA;
  }
</style>
