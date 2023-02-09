<!-- <template>
      <section class="pt-8 pb-16">
        <div class="text-center">
          <v-row>
                <v-col v-for="card in  cartContent" :key="card.id" cols="12" sm="4">
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
                                <v-card-subtitle class="text-h5 text-primary pt-4 pb-4">$ {{ card . price }} - {{ card.quantity }}</v-card-subtitle>
                                <v-card-text class="text-subtitle-4 text-grey pt-4 pb-4">{{ card . description }}</v-card-text>

                                <v-btn variant="text" color="primary" @click="removeFromCart(card.id)" >
                                    <v-icon class="text-red" size="24">mdi-delete</v-icon>
                                    removeFromCard
                                </v-btn>
                                <v-divider></v-divider>
                                <v-icon class="text-subtitle-4 text-grey pt-4 pb-4">mdi-google-maps</v-icon>
                                <span class="text-subtitle-4 text-grey-darken-2  pt-4 pb-4">{{ card . address }}</span>
                            </div>

                        </v-card>
                    </div>
                </v-col>

            </v-row>
        </div>
    </section>
</template> -->
<template>
  <div class="row my-4">
      <div cols="12">
          <!-- <div class="card">
              <div class="card-body"> -->
                  <table class="table">
                      <thead class="bg-grey-darken-2">
                          <tr class="">
                              <th class="pa-4">#</th>
                              <th class="pa-4">Image</th>
                              <th class="pa-4">Name</th>
                              <th class="pa-4">Quantity</th>
                              <th class="pa-4">Price</th>
                              <th class="pa-4">Subtotal</th>
                              <th class="pa-4">Delete</th>
                          </tr>
                      </thead>
                      <tbody class="text-center">
                          <tr v-for="item in cartContent" :key="item.id">
                              <td class="table-body">{{item.id}}</td>
                              <td class="table-body">
                                  <img :src="item.image"
                                  class="fluid rounded"
                                  width="150"
                                  height="150"
                                   />
                              </td>
                              <td class="table-body">
                                  {{item.title}}
                              </td>
                              <td class="table-body">
                                  <v-icon icon="mdi-plus"
                                  @click="incrementQ(item)"
                                   ></v-icon>
                                  <span class="mx-2">
                                      {{item.quantity}}
                                  </span>
                                  <v-icon icon="mdi-minus"
                                  @click="decrementQ(item)"
                                      ></v-icon>
                              </td>
                              <td class="table-body">
                                  ${{item.price}}
                              </td>
                              <td class="table-body">
                                  ${{item.price * item.quantity}}
                              </td>
                              <td class="table-body">

                                      <v-icon @click="removeFromCart(item)" class="text-red" size="24">mdi-delete</v-icon>
                              </td>
                          </tr>
                          <tr>
                              <th colSpan="3" class="text-center table-body">
                                  Total
                              </th>
                              <td colSpan="4" class="text-center table-body" >
                                  <span class="badge bg-danger rounded-pill">
                                      ${{cartContent.reduce((acc,item) => acc += item.price * item.quantity,0) }}
                                  </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      <!-- </div>
  </div> -->
</template>

<script>
import { useCartStore } from '@/store/cart';
import { mapActions, mapState } from 'pinia';
export default{
  computed:{
    ...mapState(useCartStore,['cartContent','quantity'])
  },
methods:{
  ...mapActions(useCartStore,['removeFromCart','incrementQ','decrementQ'])
}
}

</script>
<style>
.table-body{
border-style: solid;
border-width: 1px;
border-color:grey;
}
</style>
