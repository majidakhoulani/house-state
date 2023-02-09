// Utilities
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    properties:[],
  }),
  persist: true,
  // getters:{
  //   cartCount(state){
  //     return state.cartContent.length

  //   }
  // },
  // actions:{
  //   addToCard(item){
  //   let index = this.cartContent.findIndex(product => product.id === item.id);
  //   if(index !== -1) {
  //     this.cartContent[index].quantity += 1;
  //   }
  //   else {
  //     item.quantity = 1;
  //     this.cartContent.push(item);
  //   }

  //     },
  //     incrementQ(item) {
  //       let index = this.cartContent.findIndex(product => product.id === item.id);
  //       if(index !== -1) {
  //           this.cartContent[index].quantity += 1;
  //       }
  //   },
  //   decrementQ(item) {
  //       let index = this.cartContent.findIndex(product => product.id === item.id);
  //       if(index !== -1) {
  //           this.cartContent[index].quantity -= 1;
  //           if(this.cartContent[index].quantity === 0){
  //               this.cartContent = this.cartContent.filter(product => product.id !== item.id);
  //           }

  //       }
  //   },
  //     removeFromCart(item) {
  //       this.cartContent = this.cartContent.filter(product => product.id !== item.id);
  //   }

  //   }
  }

)
