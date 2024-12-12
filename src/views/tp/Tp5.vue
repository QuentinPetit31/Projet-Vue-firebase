<template>
    <div class="tp5">
        <h1>La liste des courses</h1>

        <input 
        v-model="newItem"
        @keyup.enter="addItem"
         type="text">
        </input>

        <button @click="addItem">Ajouter à votre liste de course</button>

        <br><br>

        <ul v-if="showList">
            <li v-for="(item, index) in items" :key="index" @click="removeItem(index)">{{ item }}</li>
        </ul>

        <button @click="toggleList">{{ showList ? 'Cacher la liste' : 'Afficher la liste' }}</button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const newItem = ref(''); 
const items = ref([]);   
const showList = ref(true);

// Fonction pour ajouter un élément à la liste
const addItem = () => {
  if (newItem.value.trim()) {
    items.value.push(newItem.value); 
    newItem.value = '';              
  }
};

// Fonction pour alterner la visibilité de la liste
const toggleList = () => {
      showList.value = !showList.value;
    };

// Fonction pour supprimer un élémént de la liste si on clique dessus
const removeItem = (index) => {
  items.value.splice(index, 1);  
};
</script>
  
<style scoped>

.tp5 h1{
color: blue;
}

.tp5 {
    display: flex;
    flex-direction: column;
}

input {
    margin: 20px;
}

button {
    background-color: rgb(193, 161, 223);
    border: 1px solid black;
}

button[type="button"] {
    background-color: rgb(165, 202, 223);
    border: 1px solid black;
}
</style>
  