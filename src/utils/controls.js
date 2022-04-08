import TrackballControls from 'three-trackballcontrols'
import camera from './camera.js'
const getControls = () => {
  let controls = new TrackballControls(camera)
  controls.rotateSpeed = 1
  controls.zoomSpeed = 5
  controls.panSpeed = 0.8
  controls.noZoom = false
  controls.noPan = true
  controls.minDistance = 1.4
  controls.maxDistance = 2
  controls.staticMoving = true
  controls.dynamicDampingFactor = 0.3
  return controls
}

const controls = getControls()

export default controls