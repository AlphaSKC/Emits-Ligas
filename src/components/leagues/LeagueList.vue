<script setup lang="ts">
import LeaguesData from '@/data/LeaguesData';
import LeagueItem from './LeagueItem.vue';
</script>

<template>
  <LeagueItem v-bind="leagues" v-for="(leagues, index) in LeaguesData" :key="index" />
</template>

<style scoped></style>