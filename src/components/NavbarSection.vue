<template>
    <v-app-bar
  >
    <template v-slot:prepend>
      <v-icon
          start
          icon="mdi-home"
          color="primary"
        ></v-icon>
    </template>

    <v-app-bar-title class="text-primary">HomeState</v-app-bar-title>

    <template v-slot:append>
      <v-btn class="text-grey-darken-4" variant="plain" to="/">Home</v-btn>
      <v-btn variant="plain" to="/property" v-if="isLoggedIn">Properties</v-btn>
      <v-btn variant="plain">Agent</v-btn>
      <v-btn variant="plain">Blog</v-btn>
      <v-btn variant="plain">Contact</v-btn>
      <form>
        <!--           data-bs-toggle="modal"
            data-bs-target="#login" -->
            <!-- v-if="!isLoggedIn" -->
          <v-btn

            class="btn btn-outline-primary mx-2"
            to="/sign-in"

          >
            Sign in
          </v-btn>
          <!-- Cerrar sesión -->
          <v-btn
            v-if="isLoggedIn"
            class="btn btn-outline-danger me-2"
            @click="signout()"
          >
            Log out
          </v-btn>
          <!-- Regístrate -->
          <!-- data-bs-toggle="modal" -->
            <!-- data-bs-target="#registro" -->
          <v-btn
            v-if="!isLoggedIn"
            type="button"
            class="btn btn-outline-warning"

            to="/log-in"
          >
            Regístrate
          </v-btn>
        </form>
       <v-btn variant="plain"  to="/cart">
        <!-- {{cartCount }} -->
        <v-badge
        :content="cartCount"
        floating
        color="red-darken-2 "
        size="small"
        class="text-white"
      >
      <v-icon color="primary" size="24">mdi-cart</v-icon>
      </v-badge>
      </v-btn>
      <v-btn variant="plain" @click="toggleTheme">
        <v-icon color="primary" size="24">mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-btn variant="plain" @click="toggleLocal">
        <v-icon color="primary" size="24">{{$i18n.locale === 'en' ? 'mdi-abjad-arabic' : 'mdi-alpha-e' }}</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
import { useTheme } from 'vuetify'
import { useCartStore } from '@/store/cart'
import { mapActions, mapState } from 'pinia'
import { almacen } from "@/store/auth"
// const datos = almacen();
export default{
  setup(){
    const theme = useTheme()
    return{
      theme,
      toggleTheme:() => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  data(){
    return{
      // isLoggedIn:'true'
    }
  },
  computed:{
    ...mapState(useCartStore,['cartContent','cartCount']),
    ...mapState(almacen ,['isLoggedIn'])
  },
  methods:{
    toggleLocal(){
      this.$i18n.locale = this.$i18n.locale ==='ar'?'en':'ar'
      this.$vuetify.locale.current = this.$vuetify.locale.current ==='ar'?'en':'ar'
    },
    ...mapActions(almacen ,['signout'])

  }
}
</script>
<style>
.color{
  color:#44c662
}
</style>

