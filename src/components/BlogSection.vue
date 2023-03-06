<template>
<section class="pt-8 pb-16 bg-grey-lighten-4">
  <div class="text-center pb-16">
<h1 class="text-h3 pa-4 text-primary">Recent From Blog</h1>
<p class="text-subtitle-2  text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores</p>
</div>
<div>
  <!-- <v-container> -->
    <v-row >
      <v-col v-for="blog in blogs"
        :key="blog" cols="12" sm="4">
        <div class="ma-4">
       <v-card  data-aos="zoom-in"  data-aos-duration="3000">
        <v-img
              :src="blog.src"
              class="align-end"
              height="300px"
              cover
            ></v-img>
            <v-card-title class="pt-4" v-text="blog.title"/>
            <div class="d-flex">
            <v-card-subtitle  v-text="blog.subtitle"/>
            <v-spacer></v-spacer>
            <v-card-subtitle>21</v-card-subtitle>
            <v-icon icon="mdi-chat" class="text-primary pr-4"/>
          </div>
            <v-card-text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</v-card-text>
            <v-card-text class="text-primary">
              <rounter-link>Learn More...</rounter-link>
            </v-card-text>

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
    blogs:[
      {
      src:'/assets/cards/property-1.jpg',
      title:'Properties for sale',
      subtitle:'Sep. 15th',
      explain:''
    },
    {
      src:'/assets/cards/property-2.jpg',
      title:'Modern Home',
      subtitle:'Dec. 20th',
      explain:''
    },
    {
      src:'/assets/cards/property-3.jpg',
      title:'15% Deal Discount For House',
      subtitle:'Oct. 10th',
      explain:''
    }
  ]
  }
  },
  mounted() {
    AOS.init()
  },

}
</script>
