<template>
    <div class="container text-center">
      <h1>TP : Le Numéro Gagnant</h1>
      <div class="d-flex justify-content-center align-items-center my-4">
        <button class="btn btn-success me-2" @click="ajouter(1)">+1</button>
        <button class="btn btn-danger" @click="ajouter(5)">+5</button>
      </div>
      <p>Le nombre : <strong>{{ nombreMystere }}</strong></p>
      <p>
        <span v-if="nombreMystere < 7">ESSAIE ENCORE!</span>
        <span v-else-if="nombreMystere === 7">TU AS GAGNÉ !</span>
        <span v-else>Tu as dépassé le Nb Mystère</span>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const nombreMystere = ref(0);
  
  function ajouter(valeur) {
    nombreMystere.value += valeur;
  }
  
  watch(nombreMystere, (newVal) => {
    if (newVal > 30) {
      setTimeout(() => {
        nombreMystere.value = 0;
      }, 3000);
    }
  });
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  
  button {
    width: 60px;
    height: 40px;
    font-size: 18px;
    border-radius: 5px;
  }
  
  p {
    font-size: 20px;
    margin-top: 20px;
  }
  
  strong {
    font-size: 24px;
  }
  </style>
  