<template>
  <div id="routeurr">
    <router-link class="nav-link" to="/" active-class="active">
      Home
    </router-link>

    <div class="dropdown">
      <button class="dropdown-btn">Leçons</button>
      <div class="dropdown-content">
        <router-link class="nav-link" to="/lesson-vfor" active-class="active">v-for</router-link>  
        <router-link class="nav-link" to="/lesson-computed" active-class="active">computed</router-link>  
        <router-link class="nav-link" to="/lesson-vhtml" active-class="active">v-html</router-link>  
        <router-link class="nav-link" to="/lesson-von" active-class="active">v-on</router-link>  
        <router-link class="nav-link" to="/lesson-vmodel" active-class="active">v-model</router-link>  
        <router-link class="nav-link" to="/lesson-vbind" active-class="active">v-bind</router-link>  
        <router-link class="nav-link" to="/lesson-watchers" active-class="active">Watchers</router-link>
        <router-link class="nav-link" to="/lesson-text-interpolation" active-class="active">Texte-Interpolation</router-link>
        <router-link class="nav-link" to="/lesson-methods" active-class="active">Methodes</router-link>
        <router-link class="nav-link" to="/lesson-dynamic-style" active-class="active">Style Dynamique</router-link>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropdown-btn">Exo</button>
      <div class="dropdown-content">
        <router-link class="nav-link" to="/exo" active-class="active">Exo 1</router-link>
        <router-link class="nav-link" to="/exo2" active-class="active">Exo 2</router-link>
        <router-link class="nav-link" to="/exoProbs" active-class="active">Exo Probs</router-link>
        <router-link class="nav-link" to="/exoEmit" active-class="active">Exo Emit</router-link>
        <router-link class="nav-link" to="/exoEmit2" active-class="active">Exo Emit2</router-link>
        <router-link class="nav-link" to="/exoFetche" active-class="active">Exo Fetch</router-link>
        <router-link class="nav-link" to="/exoRouteur" active-class="active">Exo Routeur</router-link>
        <router-link class="nav-link" to="/register" active-class="active">Register</router-link>
        <router-link class="nav-link" to="/login" active-class="active">login</router-link>
        <router-link class="nav-link" to="/dashboard" active-class="active">dashboard</router-link>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropdown-btn">TP</button>
      <div class="dropdown-content">
        <router-link class="nav-link" to="/tp1" active-class="active">TP1</router-link>
        <router-link class="nav-link" to="/tp2" active-class="active">TP2</router-link>
        <router-link class="nav-link" to="/tp3" active-class="active">TP3</router-link>
        <router-link class="nav-link" to="/tp4" active-class="active">TP4</router-link>
        <router-link class="nav-link" to="/tp5" active-class="active">TP5</router-link>
        <router-link class="nav-link" to="/tp6" active-class="active">TP6</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink },
};
</script>

<style scoped>
#routeurr {
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  margin: 50px;
}

/* Style général pour les liens */
.nav-link {
  border: 1px solid black;
  text-decoration: none;
  padding: 5px 10px;
  display: block;
}

/* Style pour le lien actif */
.active {
  background-color: aqua; 
  font-weight: bold;
}

/* Dropdown Container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Button */
.dropdown-btn {
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
  background-color: white;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 120px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content .nav-link {
  padding: 10px 15px;
  text-decoration: none;
  display: block;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Dropdown Button hover effect */
.dropdown-btn:hover {
  background-color: #f0f0f0;
}

/* Flèche plus petite ajoutée au bouton */
.dropdown-btn::after {
  content: '';
  display: inline-block;
  margin-left: 6px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid black;
}

/* Optionnel : changer la couleur de la flèche au survol */
.dropdown-btn:hover::after {
  border-top-color: #007BFF;
}

</style>
