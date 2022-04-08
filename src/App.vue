<template>
  <div id="app">
   <canvas-component />
  </div>
</template>

<script>
import canvasComponent from './components/canvas.vue'
export default {
  name: 'App',
  components: {
    canvasComponent
  }
}
</script>

<style>
#app {
  margin: 0;
  overflow: hidden;
}
</style>
