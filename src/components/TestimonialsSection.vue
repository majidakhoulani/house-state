<template>
    <section class="pt-8 pb-16 bg-grey-lighten-4">
        <v-img src="/assets/cards/cover_bg_1.jpg" cover>
            <div class="text-center pb-16 pt-4">
                <h1 class="text-h3 pa-4 text-primary">Happy Clients</h1>
                <!-- <p class="text-subtitle-2  text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores</p> -->
            </div>
            <div class="text-center pt-2">
                <!-- <v-container> -->
                <v-row>
                    <v-col v-for="testimonial in testimonials" :key="card" cols="12" sm="4" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"   data-aos-duration="2000">
                        <div class="ma-4">
                          <v-progress-linear
            color="primary"
            indeterminate

            height="5"
         class="w-100"

          ></v-progress-linear>

                            <v-card :height="testimonial.height"  class="pa-4 rounded-0" >


                                <!-- <v-img
              :src="card.src"
              class="align-end"
              height="300px"
              cover
            >
           <v-card-title class="text-white text-left w-25 bg-primary ml-4" v-text="card.price" style="border:1px solid #44c662"></v-card-title>
            <v-card-subtitle class="text-white text-left pa-4 text-h6" v-text="card.title"></v-card-subtitle></v-img> -->
                                <div class="testimonial-container  added-box">
                                  <!-- <span class="testimonial-icon rounded-circle "> -->

                                    <!-- </span> -->

                                    <v-card-text class="testimonial text-left">
                                      <v-icon icon="mdi-format-quote-open" size="25" class="rounded-circle text-left" color="primary"></v-icon>
                                       {{testimonial.description}}
                                      <v-icon icon="mdi-format-quote-close text-right"  size="25" class="rounded-circle" color="primary"></v-icon>
                                    </v-card-text>

                                    <div>
                                        <v-img :src="testimonial.src" alt="user"
                                            width="50" height="50" class="rounded-circle ma-auto"/>
                                        <div>
                                            <v-card-title  v-text="testimonial.title"/>
                                            <v-card-subtitle  v-text="testimonial.subtitle"/>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="bg-red"></div> -->
                            </v-card>
                        </div>
                    </v-col>

                </v-row>
                <!-- </v-container> -->
            </div>
        </v-img>
    </section>
</template>
<script>
import AOS from 'aos'
    export default {
        data() {
            return {
              testimonials: [{
                        description:' Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgr right at the coast of the Semantics, a large language ocean.',
                        src: '/assets/testimonials/testimonials-4.jpg',
                        title: 'John Doe',
                        subtitle: 'Sales',
                        height:'298'
                    },
                    {
                      description:' Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgr right at the coast of the Semantics, a large language ocean.',
                        src: '/assets/testimonials/testimonials-6.jpg',
                        title: 'Mia Asano',
                        subtitle: 'Sales',
                        height:'260'
                    },
                    {
                      description:' Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgr right at the coast of the Semantics, a large language ocean.',
                        src: '/assets/testimonials/testimonials-5.jpg',
                        title: 'Jusef Aswan',
                        subtitle: 'Sales',
                        height:'298'
                    }
                ]
            }
        },
        mounted(){
        AOS.init()
        }
      // methods:{
        //   trucate(value, length = 50) {
        //         return value.length <= length ?
        //             value : value.substring(0, length) + "...";
        //     },
        // }
    }
</script>
<style>
/* .added-box::after{
  content: "";
    position: absolute;
    top: 100%;
    left: 40px;
    border-top: 15px solid black;
    border-top-color: #fff;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;

} */
</style>
