<script setup lang="ts">
import { useUser } from './composables/user';

const user = useUser()
</script>

<template>
  <div>
    <h2>Current user role: {{ user.role }}</h2>

    <fieldset style="text-align: start;">
      <legend>Switch user role:</legend>

      <div>
        <input type="radio" name="role" value="Admin" v-model="user.role" />
      </div>

      <div>
        <input type="radio" name="role" value="User" v-model="user.role" />
      </div>
    </fieldset>

    <h3 v-identity-guard="{ role: 'Admin' }" />
  </div>
</template>

<style scoped>
input {
  height: 2rem;
}
input::after {
  background: rgba(100,100,100, 0.2);
  padding: 0 1rem;
  min-width: 10rem;
  content: attr(value);
  display: inline-block;
  margin-left: 2rem;
  line-height: 2rem;
}
</style>
