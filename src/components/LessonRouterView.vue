<template>
  <p class="text-center">Cliquez sur un élément pour voir les détails.</p>
  <ul class="list-group">
    <li
      v-for="item in items"
      :key="item.id"
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>{{ item.name }}</span>
      <router-link
        :to="{ name: 'Details', params: { id: item.id}}"
        class="btn btn-primary btn-sm"
      >
        Voir les détails
      </router-link>
    </li>
  </ul>
</template>

<script setup>
//Le tablOOOOOO
const items = [
{ id: 1, name: 'Steven-Vandamme' },
{ id: 2, name: 'Jean-Luc Godard' },
{ id: 3, name: 'BicVeleda' },
{ id: 44, name: 'Savage Henry' },
];

</script>