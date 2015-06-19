'use strict';

class CartCtrl {
  constructor(CartService) {
    this.cartService = CartService;
    this.cartItems = [];
    this.updateCart();
  }

  removeItem(item) {
    this.cartService.removeItemFromCart(item);
    // this.updateCart();
  }

  updateCart() {
    this.cartItems = this.cartService.getLineItems();
  }

}

CartCtrl.$inject = ['CartService'];

export default CartCtrl;
