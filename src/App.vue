<template>
  <router-view />
</template>

<script setup>
  import { RouterView } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { almacen } from './store/auth'

const datos = almacen()

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    datos.isLoggedIn = true;
    console.log('verdadero')
  } else {
    datos.isLoggedIn = false;
    console.log('false')
  }
});
</script>
