<template
>
<section class="pt-8 pb-16">
  <div class="text-center pb-16">
<h1 class="text-h3 pa-4 text-primary">Services</h1>
<p class="text-subtitle-2 text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores</p>
</div>
<div class="text-center">
    <v-row gutters>
      <v-col   v-for="item in service"
        :key="item"
        cols="12"
        sm="4">
        <div  class="d-flex direction-column"  data-aos="fade-up"
     data-aos-duration="2000">
       <div><v-icon :icon="item.icon" size="50" class="pa-8 text-grey-lighten-2"></v-icon></div>
       <div class="text-left">
        <h3 class="text-h6 pt-2 pb-2">{{item.title}}</h3>
        <p class="text-subtitle-2">Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.</p>
        <routerLink to="#" variant="text" class="pl-0 text-primary">Learn More</routerLink>
       </div>
      </div>
      </v-col>
    </v-row>
</div>
</section>

</template>
<script>
import AOS from 'aos'
export default{
  data(){
  return{
    service:[
      {
      icon:'mdi-google-maps',
      title:'Move House'
    },
    {
      icon:'mdi-folder-outline',
      title:'Mortgage'
    },
    {
      icon:'mdi-wallet-travel',
      title:'Make Money'
    },
    {
      icon:'mdi-chart-pie',
      title:'Business Home'
    },
    {
      icon:'mdi-grid',
      title:'Marketing'
    },
    {
      icon:'mdi-chat',
      title:'Explorer'
    }
  ]
  }
  },
  mounted() {
    AOS.init()
  }
}
</script>
