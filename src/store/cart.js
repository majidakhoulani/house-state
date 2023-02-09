// Utilities
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useCartStore = defineStore('cart', {
  state: () => ({
    properties:[],
   cartContent:[],
   cartItensCount:0,
  //  quantity :0,
  //  id:0
  }),
  persist: true,
  getters:{
    cartCount(state){
      return state.cartContent.length

    }
  },
  actions:{
    addToCard(item){
      // if(this.cartContent.hasOwnProperty(productId)){
      //   this.cartContent[productId]={
      //     productId,
      //     quantity:this.cartContent[productId].quantity+1}
      //   }
      //   else{
      //     this.cartContent[productId]={
      //       productId,
      //       quantity:1
      //     }
      //   }
     //this.cartContent.push(product);
    //  console.log(this.cartContent)
    let index = this.cartContent.findIndex(product => product.id === item.id)
    if(index !== -1) {
      this.cartContent[index].quantity += 1
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been updated',
        showConfirmButton: false,
        timer: 1500
      });
    }
    else {
      item.quantity = 1
      this.cartContent.push(item)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your item has been added',
        showConfirmButton: false,
        timer: 1500
      });
    }

      },
      incrementQ(item) {
        let index = this.cartContent.findIndex(product => product.id === item.id);
        if(index !== -1) {
            this.cartContent[index].quantity += 1;
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your item has been updated',
              showConfirmButton: false,
              timer: 1500
          });
        }

    },
    decrementQ(item) {
        let index = this.cartContent.findIndex(product => product.id === item.id);
        if(index !== -1) {
            this.cartContent[index].quantity -= 1;
            if(this.cartContent[index].quantity === 0){
                this.cartContent = this.cartContent.filter(product => product.id !== item.id);
            }
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your item has been updated',
              showConfirmButton: false,
              timer: 1500
          });

        }
    },
      removeFromCart(item) {
        this.cartContent = this.cartContent.filter(product => product.id !== item.id)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your item has been removed',
          showConfirmButton: false,
          timer: 1500
        });
    }

    }
  }

)
