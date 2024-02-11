<script setup lang="ts">
import { ref } from 'vue';
import type { ILeague } from '@/interfaces/ILeague';
const props = defineProps<ILeague>();
const selectedColorBg = ref('#34495E');
const selectedColorFont = ref('#41B883');

</script>

<template>
  <div class="card" :style="{ backgroundColor: selectedColorBg, color: selectedColorFont }">
    <div class="header">
      <h2>#{{ props.id + 1 }}</h2>
      <h3>{{ props.name }}</h3>
    </div>
    <p><span>Descripción: </span>{{ props.description }}</p>
    <p><span>Cantidad de equipos: </span>{{ props.teams }}</p>
    <p><span>País donde se juega: </span>{{ props.ubication }}</p>
    <div class="color-options">
      <span>Color de fondo: </span>
      <label>
        <input type="radio" v-model="selectedColorBg" value="#f1c40f" /> Amarillo
      </label>
      <label>
        <input type="radio" v-model="selectedColorBg" value="#3498db" /> Azul
      </label>
      <label>
        <input type="radio" v-model="selectedColorBg" value="#F18E2D" /> Naranja
      </label>
      <!-- Aquí lo que hice fue evitar que se pudiera elegir 2 colores igual, es decir, fondo blanco con letra blanca. -->
      <div v-if="selectedColorFont != '#000000'">
        <label>
          <input type="radio" v-model="selectedColorBg" value="#000000" /> Negro
        </label>
      </div>
      <div v-if="selectedColorFont != '#FFFFFF'">
        <label>
          <input type="radio" v-model="selectedColorBg" value="#FFFFFF" /> Blanco
        </label>
      </div>
      <label>
        <input type="radio" v-model="selectedColorBg" value="#34495E" /> Defecto
      </label>
    </div>
    <div class="color-options">
      <span>Color de letra: </span>
      <label>
        <input type="radio" v-model="selectedColorFont" value="#9711F9" /> Morado
      </label>
      <label>
        <input type="radio" v-model="selectedColorFont" value="#F8BBD0" /> Rosa
      </label>
      <label>
        <input type="radio" v-model="selectedColorFont" value="#F9113F" /> Rojo
      </label>
      <!-- Es parte de la validación para que no puedan elegir 2 colores iguales -->
      <div v-if="selectedColorBg!='#000000'">
        <label>
        <input type="radio" v-model="selectedColorFont" value="#000000" /> Negro
      </label>
      </div>
      <div v-if="selectedColorBg!='#FFFFFF'">
        <label>
        <input type="radio" v-model="selectedColorFont" value="#FFFFFF" /> Blanco
      </label>
      </div>
      <label>
        <input type="radio" v-model="selectedColorFont" value="#41B883" /> Defecto
      </label>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 30rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgb(255, 255, 255);
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  
  & h3{
    font-weight: bold;
    font-size: 2rem;
  }

  & h2{
    margin-right: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }
}

span {
  font-weight: bold;
  font-size: 1.2rem;
}

p{
  font-size: 1.1rem;
}

.color-options {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  & span,
  & label {
    margin-right: 1rem;
  }

  & input {
    cursor: pointer;
  }
}

</style>