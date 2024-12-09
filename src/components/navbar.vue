<template>
  <v-main>
    <!-- Drawer and Main Content -->
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      app
      @click="rail = false"
      class="drawer"
    >
      <!-- User Info and Toggle Button -->
      <template v-slot:append>
        <v-btn
          icon="mdi-chevron-left"
          variant="text"
          @click.stop="rail = !rail"
          class="drawer-toggle-btn"
        ></v-btn>
      </template>

      <v-divider class="drawer-divider"></v-divider>

      <!-- Navigation Links -->
      <v-list density="compact" nav class="nav-list">
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          to="/home"
          class="nav-item"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-package-variant"
          title="Products"
          to="/products"
          class="nav-item"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-package-variant"
          title="About"
          to="/about"
          class="nav-item"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-leaf"
          title="Cart"
          to="/cart"
          class="nav-item"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          to="/account"
          class="nav-item"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app color="#6200ea" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Motor Hub</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Cart Icon -->
      <v-btn icon @click="goToCartPage">
        <v-icon color="red">mdi-cart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <router-view />
    
  </v-main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const drawer = ref(true); // Drawer state
const rail = ref(false); // Compact drawer toggle
const store = useStore();

// Computed property to get the cart items from Vuex
const cartItems = computed(() => store.state.cart.cartItems);

// Navigate to the cart page
const goToCartPage = () => {
  this.$router.push("/cart");
};
</script>

<style scoped>
/* Ensure Full-Screen Layout */
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.v-application {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Main Content Styling */
.v-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Drawer Styling */
.drawer {
  background-color: #fff !important; /* White background for the drawer */
  width: 250px; /* Set a fixed width for the drawer */
  box-shadow: 2px 0px 15px rgba(0, 0, 0, 0.1); /* Light shadow for the drawer */
}

/* User Info Styling */
.user-info {
  background-color: #6200ea; /* Same color as app bar */
  color: white;
  padding: 16px;
  font-weight: bold;
}

.drawer-toggle-btn {
  color: white;
}

/* Drawer Divider Styling */
.drawer-divider {
  margin: 16px 0;
}

/* Navigation List Item Styling */
.nav-list .nav-item {
  font-size: 16px;
  padding: 12px 16px;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #6200ea; /* Hover effect with a color change */
  color: white;
}

/* App Bar Styling */
.v-app-bar {
  z-index: 10;
  position: fixed;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* App Bar Button Styling */
.v-btn {
  color: white;
}

.v-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Responsive Styling for Smaller Screens */
@media (max-width: 768px) {
  .drawer {
    width: 100%; /* Full-width drawer on mobile */
  }

  .v-app-bar {
    position: relative;
  }
}
</style>
