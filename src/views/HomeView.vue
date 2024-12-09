<script setup>
</script>

<template>
  <v-app>
    <!-- Hero Section with Background Image -->
    <v-container class="hero-section" fluid>
      <v-row justify="center" align="center" class="text-center">
        <v-col cols="12" md="8">
          <h1 class="display-1 font-weight-bold text-white">Welcome to MotorHub</h1>
          <p class="subtitle-1 text-white">
            Your one-stop destination for premium vehicles, reliable services, and automotive solutions.
          </p>
          <v-btn color="primary" large class="mt-4">Explore Now</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Features Section -->
    <v-container class="mt-8">
      <h2 class="text-center font-weight-bold mb-6">Why Choose MotorHub?</h2>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-car</v-icon>
          <h3 class="mt-2">Wide Vehicle Selection</h3>
          <p>Choose from a variety of new and pre-owned vehicles to suit your needs.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-wrench</v-icon>
          <h3 class="mt-2">Reliable Services</h3>
          <p>Get professional maintenance and repair services from our experts.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-icon size="48" color="primary">mdi-shield-check</v-icon>
          <h3 class="mt-2">Trusted Quality</h3>
          <p>We ensure top-notch quality in every vehicle and service we provide.</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Call to Action Section -->
    <v-container class="cta-section mt-10 text-center" fluid>
      <h2 class="font-weight-bold text-white">Ready to Find Your Dream Ride?</h2>
      <v-btn color="secondary" large class="mt-4">Contact Us</v-btn>
    </v-container>

    <!-- Footer -->
    <v-footer color="primary" padless>
      <v-container>
        <v-row>
          <v-col class="text-center text-white">
            &copy; 2024 MotorHub. All rights reserved.
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
.hero-section {
  background: url('https://i.pinimg.com/736x/42/3e/99/423e998884b603c3889822e8be6c8832.jpg') left center / cover no-repeat ;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
}

.cta-section {
  background-color: #1976D2;
 
  color: #fff;
}

.v-btn {
  border-radius: 25px;
}

h1, h2 {
  font-weight: bold;
  color: #fff;
}

.subtitle-1 {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>
