<template>
  <img
    src="~/public/img/loader.gif"
    alt="Image représentant le chargement des données en cours"
    class="h-20 w-20"
  />
</template>

<script setup lang="ts">
defineProps({
  textColor: {
    type: String,
    default: 'text-primary',
  },
})
</script>
