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
