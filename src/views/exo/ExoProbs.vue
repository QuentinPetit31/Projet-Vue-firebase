<template>
    <OneFriend
      unAmiName="Cortex22"
      unAmiPhone="30303003"
      unAmiMail="cortex@cortex.cortex"
      premium="abc"
    />

    <!-- Deuxième instance du composant OneFriend -->
    <OneFriend
      unAmiName="Dr.Qwerty"
      unAmiPhone="098765234"
      unAmiMail="b@b.bb"
      premium="abc"
    />
</template>
  
<script setup>
  import OneFriend  from '../../components/OneFriend.vue';
</script>


<style scoped>
  
</style>
  