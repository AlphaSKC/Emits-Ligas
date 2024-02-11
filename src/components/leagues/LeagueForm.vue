<script setup lang="ts">
import LeaguesData from '@/data/LeaguesData';
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';

const name: Ref<string> = ref('');
const description: Ref<string> = ref('');
const teams: Ref<number> = ref(0);
const ubication: Ref<string> = ref('');
const errors: Ref<Array<{ field: string; message: string }>> = ref([]);
const isValid: Ref<boolean> = ref(false);

const emits = defineEmits(['addLeague']);

const submit = () => {
  if (isValid.value) {
    const id = LeaguesData.length;
    emits('addLeague', {
      id: id,
      name: name.value,
      description: description.value,
      teams: teams.value,
      ubication: ubication.value,
    });
    name.value = '';
    description.value = '';
    teams.value = 0;
    ubication.value = '';
    validateForm();
  }
};

const validateForm = () => {
  clearErrors();

  if (name.value.length < 5 || name.value.trim() === ''){
    errors.value.push({ field: 'name', message: 'El nombre de la liga debe tener al menos 5 carácteres' });
  }

  if (description.value.length == 0 || description.value == null || description.value.trim() === '') {
    errors.value.push({ field: 'description', message: 'La descripción es obligatoria' });
  }

  if (teams.value < 10 || teams.value > 24 ) {
    errors.value.push({ field: 'teams', message: 'El mínimo de equipos es 10 y el máximo es 24' });
  }

  if(teams.value % 2 !== 0){
    errors.value.push({ field: 'teams', message: 'La cantidad de equipos debe ser par' });
  }

  if (ubication.value.length == 0 || ubication.value == null || description.value.trim() === '') {
    errors.value.push({ field: 'ubication', message: 'Debes agregar el país' });
  }

  isValid.value = errors.value.length === 0;
};

const clearErrors = () => {
  errors.value = [];
};

onMounted(() => {
  validateForm();
});
</script>

<template>
  <main>
    <form class="form" @submit.prevent="submit()">
      <div class="container">
        <label>Nombre de la liga:</label>
        <input @input="validateForm()" v-model="name" type="text" placeholder="Ingresa el nombre de la liga">
        <span v-if="errors.some(error => error.field === 'name')" class="error">
          {{ errors.find(error => error.field === 'name')?.message }}
        </span>
      </div>
      <div class="container">
        <label>Descripción:</label>
        <input @input="validateForm()" v-model="description" type="text" placeholder="Ingresa una descripción para la liga">
        <span v-if="errors.some(error => error.field === 'description')" class="error">
          {{ errors.find(error => error.field === 'description')?.message }}
        </span>
      </div>
      <div class="container">
        <label>Cantidad de equipos:</label>
        <!-- Aqui se le puede poner un min y un max para definir, pero para hacer uso de lo que nos enseñó lo hice así -->
        <input @input="validateForm()" v-model="teams" type="number"> 
        <span v-if="errors.some(error => error.field === 'teams')" class="error">
          {{ errors.find(error => error.field === 'teams')?.message }}
        </span>
      </div>
      <div class="container">
        <label>País donde se juega:</label>
        <input @input="validateForm()" v-model="ubication" type="text" placeholder="Ingresa el país donde se juega la liga">
        <span v-if="errors.some(error => error.field === 'ubication')" class="error">
          {{ errors.find(error => error.field === 'ubication')?.message }}
        </span>
      </div>
      <div class="container">
        <button type="submit" :disabled="!isValid">Enviar</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
.form {
  width: 30vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #34495E;
  border-radius: 8px;
  border: 2px solid #FFFFFF;
  box-shadow: 0 4px 8px rgb(255, 255, 255);
}

.container {
  margin: 10px 0 10px 0;
}

.container button{
  margin-left: auto;
  margin-right: auto;
  display: block;
}

label {
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  color: #41B883;
}

input, select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  font-size: 1.1rem; 
  border: 2px solid black; 
  border-radius: 5px;
}

button {
  background-color: #41B883;
  color: white;
  padding: 10px;
  font-size: 1.6rem; 
  font-weight: bold;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: white;
  font-size: 1.1rem;
  background-color: #3755da;
  padding: 5px;
  border: 2px solid black;
  border-radius: 5px;
  display: block;
  margin-top: 5px;
}
</style>