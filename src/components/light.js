import { DirectionalLight } from 'three'

const light = new DirectionalLight('hsl(0, 100%, 100%)')
light.position.set(0, 0, 10)

export default light