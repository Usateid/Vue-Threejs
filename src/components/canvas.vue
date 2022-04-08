<template>
  <div ref="canvas" />
</template>

<script>
import camera from '../utils/camera.js'
import controls from '../utils/controls.js'
import renderer from '../utils/renderer.js'
import light from '../utils/light.js'
import { sphere } from '../utils/mesh.js'
import { Scene, AxesHelper, Color } from 'three'
export default {
  name: 'the-canvas',
  data: function() {
    return {
      scene: new Scene(),
      camera,
      controls,
      renderer,
      light,
      sphere,
      axes: new AxesHelper(2),
      speed: 0.001
    }
  },
  created: function() {
    this.scene.add(this.camera)
    this.scene.add(this.light)
    this.scene.add(this.sphere)
    this.scene.add(this.axes)
    this.scene.background = new Color('#000000')
  },
  mounted () {
    if(this.$refs.canvas) {
      this.$refs.canvas.appendChild(this.renderer.domElement)
      this.animate()
    }
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
      this.sphere.rotation.y += this.speed
      controls.update()
    }
  }
}
</script>