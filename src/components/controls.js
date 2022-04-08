import TrackballControls from 'three-trackballcontrols'
import camera from './camera.js'
let controls= []

controls = new TrackballControls(camera)
controls.rotateSpeed = 1.0
controls.zoomSpeed = 5
controls.panSpeed = 0.8
controls.noZoom = false
controls.noPan = false
controls.staticMoving = true
controls.dynamicDampingFactor = 0.3

export default controls