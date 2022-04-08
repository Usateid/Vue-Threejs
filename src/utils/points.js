import { Mesh, SphereBufferGeometry, MeshBasicMaterial } from 'three'

const getPoints = () => {
  let point = new Mesh(
    new SphereBufferGeometry(0.005,26,26),
    new MeshBasicMaterial({ color: 'red' })
  )
  
  let lat = 15.6677 * Math.PI/180
  let lng = 96.5545 * Math.PI/180
  
  let x = Math.cos(lng)*Math.sin(lat)
  let y = Math.sin(lng)*Math.sin(lat)
  let z = Math.cos(lat)
  point.position.set(x, y, z)

  return point
}
const points = getPoints()
export default points