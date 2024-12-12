<template>
  <div class="friend-card">
    <p><strong>Nom :</strong> {{ unAmiName }}</p>
    <p><strong>Premium :</strong> {{ premium ? 'Oui' : 'Non' }}</p>
    
    <!-- Bouton pour afficher/cacher les détails -->
    <button @click="toggleDetails">
      {{ showDetails ? 'Masquer Détails' : 'Afficher Détails' }}
    </button>

    <!-- Détails affichés si showDetails est true -->
    <div v-if="showDetails" class="details">
      <p><strong>Téléphone :</strong> {{ unAmiPhone }}</p>
      <p><strong>Email :</strong> {{ unAmiMail }}</p>
    </div>

    <button @click="togglePremium">Changer Statut Premium</button>
    <button class="delete-button" @click="deleteFriend">Supprimer</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  id: Number,
  unAmiName: String,
  unAmiPhone: String,
  unAmiMail: String,
  premium: Boolean,
});

const emit = defineEmits(['mon-event-premium', 'delete-friend']);

// État local pour contrôler l'affichage des détails
const showDetails = ref(false);

function togglePremium() {
  emit('mon-event-premium', props.id);
}

function deleteFriend() {
  emit('delete-friend', props.id);
}

// Fonction pour basculer l'affichage des détails
function toggleDetails() {
  showDetails.value = !showDetails.value;
}
</script>

<style scoped>
.friend-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.delete-button {
  background-color: #e74c3c;
}

.delete-button:hover {
  background-color: #c0392b;
}

.details {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #eef;
  border: 1px solid #ccd;
  border-radius: 4px;
}
</style>
