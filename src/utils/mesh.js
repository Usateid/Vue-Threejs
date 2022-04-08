import {
  BoxGeometry,
  MeshStandardMaterial,
  FrontSide,
  TextureLoader,
  Mesh,
  SphereBufferGeometry
} from 'three'

import mapImage from '../assets/8k_not_normal.jpg'
const createSphere = () => {
  const textureLoader = new TextureLoader()
  const normalTexture = textureLoader.load(mapImage)
  const geometry = new SphereBufferGeometry(.5, 64, 64)
  const material = new MeshStandardMaterial({
    transparent: true,
    map: normalTexture
  })
  
  return new Mesh(geometry, material)
}
const sphere = createSphere()

export {
  // cube,
  sphere
}