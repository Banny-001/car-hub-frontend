<template>
  <v-app>
    <v-card class="pt-4 elevation-10 mx-auto mt-3" max-width="1300" >
      <v-card-text class="bg-light-grey pt-4 pb-6">
        <!-- About Us Section -->
        <v-card-title class="headline purple--text text-center font-weight-bold">
          About Us
        </v-card-title>
        <v-row>
          <v-card-subtitle class="text-center mb-4 text-lg italic">
            Passionate about cars and delivering top-quality products and services.
          </v-card-subtitle>
          <v-card-text>
            <p>
              At Motor Hub, we pride ourselves on providing a vast selection of high-quality automotive products and services. Whether you're looking for replacement parts, performance upgrades, or stylish accessories, we have it all.
            </p>
            <p>
              Our expert team is passionate about all things automotive, ensuring you get the best products with exceptional customer service. We work closely with trusted suppliers to bring you the best in automotive technology, so you can keep your vehicle running smoothly and looking great.
            </p>
            <p>
              Our mission is to offer an unparalleled shopping experience to car enthusiasts and owners. We make it our priority to ensure that our customers find exactly what they need to keep their vehicles in top shape. From expert advice to prompt delivery, we strive for excellence in everything we do.
            </p>
          </v-card-text>

          <!-- Location Section -->
          <v-divider></v-divider>
          <v-card-title class="headline purple--text text-center font-weight-bold">
            Our Location
          </v-card-title>
          <v-card-text>
            <p class="text-center">
              We are conveniently located in the heart of the city, easily accessible to all car owners and enthusiasts. Whether you're looking for parts, accessories, or advice, our showroom is the place to visit.
            </p>
            <p class="text-center">
              Address: 123 Auto St., Cityville, State, 12345
            </p>
            <v-btn color="purple" @click="goToLocation" class="mx-auto d-block elevation-5">
              View on Map
            </v-btn>
          </v-card-text>

          <!-- Contact Section -->
          <v-divider></v-divider>
          <v-card-title class="headline purple--text text-center font-weight-bold">
            Contact Us
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-phone</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Phone</v-list-item-title>
                  <v-list-item-subtitle>(123) 456-7890</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Email</v-list-item-title>
                  <v-list-item-subtitle>support@motorhub.com</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-web</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Website</v-list-item-title>
                  <v-list-item-subtitle>www.motorhub.com</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon>mdi-instagram</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Instagram</v-list-item-title>
                  <v-list-item-subtitle>@motorhubofficial</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <!-- Showroom Section -->
          <v-divider></v-divider>
          <v-card-title class="headline purple--text text-center font-weight-bold">
            Visit Our Showroom
          </v-card-title>
          <v-card-text>
            <p class="text-center">
              Our showroom is designed to showcase the latest and best in automotive products. We have a wide range of products on display, from replacement parts to high-performance upgrades. Whether you're looking for something specific or just browsing, our showroom is the perfect place to get inspiration and expert advice.
            </p>
            <p class="text-center">
              Our knowledgeable team is on hand to help you find the right product for your vehicle. We also offer expert installation and performance tuning services to ensure that your products perform at their best.
            </p>
            <v-btn color="purple" @click="goToShowroom" class="mx-auto d-block elevation-5">
              Get Directions
            </v-btn>
          </v-card-text>
        </v-row>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Redirect functions
const goToLocation = () => {
  window.open('https://www.google.com/maps', '_blank');
};

const goToShowroom = () => {
  window.open('https://www.google.com/maps', '_blank');
};
</script>

<style scoped>
.v-container {
  max-width: 100%;
  padding: 0;
}

.v-row {
  min-height: 100vh;
}

.v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
}

.v-card-title {
  font-weight: bold;
  color: #6200ea;
}

.v-card-subtitle {
  font-style: italic;
  color: #757575;
}

.v-card-text {
  line-height: 1.6;
}

.v-btn {
  width: 50%;
  margin-top: 20px;
  border-radius: 25px;
  text-transform: uppercase;
}

.v-list-item {
  padding-left: 0;
}

.v-list-item-avatar {
  background-color: #6200ea;
  color: white;
}

.v-divider {
  margin: 20px 0;
}

@media (max-width: 600px) {
  .v-card-title {
    font-size: 1.5rem;
  }

  .v-card-subtitle {
    font-size: 1rem;
  }
}
</style>
