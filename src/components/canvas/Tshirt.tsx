import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Tshirt(props) {
  const { scene } = useGLTF('/tshirt-centered.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}
