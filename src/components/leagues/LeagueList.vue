<script setup lang="ts">
import LeaguesData from '@/data/LeaguesData';
import LeagueItem from './LeagueItem.vue';
</script>

<template>
  <div class="list">
    <LeagueItem v-bind="leagues" v-for="(leagues, index) in LeaguesData" :key="index" />
  </div>
</template>

<style scoped>
.list{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
}
</style>