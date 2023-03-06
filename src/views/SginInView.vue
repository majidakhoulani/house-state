<template>
  <section class="login text-center pt-16 pb-16 h-100">
    <div  class=" text-center w-50 ma-auto" style="background-color:#536642">
      <div class="login-title pt-6">
          <h1 class="text-h4 font-weight-bold pb-2 text-primary">SignIN to an Account</h1>
          <p class=" font-italic" style="color: rgb(228, 190, 141)">Welcome To Our Website</p>
      </div>
      <div class="login-content mt-12 ">
          <v-container>
              <v-row no-gutters>
                  <v-col cols="12" class="ma-auto" xs="12" sm="9" >
                    <!-- @submit.prevent="submit" -->
                      <v-form >
                          <v-text-field type="text" v-model="email" label="Email" variant="solo"></v-text-field>

                          <v-text-field v-model="password" type="password" label="Password" variant="solo">
                          </v-text-field>
                          <v-btn elevation="2" class="mt-4 mb-4 pa-2 h-50 w-100 mr-12"
                              @click="signIn" style="border-color:#44c662;background-color:#536642"  variant="outlined">
                              <span class="text-white text-uppercase text-h6">SignIn</span>
                          </v-btn>
                          <v-btn elevation="2" class="mt-4 mb-4 pa-2 w-100 h-50"
                              @click="SignINWithGoogle" style="border-color:#44c662;background-color:#536642" variant="outlined">
                              <span class="text-white text-uppercase text-h6">WithGoogle</span>
                          </v-btn>
                      </v-form>
                  </v-col>
              </v-row>
          </v-container>
      </div>
    </div>
  </section>

  <TheFooter />
</template>
<script>
import { almacen } from '@/store/auth'
import { mapState,mapWritableState } from 'pinia'
import { mapActions } from 'pinia'
export default{
  computed:{
    ...mapWritableState(almacen ,['email','password'])
  },
  methods:{
    ...mapActions(almacen ,['signIn','SignINWithGoogle'])

  }
}
</script>
<style>
  .login {
      background-color: rgb(228, 190, 141);
  }
</style>
