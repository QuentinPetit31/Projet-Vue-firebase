<template>
    <h1>TP DataBinding - Profile User</h1>
  
    <div class="card">
      <img :src="user.image" alt="Image du profil" class="profile-image" />
      <h2>{{ user.name }}</h2>
      <input type="text" v-model="user.name" />
      <p>{{ user.age }} ans</p>
      <p>age + 10 : {{ agePlus }}</p>
      <p>NB Fétiche : {{ lucky }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Données avec ref
  const user = ref({
    image: "https://imgs.search.brave.com/AZbUS7R4K1cBJuKseATkfQG2eecBsS1BU7oUVPAXzvM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjEy/ODkyOTY4Mi9wdC9m/b3RvL2FuYWhlaW0t/Y2FsaWZvcm5pYS1h/LWNvc3BsYXllci1k/cmVzc2VkLWFzLXN1/cGVyLW1hcmlvLWJy/b3RoZXJzLXBvc2Vz/LXdpdGgtYW4tdW1i/cmVsbGEtaW4tdGhl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1JemhtZ3I5WjVJ/bjI1MmVvM0FZQU9x/X1BsVERuY1Q0TmlB/MnE1V3pXNERvPQ", 
    name: "Dr.Mario",
    age: 45,
  });
  
  // Propriétés calculées
  const agePlus = computed(() => user.value.age + 10);
  const lucky = computed(() => (Math.random() * 100).toFixed(0));
  </script>
  
  <style scoped>
  .card {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    
  }
  
  .profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }
  </style>
  