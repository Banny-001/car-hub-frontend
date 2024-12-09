<template>
    <v-container class="my-account">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="text-h5">My Account</v-card-title>
            <v-card-text>
              <div v-if="user">
                <p><strong>Name:</strong> {{ user.name }}</p>
                <p><strong>Email:</strong> {{ user.email }}</p>
              </div>
              <div v-else>
                <v-skeleton-loader type="text" class="mb-2"></v-skeleton-loader>
                <v-skeleton-loader type="text"></v-skeleton-loader>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" @click="logout" block>Logout</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";
  
  const user = ref(null); // Store user details
  const router = useRouter();
  
  // Fetch user info on page load
  onMounted(async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/user");
      user.value = response.data;
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  });
  
  // Logout function
  const logout = async () => {
    try {
      await axios.post("/api/logout");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  </script>
  
  <style scoped>
  .my-account {
    margin-top: 20px;
  }
  
  .v-card {
    padding: 20px;
  }
  </style>
  