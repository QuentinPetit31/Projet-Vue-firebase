<template>
  <div>
    <!-- Inputs pour texte et couleur -->
    <input
      v-model="inputText1"
      type="text"
      placeholder="Tapez 'hello' ou 'world'"
    />
    <input
      v-model="inputText2"
      type="text"
      placeholder="Tapez une couleur (ex: red, green, etc.)"
    />

    <!-- Bouton pour afficher/masquer le premier paragraphe -->
    <button @click="toggleP">Afficher / Cacher le paragraphe</button>

    <!-- Premier paragraphe avec classes dynamiques -->
    <p
      :class="inputText1 === 'hello' ? 'maclasseHello' : inputText1 === 'world' ? 'maClasseWord' : ''"
      :style="{ display: PVisible ? 'block' : 'none' }"
    >
      Premier paragraphe : {{ inputText1 }}
    </p>

    <!-- Deuxième paragraphe avec changement dynamique de la couleur de fond -->
    <p :style="{ backgroundColor: inputText2 }">
      Deuxième paragraphe : Couleur du fond change selon l'input
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Déclaration des variables réactives
const inputText1 = ref("");
const inputText2 = ref("");
const PVisible = ref(true); // Valeur booléenne pour afficher/masquer le paragraphe

// Méthode pour basculer l'affichage du paragraphe
function toggleP() {
  PVisible.value = !PVisible.value;
}
</script>

<style scoped>
.maclasseHello {
  color: blue;
  font-weight: bold;
}

.maClasseWord {
  color: green;
  font-style: italic;
}
</style>
