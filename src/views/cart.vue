<template>
    <v-card  class="pt-4">
      <v-card-text class="bg-surface-light pt-4">
        <v-card-title class="cart-title">
          Ksh{{ total }}
          <v-btn 
            class="checkout-btn"
            text
          >Checkout</v-btn>
        </v-card-title>
        <v-row>
          <v-col cols="10" md="4" v-for="product in cartItems" :key="product.itemName">
            <v-card class="product-card mx-auto my-10" max-width="300">
              <img height="250" width="300" :src="product.itemImage" cover />
              <div class="product-details">
                <v-card-item class="product-name">{{ product.itemName }}</v-card-item>
                <v-card-item class="product-price">Ksh{{ product.itemPrice }}</v-card-item>
                <v-card-text class="product-description">{{ product.description }}</v-card-text>
                <v-divider class="mx-4 mb-1"></v-divider>
                <v-card-actions>
                  <v-btn
                    class="remove-btn"
                    color="red"
                    text
                    block
                    @click="removeFromCart(product)"
                  >
                    Remove
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    data() {
      return {};
    },
    methods: {
      ...mapActions('cart', [
        'removeFromCart',
      ]),
    },
    computed: {
      ...mapGetters('cart', {
        cartItems: 'cart',
        total: 'totalCartAmount',
      }),
    },
  };
  </script>
  
  <style scoped>
  /* Blue and White Theme */
  .cart-title {
    font-size: 1.5rem;
    color: #fff;
    background-color: #1E3A8A; /* Dark blue */
    padding: 15px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .checkout-btn {
    background-color: #3B82F6; /* Blue */
    color: #fff;
    border-radius: 4px;
    padding: 8px 20px;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .product-card {
    background-color: #F3F4F6; /* Light grey */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-details {
    padding: 10px;
  }
  
  .product-name,
  .product-price {
    font-size: 1.1rem;
    color: #1E3A8A; /* Dark blue */
  }
  
  .product-description {
    font-size: 0.9rem;
    color: #4B5563; /* Dark grey */
  }
  
  .remove-btn {
    background-color: #DC2626; /* Red */
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 8px;
  }
  
  .v-divider {
    border-color: #E5E7EB; /* Light gray */
  }
  
  .v-card-actions {
    padding-top: 10px;
  }
  </style>
  