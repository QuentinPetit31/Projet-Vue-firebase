<template>
  <div>
    <h1>Liste des Amis</h1>
    <EmitOneFriendIdComp
      v-for="unAmi in lesAmis"
      :key="unAmi.id"
      :id="unAmi.id"
      :unAmiName="unAmi.name"
      :unAmiPhone="unAmi.phone"
      :unAmiMail="unAmi.email"
      :premium="unAmi.premium"
      @mon-event-premium="reactionStatus"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import EmitOneFriendIdComp from '../../components/EmitOneFriendIdComp.vue';

const lesAmis = reactive([
  { id: 1, name: 'Alice', phone: '123-456-789', email: 'alice@example.com', premium: false },
  { id: 2, name: 'Bob', phone: '987-654-321', email: 'bob@example.com', premium: true },
  { id: 3, name: 'Charlie', phone: '456-789-123', email: 'charlie@example.com', premium: false },
]);

function reactionStatus(id) {
  const ami = lesAmis.find((a) => a.id === id);
  if (ami) {
    ami.premium = !ami.premium;
    console.log(`Statut premium de ${ami.name} mis à jour : ${ami.premium ? 'Oui' : 'Non'}`);
    alert(`Le statut premium de ${ami.name} est maintenant : ${ami.premium ? 'Oui' : 'Non'}`);
  } else {
    console.error(`Erreur : Aucun ami trouvé avec l'ID ${id}`);
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
