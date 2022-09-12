<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from './stores/store'

useStore().initNotes()
</script>

<template>
  <RouterView />
</template>
