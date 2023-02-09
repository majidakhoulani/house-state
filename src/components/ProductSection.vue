<template>
<section class="pt-8 pb-16 bg-grey-lighten-4">
  <div class="text-center pb-16">
<h1 class="text-h3 pa-4 text-primary">Popular Properties</h1>
<p class="text-subtitle-2  text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores</p>
</div>
<div class="text-center">
  <!-- <v-container> -->
    <v-row >
      <v-col v-for="card in cards"
        :key="card" cols="12" sm="4">
        <div class="ma-4">
       <v-card  data-aos="zoom-in"  data-aos-duration="3000">
        <v-img
              :src="card.src"
              class="align-end"
              height="300px"
              cover
            >
           <v-card-title class="text-white text-left w-25 bg-primary ml-4" v-text="card.price" style="border:1px solid #44c662"></v-card-title>
            <v-card-subtitle class="text-white text-left pa-4 text-h6" v-text="card.title"></v-card-subtitle></v-img>

       </v-card>
       </div>
      </v-col>

    </v-row>
  <!-- </v-container> -->
</div>
</section>
</template>
<script>
import AOS from 'aos'
export default{
  data(){
  return{
    cards:[
      {
      src:'../src/assets/cards/property-1.jpg',
      price:'$3000',
      title:'Properties Near in Beach, USA California'
    },
    {
      src:'../src/assets/cards/property-2.jpg',
      price:'$2000',
      title:'Modern House at NZ'
    },
    {
      src:'../src/assets/cards/property-3.jpg',
      price:'$3000',
      title:'Bonggalo House'
    }
  ]
  }
  },
  mounted() {
    AOS.init()
  },
}
</script>
