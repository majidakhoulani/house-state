<template>
    <section class="pt-8 pb-16 bg-grey-lighten-4">
        <div class="text-center pb-16">
            <h1 class="text-h3 pa-4 text-primary">Newest Properties</h1>
            <p class="text-subtitle-2  text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est
                facilis maiores</p>
        </div>
        <!-- <div class="pt-8 pb-16">
          <v-img   src='@/assets/cards/cover_bg_1.jpg' cover height="400"></v-img>
        </div> -->
        <!-- <div class="pt-8 pb-8 w-50 " > -->
          <v-row>
            <v-col cols="12" sm="4">

              <v-select    transition="fab-transition"
     label="category" :items="['Sale','Rent','all']" v-model.trim="categoryType" class="pa-8"></v-select>

            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="4" class="d-flex direction-row pa-8">
              <v-text-field label="search" v-model.trim="searchValue"></v-text-field>

            </v-col>
          </v-row>
        <!-- </div> -->

        <div class="text-center">
            <!-- <v-container> -->
            <v-row>
                <v-col v-for="card in filterProduct" :key="card.id" cols="12" sm="4">
                    <div class="ma-4">
                        <v-card>
                            <v-img :src="card.image" class="align-end" height="300px" cover>
                                <v-list class=" h-50 bg-surface-variant d-flex direction-row text-h6">
                                    <v-list-item v-for="link in card.details" :key="link.title"
                                        class="text-subtitle-2">{{ link . square }}</v-list-item>
                                    <v-list-item v-for="link in card.details" :key="link.title"
                                        class="text-subtitle-2">{{ link . roomNumber }} </v-list-item>
                                    <v-list-item v-for="link in card.details" :key="link.title"
                                        class="text-subtitle-2">{{ link . bathNumber }} </v-list-item>
                                    <v-list-item v-for="link in card.details" :key="link.title"
                                        class="text-subtitle-2">{{ link . garageNumber }} </v-list-item>
                                </v-list>
                            </v-img>
                            <div class="property-details text-left bg-grey-lighten-4 pa-2">
                                <v-card-text class="text-h6 text-grey-darken-4 pt-4 pb-4">{{ card . title }}</v-card-text>
                                <v-card-text class="text-h5 text-primary pt-4 pb-4">$ {{ card . price }}</v-card-text>
                                <v-card-subtitle class="text-subtitle-4 text-grey pt-4 pb-4">{{ card . description }}</v-card-subtitle>
                                <v-btn variant="text" color="primary" @click="addToCard(card)" >
                                    <v-icon color="primary" size="24">mdi-cart</v-icon>
                                    addToCard
                                </v-btn>

                                <v-divider></v-divider>
                                <v-icon class="text-subtitle-4 text-grey pt-4 pb-4">mdi-google-maps</v-icon>
                                <span class="text-subtitle-4 text-grey-darken-2  pt-4 pb-4">{{ card . address }}</span>
                            </div>

                        </v-card>
                    </div>
                </v-col>

            </v-row>
            <!-- </v-container> -->
        </div>
    </section>
</template>
<script>
    import axios from 'axios'
import { useCartStore } from '@/store/cart';
import { mapState } from 'pinia';
import { mapActions } from 'pinia';
import AOS from 'aos'
    export default {
        data() {
            return {
                properties: [],
                categoryType: null,
                searchValue:''
            }
        },
        created() {
            this.loadProperties()

        },
        computed:{
          filterProduct(){
            if(this.searchValue !='' && this.searchValue){
              return this.properties.filter((item)=>{
                return item.title.toLowerCase().includes(this.searchValue.toLowerCase()) ||  item.description.toLowerCase().includes(this.searchValue.toLowerCase())
              })
            }
            if(this.categoryType ==='all'){
              return this.properties.filter((item)=>{
                return item
              })
            }
            if(this.categoryType){
              return this.properties.filter((item)=>{
                return (item.category === this.categoryType)
              })
            }
            return this.properties
          }
        },
        mounted() {
    AOS.init()
  },
        methods: {

            loadProperties() {
                this.axios.get('http://localhost:3000/db.json')
                    .then(response => {
                        this.properties = response.data.properties
                    })
            },
            ...mapActions(useCartStore,['addToCard'])

        }
    }
</script>
