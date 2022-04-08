<template>
  <div id="canvas-rendering" ref="canvas" />
</template>

<script>
import * as THREE from 'three'
import camera from './camera.js'
import controls from './controls.js'
import renderer from './renderer.js'
import light from './light.js'
import { cube } from './mesh.js'
export default {
    name: 'TheCanvas',
    data: function() {
        const scene = new THREE.Scene()

        return {
            scene: scene,
            camera,
            controls,
            renderer,
            light,
            cube,
            axes: new THREE.AxesHelper(5),
            speed: 0.02
        }
    },
    created: function() {
        this.scene.add(this.camera)
        this.scene.add(this.light)
        this.scene.add(this.cube)
        this.scene.add(this.axes)
        this.scene.background = new THREE.Color('tomato')
    },
    mounted: function() {
        this.$refs.canvas.appendChild(this.renderer.domElement)
        this.animate()
    },
    methods: {
        animate: function() {
            requestAnimationFrame(this.animate)
            this.renderer.render(this.scene, this.camera)
            this.cube.rotation.y += this.speed
            controls.update()
        }
    },
    computed: {
      rotate() {
        return this.speed === '' ? 0 : this.speed
      }
    }
}
</script>
<style scoped>
#canvas-rendering {
    width: 100vw;
    height: 100vh;
}
</style>