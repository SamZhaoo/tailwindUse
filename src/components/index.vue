<script setup>
const darkMode = () => {
  const clsList = document.documentElement.classList;
  if(!clsList.contains('dark-mode')) {
    document.documentElement.classList.add('dark-mode');
  }
}

const lightMode = () => {
  document.documentElement.classList.remove('dark-mode')
}
</script>

<template>
  <button
    @click="lightMode"
    class="border-2 p-1 m-1"
  >普通模式</button>
  <button
    @click="darkMode"
    class="border-2 p-1 m-1"
  >暗黑模式</button>
  <div class="w-32 h-32 bg-blue-500">ddd</div>
  <div class="menu">fffff</div>
  <!-- <div class="w-32 h-32 bg-green-500 md:bg-blue-500"></div> -->
  <div class="w-32 h-32 bg-blue-500 dark:bg-green-500"></div>
</template>

<style scoped>
</style>
