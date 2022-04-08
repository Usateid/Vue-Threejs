import { DirectionalLight } from 'three'

const light = new DirectionalLight('hsl(0, 100%, 100%)')
light.position.set(-5, -10, 10)

export default light