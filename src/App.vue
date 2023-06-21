<script setup>
import top from './layout/top.vue'
import left from './layout/left.vue'
import middle from './layout/middle.vue'
import right from './layout/right.vue'

// const darkMode = () => {
//   const clsList = document.documentElement.classList
//   if (!clsList.contains('dark-mode')) {
//     document.documentElement.classList.add('dark')
//   }
// }
// const lightMode = () => {
//   document.documentElement.classList.remove('dark')
// }
</script>

<template>
  <div class="mx-auto">
    <top></top>
    <div class="flex">
      <left></left>
      <middle></middle>
      <right></right>
    </div>
  </div>
</template>

<style scoped>
</style>
