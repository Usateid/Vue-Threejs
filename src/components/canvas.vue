<template>
  <div ref="canvas" />
</template>

<script>
import camera from '../utils/camera.js'
import controls from '../utils/controls.js'
import renderer from '../utils/renderer.js'
import light from '../utils/light.js'
import { sphere } from '../utils/mesh.js'
import points from '../utils/points.js'
import { Scene, AxesHelper, Color, AmbientLight } from 'three'
import { GUI } from 'dat.gui'
export default {
  name: 'the-canvas',
  data() {
    return {
      scene: new Scene(),
      camera,
      controls,
      renderer,
      light,
      sphere,
      points,
      axes: new AxesHelper(2),
      speed: 0.0005, 
      gui: new GUI()
    }
  },
  created() {
    this.scene.add(new AmbientLight(0x333333))
    this.scene.add(this.camera)
    this.scene.add(this.light)
    this.scene.add(this.axes)
    this.scene.add(this.sphere)

    this.sphere.add(this.points)

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