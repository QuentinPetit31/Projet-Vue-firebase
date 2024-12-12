<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">Détails de l'Élément</h1>
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title">ID : {{ id }}</h5>
        <p class="card-text">
          Ceci est une page de détail pour l'élément avec l'identifiant <strong>{{ id }}</strong>.
        </p>
        <router-link to="/exoRouteur" class="btn btn-secondary">Retour à l'accueil</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>


// Récupération des props depuis la route
const props = defineProps(['id']);

</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
</style>