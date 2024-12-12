<template>
    <div class="game-container">
      <h1>Jeu Tour par Tour</h1>
  
      <!-- Barres de vie et image personnages -->
      <div class="bars">
        <div>
          <h2>SanGoku ssj18</h2>
          <img class="imageCombat" src="../../assets/goku-42-1.png" alt="sangoku">
          <div class="health-bar">
            <div :style="{ width: playerHealth + '%' }" class="health"></div>
          </div>
          <p>Vie : {{ playerHealth }}</p>
        </div>
  
        <div>
          <h2>Hulk</h2>
          <img class="imageCombat" src="../../assets/20367-3-hulk-clipart.png" alt="hulk">

          <div class="health-bar">
            <div :style="{ width: adversaryHealth + '%' }" class="health"></div>
          </div>
          <p>Vie : {{ adversaryHealth }}</p>
        </div>
      </div>
  
      <!-- Actions -->
      <div class="actions">
        <button @click="attackAdversaire" :disabled="gameOver">Déglinguer</button>
        <button @click="specialAttackAdversaire" :disabled="gameOver || currentRound % 3 !== 0">Genkidama</button>
        <button @click="seSoigner" :disabled="gameOver">Graine de senzu</button>
        <button @click="abandonner" :disabled="gameOver">Abandonner</button>
      </div>
  
      <!-- Message de fin de jeu -->
      <div v-if="winner" class="game-over">
        <h2>{{ winnerMessage }}</h2>
        <button @click="resetGame" class="reset">Recommencer le combat</button>
      </div>      
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const playerHealth = ref(100);
  const adversaryHealth = ref(100);
  const currentRound = ref(0);
  const winner = ref(null);
  
  const attackAdversaire = () => {
    const damage = getRandomValue(5, 12);
    adversaryHealth.value -= damage;
    currentRound.value++;
    checkWinner();
    attackPlayer();
  };
  
  const specialAttackAdversaire = () => {
    const damage = getRandomValue(10, 20);
    adversaryHealth.value -= damage;
    currentRound.value++;
    checkWinner();
    attackPlayer();
  };
  
  const seSoigner = () => {
    const heal = getRandomValue(8, 15);
    playerHealth.value = Math.min(playerHealth.value + heal, 100);
    currentRound.value++;
    attackPlayer();
  };
  
  const abandonner = () => {
    winner.value = 'adversaire';
  };
  
  const attackPlayer = () => {
    const damage = getRandomValue(8, 15);
    playerHealth.value -= damage;
    checkWinner();
  };
  
  const checkWinner = () => {
    if (playerHealth.value <= 0 && adversaryHealth.value <= 0) {
      winner.value = 'égalité';
    } else if (playerHealth.value <= 0) {
      winner.value = 'adversaire';
    } else if (adversaryHealth.value <= 0) {
      winner.value = 'joueur';
    }
  };

  const resetGame = () => {
  playerHealth.value = 100;
  adversaryHealth.value = 100;
  currentRound.value = 0;
  winner.value = null;
  };
  
  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const winnerMessage = computed(() => {
    if (winner.value === 'joueur') return 'Tu es le GOAT !';
    if (winner.value === 'adversaire') return 'LOOSER !';
    return 'MATCH NUL ! SHIFUMI?';
  });
  
  const gameOver = computed(() => winner.value !== null);
  </script>
  
  <style scoped>
  .game-container {
    font-family: Arial, sans-serif;
    text-align: center;
  }
  
  .bars {
    display: flex;
    justify-content: space-around;
    margin: 20px;
  }
  
  .health-bar {
    width: 200px;
    height: 20px;
    background-color: #ddd;
    border: 1px solid #000;
  }
  
  .health {
    height: 100%;
    background-color: #4caf50;
  }
  
  .actions button {
    margin: 10px;
    padding: 10px;
    background-color: #2663f9;
    border: 3px solid #ff0801;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .imageCombat {
    width: 150px;
    height: 220px;
  }
  
  .actions button:disabled {
    background-color: #ccc;
  }
  
  .game-over {
    margin-top: 30px;
    font-size: 24px;
    color: red;
  }

  .reset {
  margin-top: 20px;
  padding: 15px 30px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

.reset:hover {
  background-color: #d32f2f;
}
  </style>
  