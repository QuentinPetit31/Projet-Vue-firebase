<template>
    <div class="container">
      <h2>Ajouter un nouvel ami</h2>
      <form @submit.prevent="addFriend" class="form">
        <div class="form-group">
          <label for="name">Nom :</label>
          <input type="text" id="name" v-model="name" required class="input-field">
        </div>
        <div class="form-group">
          <label for="phone">Téléphone :</label>
          <input type="tel" id="phone" v-model="phone" required class="input-field">
        </div>
        <div class="form-group">
          <label for="email">Email :</label>
          <input type="email" id="email" v-model="email" required class="input-field">
        </div>
        <button type="submit" class="submit-btn">Ajouter</button>
      </form>
      
      <table class="friends-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Téléphone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="friend in friends" :key="friend.id">
            <td>{{ friend.name }}</td>
            <td>{{ friend.phone }}</td>
            <td>{{ friend.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const friends = ref([]);
  let nextId = 1;
  
  const name = ref('');
  const phone = ref('');
  const email = ref('');
  
  const addFriend = () => {
    const newFriend = {
      id: nextId++,
      name: name.value,
      phone: phone.value,
      email: email.value
    };
    friends.value.push(newFriend);
    name.value = '';
    phone.value = '';
    email.value = '';
  };
  </script>
  
  <style scoped>
  /* Container */
  .container {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  /* Form */
  .form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .input-field:focus {
    border-color: #007BFF;
    outline: none;
  }
  
  .submit-btn {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #218838;
  }
  
  /* Table */
  .friends-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .friends-table th,
  .friends-table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  .friends-table th {
    background-color: #f8f9fa;
  }
  
  .friends-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .friends-table tr:hover {
    background-color: #f1f1f1;
  }
  </style>
  