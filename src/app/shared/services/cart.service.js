'use strict';

class CartService {
  constructor() {
    this.cartItems = [];
  }

  getLineItems() {
    return this.cartItems;
  }

  addItemToCart(item) {
    this.cartItems.push(item);
    console.log('cart service: ', item);
  }

  removeItemFromCart(item) {

    let _itemIndex = this.cartItems.indexOf(item);

    if (_itemIndex >= 0 ) {
      this.cartItems.splice(_itemIndex, 1);
    }
  }

  getCartLength() {
    return this.cartItems.length;
  }

}

// CartService.$inject = ['$http'];

export default CartService;
