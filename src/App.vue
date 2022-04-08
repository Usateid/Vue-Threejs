<template>
  <div id="app">
    <canvas-component />
  </div>
</template>

<script>
import canvasComponent from './components/canvas.vue'
export default {
  name: 'app',
  components: {
    canvasComponent
  }
}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}
</style>
