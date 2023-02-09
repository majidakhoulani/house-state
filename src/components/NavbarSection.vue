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
      <v-btn variant="plain" to="/property">Properties</v-btn>
      <v-btn variant="plain">Agent</v-btn>
      <v-btn variant="plain">Blog</v-btn>
      <v-btn variant="plain">Contact</v-btn>
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
import { mapState } from 'pinia'
export default{
  setup(){
    const theme = useTheme()
    return{
      theme,
      toggleTheme:() => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  data(){
    return{}
  },
  computed:{
    ...mapState(useCartStore,['cartContent','cartCount'])
  },
  methods:{
    toggleLocal(){
      this.$i18n.locale = this.$i18n.locale ==='ar'?'en':'ar'
      this.$vuetify.locale.current = this.$vuetify.locale.current ==='ar'?'en':'ar'
    }
  }
}
</script>
<style>
.color{
  color:#44c662
}
</style>

