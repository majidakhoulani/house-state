<template>
    <v-app-bar class="hidden-sm-and-down">
        <template v-slot:prepend>
            <v-icon start icon="mdi-home" color="primary"></v-icon>
        </template>

        <v-app-bar-title class="text-primary">HomeState</v-app-bar-title>

        <template v-slot:append >
            <v-btn class="text-grey-darken-4" variant="plain" to="/">Home</v-btn>
            <v-btn variant="plain" v-if="isLoggedIn" to="/property">Properties</v-btn>
            <v-btn variant="plain">Agent</v-btn>
            <v-btn variant="plain">Blog</v-btn>
            <v-btn variant="plain">Contact</v-btn>
            <v-btn variant="plain" to="/sign-in">
                Sign in
            </v-btn>
            <v-btn v-if="isLoggedIn" variant="plain" @click="signout()">
                Log out
            </v-btn>
            <v-btn v-if="!isLoggedIn" variant="plain" to="/log-in">
                Regíster
            </v-btn>
            <v-btn variant="plain" to="/cart">
                <v-badge :content="cartCount" floating color="red-darken-2 " size="small" class="text-white">
                    <v-icon color="primary" size="24">mdi-cart</v-icon>
                </v-badge>
            </v-btn>
            <v-btn variant="plain" @click="toggleTheme">
                <v-icon color="primary" size="24">mdi-theme-light-dark</v-icon>
            </v-btn>
            <v-btn variant="plain" @click="toggleLocal">
                <v-icon color="primary" size="24">{{ $i18n . locale === 'en' ? 'mdi-abjad-arabic' : 'mdi-alpha-e' }}
                </v-icon>
            </v-btn>
            <!-- <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu> -->
        </template>

    </v-app-bar>
    <!-- <button v-if="!isOpen" @click="isOpen=true">Open Menu</button> -->
  <!-- <Slide :isOpen="isOpen" @closeMenu="isOpen = false"> -->
    <Slide class="hidden-md-and-up mb-4 slide-height"  width="150" :closeOnNavigation="true" >
      <v-btn class="text-grey-darken-4" variant="plain" to="/">Home</v-btn>
      <v-btn variant="plain" v-if="isLoggedIn" to="/property">Properties</v-btn>
      <v-btn variant="plain" to="/sign-in">
                Sign in
            </v-btn>
            <v-btn v-if="isLoggedIn" variant="plain" @click="signout()">
                Log out
            </v-btn>
            <v-btn v-if="!isLoggedIn" variant="plain" to="/log-in">
                Regíster
            </v-btn>
            <v-btn variant="plain" to="/cart">
                <v-badge :content="cartCount" floating color="red-darken-2 " size="small" class="text-white">
                    <v-icon color="primary" size="24">mdi-cart</v-icon>
                </v-badge>
            </v-btn>
    </Slide>
</template>
<script>
import { Slide } from 'vue3-burger-menu'
    import {
        useTheme
    } from 'vuetify'
    import {
        useCartStore
    } from '@/store/cart'
    import {
        mapActions,
        mapState
    } from 'pinia'
    import {
        almacen
    } from "@/store/auth"
    // const datos = almacen();
    export default {
        setup() {
            const theme = useTheme()
            return {
                theme,
                toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
            }
        },
        components:{
          Slide
        },
        data() {
            return {
              // isOpen: false
                // isLoggedIn:'true'
            }
        },
        computed: {
            ...mapState(useCartStore, ['cartContent', 'cartCount']),
            ...mapState(almacen, ['isLoggedIn'])
        },
        methods: {
            toggleLocal() {
                this.$i18n.locale = this.$i18n.locale === 'ar' ? 'en' : 'ar'
                this.$vuetify.locale.current = this.$vuetify.locale.current === 'ar' ? 'en' : 'ar'
            },
            ...mapActions(almacen, ['signout'])

        }
    }
</script>
<style>
    .color {
        color: #44c662
    }
    .slide-height{
      height: 1px !important;
    }
    
</style>
