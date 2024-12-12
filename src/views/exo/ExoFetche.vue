<template>
    <div class="container">
      <h1>Fetch avec v-for</h1>
  
      <h2>Les Pokémon :</h2>
      <ul v-if="pokemons.length">
        <li v-for="(pokemon, index) in pokemons" :key="index">
          {{ pokemon.name }}
        </li>
      </ul>
      <p v-else>Chargement des Pokémon...</p>
  
      <h2>Météo Toulouse :</h2>
      <div v-if="meteo">
        <p>Température actuelle : {{ meteo.current_condition.tmp }}°C</p>
        <p>Humidité : {{ meteo.current_condition.humidity }}%</p>
        <p>Conditions météo : {{ meteo.current_condition.condition }}</p>
      </div>
      <p v-else>Chargement des informations météo...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const pokemons = ref([]);
  const meteo = ref();
  
  // Fonction pour récupérer les données des Pokémon
  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();
      pokemons.value = data.results;
    } catch (error) {
      console.error('Erreur lors de la récupération des Pokémon:', error);
    }
  };
  
  // Fonction pour récupérer les informations météo
  const fetchMeteo = async () => {
    try {
      const response = await fetch('https://prevision-meteo.ch/services/json/toulouse');
      const data = await response.json();
      meteo.value = data;
    } catch (error) {
      console.error('Erreur lors de la récupération des infos météo:', error);
    }
  };
  
  onMounted(() => {
    fetchPokemon();
    fetchMeteo();
  });
  
  onBeforeUnmount(() => {
    console.log("Le composant est sur le point d'être démonté.");
  });
  </script>
  
  <style scoped>

  h2 {
    margin-top: 20px;
    color: #555;
  }
  
  ul {
    list-style-type: none;
   
  }
  
  li {
    padding: 5px 0;
  }
  </style>
  