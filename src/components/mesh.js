import { BoxGeometry, MeshStandardMaterial, FrontSide, Mesh } from 'three'

const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshStandardMaterial({
    side: FrontSide,
    color: 'skyblue',
    wireframe: false
})
const cube = new Mesh(geometry, material)


export {
  cube
}