<template>
  <!-- <v-parallax
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        Vuetify
      </h1>
      <h4 class="subheading">
        Build your application today!
      </h4>
    </div>
  </v-parallax> -->
  <v-carousel
   cycle
   height="600"
   hide-delimiter-background
   show-arrows-on-hover
>
   <v-carousel-item
   v-for="(slide, i) in slides"
   :key="i"
   eager
   >
      <v-parallax :src="slide.src" height="600"></v-parallax>
   </v-carousel-item>
</v-carousel>
</template>
<script>
export default{
  data(){
    return{
      slides:[{
        id:1,
        src:'../src/assets/hero/img_bg_1.jpg',


      },
      {
        id:2,
        src:'../src/assets/hero/img_bg_2.jpg',

      },
      {
        id:2,
        src:'../src/assets/hero/img_bg_3.jpg',

      }
    ]
    }
  }
}
</script>

