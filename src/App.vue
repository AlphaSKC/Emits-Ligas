<script setup lang="ts">
import { ref } from 'vue';
import LeagueList from './components/leagues/LeagueList.vue';
import LeagueForm from './components/leagues/LeagueForm.vue';
import LeaguesData from './data/LeaguesData';

const addLeague = (newLeague: { id: number; name: string; description: string; teams: number; ubication: string }) => {
  const nameExists = LeaguesData.some(league => league.name === newLeague.name);

  if (nameExists) {
    alert('Ya existe una liga con este nombre. Por favor, elige un nombre único.');
    return;
  }

  LeaguesData.push({
    ...newLeague,
  });
  updateKey.value += 1;
  alert(`Liga agregada correctamente:
    ID: ${newLeague.id}
    Nombre: ${newLeague.name}
    Descripción: ${newLeague.description}
    Cantidad de equipos: ${newLeague.teams}
    País: ${newLeague.ubication}`);
};
const updateKey = ref(0);
</script>

<template>
  <main class="container">
    <div class="section">
      <h2>Listado de ligas</h2>
      <LeagueList :key="updateKey"/>
    </div>
    <div class="section">
      <h2>Agregar nueva liga</h2>
      <LeagueForm @addLeague="addLeague($event)"/>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  margin: 1rem;
  justify-content: space-evenly;
}
.section{
  width: fit-content;
  text-align: center;
  margin: 0 2rem;
  & h2{
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
    margin-bottom: 1rem;
    color: #41B883;
  }
}
</style>
