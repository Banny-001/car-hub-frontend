<script>
import axios from 'axios'
import { mapActions } from 'vuex';  

export default {
    data() {
        return {
            products: [],
            total: 0,
            stockDetails: [],
            cartItems: []
        }
    },

    mounted() {

        this.fetchProducts()
    },
    methods: {
        // Fetch products from the API 
        async fetchProducts() {
            try {
                const response = await axios.get('http://localhost:8000/api/products')
                this.products = response.data
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        },

        ...mapActions(['addToCart']),  // Add the action from Vuex

        addToCart(product) {
            // Call the Vuex action to add the product to the cart
            this.$store.dispatch('cart/addToCart', {
                itemName: product.name,
                itemPrice: product.price,
                itemImage: product.image,
                description: product.description
            });
            this.snackbarMessage = `${product.name} has been added to your cart!`;
            this.snackbar = true;

        }
    }
}
</script>
<template>
    <v-app>
        <v-card class="pt-4">
            <v-card-text class="bg-surface-light pt-4">
                <v-card-title class="cart-title text-center mb-2" color="primary" >
                    Our Available Products
                </v-card-title>
                <v-row>
                    <!-- Loop through products -->
                    <v-col v-for="product in products" :key="product.id" cols="12" sm="8" md="4">
                        <v-card class="elevation-10" :hover="true" max-width="400" 
                            style="transition: transform 0.3s ease-in-out" @mouseover="hover = true"
                            @mouseleave="hover = false">
                            <!-- Product Image -->
                            <v-img :src="product.image"  height="400px" width="400px" alt="Car Image" class="rounded-lg cover"></v-img>

                            <!-- Card Content -->
                            <v-card-title class="font-weight-bold text-h6" style="color: #333">
                                {{ product.name }}
                            </v-card-title>
                            <v-card-text class="text-body-1" style="color: #555">
                                <p>{{ product.description }}</p>
                                <p class="font-weight-bold text-primary" style="font-size: 1.2rem">
                                    Ksh: {{ product.price }}
                                </p>
                            </v-card-text>

                            <!-- Card Actions -->
                            <v-card-actions class="d-flex justify-center">
                                <v-btn color="primary" block @click="addToCart(product)" class="rounded-lg" elevation="2">
                                    Add to Cart
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<style scoped>
/* Title Styles */
.cart-title {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #1976d2; /* Blue color */
}

/* Card Styles */
.v-card {
    border-radius: 16px;
}



/* Button Styles */
.v-btn {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.v-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Image Styles */
.v-img {
    border-radius: 16px;
}

/* Card Content Styles */
.v-card-title {
    font-weight: 600;
    color: #333;
}

.v-card-text {
    font-size: 1rem;
    color: #555;
}
</style>