<template>
  <header>
    Sample Application
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  height: 100px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: sticky;
  top: 0;
  z-index: 2000;
}
</style>
