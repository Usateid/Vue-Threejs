import {
  MeshStandardMaterial,
  Mesh,
  SphereBufferGeometry
} from 'three'

const createSphere = () => {
  const geometry = new SphereBufferGeometry( .5, 64, 64)
  const material = new MeshStandardMaterial({
    wireframe: true
  })
  
  return new Mesh(geometry, material)
}
const sphere = createSphere()

export {
  sphere
}