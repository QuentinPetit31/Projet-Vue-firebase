<template>
    <div>
      <h3>Dynamic Styling (inline) Mode : Composition</h3>
      <div class="d-flex">
        <!-- Première carte -->
        <div
          class="card"
          :style="card1Style"
          @click="toggleCardColor(1)"
        >
          Card title
        </div>
  
        <!-- Deuxième carte -->
        <div
          class="card"
          :style="card2Style"
          @click="toggleCardColor(2)"
        >
          Card title
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const card1Style = ref({ backgroundColor: "blue", color: "white" });
  const card2Style = ref({ backgroundColor: "pink", color: "black" });
  
  // Fonction pour toggle la couleur
  function toggleCardColor(cardNumber) {
    if (cardNumber === 1) {
      card1Style.value.backgroundColor =
        card1Style.value.backgroundColor === "blue" ? "red" : "blue";
    } else if (cardNumber === 2) {
      card2Style.value.backgroundColor =
        card2Style.value.backgroundColor === "pink" ? "green" : "pink";
    }
  }
  </script>
  
  <style scoped>
  .d-flex {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .card {
    width: 150px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    transition: background-color 0.3s ease;
  }
  </style>
  