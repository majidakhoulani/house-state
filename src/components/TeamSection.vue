<template>

<section class="pt-8 pb-16 bg-primary">
  <div class="text-center pb-16">
<h1 class="text-h3 pa-4 text-white">Our Agents</h1>
<p class="text-subtitle-2  text-grey-lighten-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores</p>
</div>
<div class="text-center">
  <v-row no-gutters>
                  <v-col v-for="team in teamList" :key="team.id" cols="12" sm="3"
                      class="d-flex  mb-6 justify-space-around" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"   data-aos-duration="2000">
                      <div align="center">
                        <div>
                          <v-img :src="team.src" height="200px" width="200px" cover class="rounded-circle mb-4"
                            ></v-img>
                          </div>

                              <div class="w-100 pa-2">
                          <h3 class="mt-6 font-weight-bold  text-white" color="#212529" v-text="team.title"></h3>
                          <p class="mt-2 mb-4 text-grey-lighten-2"  v-text="team.explain"></p>
                          <a href="#" class="ma-2">
                              <v-icon color="white">
                                  mdi-twitter
                              </v-icon>

                          </a>
                          <a :href="team . href" class="ma-2">
                              <v-icon color="white">
                                  mdi-github
                              </v-icon>

                          </a>
                          <a href="#" class="ma-2">
                              <v-icon x-large color="white">
                                  mdi-linkedin
                              </v-icon>
                          </a>
                        </div>
                        </div>

                  </v-col>
              </v-row>
</div>
</section>
</template>

<script>
import AOS from 'aos'
  export default {
  data: () => ({

        teamList: [{
                  id: 1,
                  src: '/assets/clients/user-1.jpg',
                  title: 'Jean Smith',
                  explain: 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat',
                  href:'https://github.com/majidakhoulani'

              },
              {
                  id: 2,
                  src: '/assets/clients/user-2.jpg',
                  title: 'Hush Raven',
                  explain: 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat',
                  href:'https://github.com/majidakhoulani'
              },
              {
                  id: 3,
                  src: '/assets/clients/user-3.jpg',
                  title: 'Alex King',
                  explain: 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat',
                  href:'https://github.com/majidakhoulani'
              },
              {
                  id: 4,
                  src: '/assets/clients/user-4.jpg',
                  title: 'Hush Raven',
                  explain: 'Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat',
                  href:'https://github.com/TaiseerAlmedani'
              },
          ],
      }),
      mounted(){
        AOS.init()
        }
  }
</script>

<style>

  a {
      text-decoration: none;
  }
</style>
