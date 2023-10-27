
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../contexts/Customization'

const TableConstructor = (props) => {
  const { nodes, materials } = useGLTF('public/models/tableConstructor.gltf')
  const { legsColor, tabletopGeometry } = useCustomization()
  let selectedTopGeometry = null;
  if (tabletopGeometry.title === 'straight') {
    selectedTopGeometry = nodes.TableTop_120x65_Straight.geometry
  } else if (tabletopGeometry.title === 'rounded') {
    selectedTopGeometry = nodes.TableTop_120x65_Rounded.geometry
  }
  return (
    <group {...props} dispose={null}>
      <mesh geometry={selectedTopGeometry} position={[0, 0.74, 0]} scale={[0.599, 0.009, 0.325]} />
       
      {/* <mesh geometry={nodes.TableTop_120x65_Rounded.geometry} material={materials['Material.001']} position={[0, 0.74, 0]} scale={[0.599, 0.009, 0.325]} /> */}
      {/* <mesh geometry={nodes.TableTop_120x65_Straight.geometry} material={materials.Material} position={[0, 0.74, 0]} scale={[0.599, 0.009, 0.325]} /> */}
      {/* Skver bad */}
      {/* <mesh geometry={nodes.SkverLeg1.geometry} material={nodes.SkverLeg1.material} position={[0.449, 0, 0.175]} scale={[1, 4.504, 1]} />
      <mesh geometry={nodes.SkverLeg2.geometry} material={nodes.SkverLeg2.material} position={[0.449, 0, -0.174]} rotation={[0, Math.PI / 2, 0]} scale={[1, 4.504, 1]} />
      <mesh geometry={nodes.SkverLeg4.geometry} material={nodes.SkverLeg4.material} position={[-0.448, 0, -0.174]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 4.504, 1]} />
      <mesh geometry={nodes.SkverLeg3.geometry} material={nodes.SkverLeg3.material} position={[-0.448, 0, 0.175]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 4.504, 1]} /> */}
      {/* Linda Good */}
      {/* <mesh geometry={nodes.LindaLeg4.geometry} material={nodes.LindaLeg4.material} position={[-0.504, -0.005, -0.282]} rotation={[0.106, -0.007, -0.068]} scale={[1, 9.358, 1]} />
      <mesh geometry={nodes.LindaLeg3.geometry} material={nodes.LindaLeg3.material} position={[-0.504, -0.005, 0.256]} rotation={[1.503, 1.465, -Math.PI / 2]} scale={[1, 9.358, 1]} />
      <mesh geometry={nodes.LindaLeg2.geometry} material={nodes.LindaLeg2.material} position={[0.532, -0.005, -0.282]} rotation={[1.639, -1.465, Math.PI / 2]} scale={[1, 9.358, 1]} />
      <mesh geometry={nodes.LindaLeg1.geometry} material={nodes.LindaLeg1.material} position={[0.532, -0.005, 0.281]} rotation={[3.036, 0.007, 3.074]} scale={[1, 9.358, 1]} /> */}
      {/* Atlant bad */}
      {/* <mesh geometry={nodes.AtlantLeg1.geometry} material={nodes.AtlantLeg1.material} position={[0.475, 0, 0]} scale={[1.25, 9.139, 8.119]} />
      <mesh geometry={nodes.AtlantLeg2.geometry} material={nodes.AtlantLeg2.material} position={[-0.475, 0, 0]} scale={[1.25, 9.139, 8.119]} /> */}
      {/* Trapezia bad */}
      {/* <mesh geometry={nodes.TrapeziaLeg1.geometry} material={nodes.TrapeziaLeg1.material} position={[0.474, 0.014, 0]} scale={[1, 7.282, 4.99]} />
      <mesh geometry={nodes.TrapeziaLeg2.geometry} material={nodes.TrapeziaLeg2.material} position={[-0.475, 0.014, 0]} scale={[1, 7.282, 4.99]} /> */}
      {/* Lima Good */}
      {/* <mesh geometry={nodes.LimaLeg1.geometry} material={nodes.LimaLeg1.material} position={[0.213, 0, 0.088]} rotation={[0, 0.991, 0]} scale={[1, 18.249, 10.886]} />
      <mesh geometry={nodes.LimaLeg2.geometry} material={nodes.LimaLeg2.material} position={[0.213, 0, -0.121]} rotation={[-Math.PI, 1.159, -Math.PI]} scale={[1, 18.249, 10.886]} />
      <mesh geometry={nodes.LimaLeg3.geometry} material={nodes.LimaLeg3.material} position={[-0.212, 0, 0.088]} rotation={[0, -0.991, 0]} scale={[1, 18.249, 10.886]} />
      <mesh geometry={nodes.LimaLeg4.geometry} material={nodes.LimaLeg4.material} position={[-0.212, 0, -0.12]} rotation={[Math.PI, -1.159, Math.PI]} scale={[1, 18.249, 10.886]} /> */}
      {/* Ishla Good */}
      <mesh geometry={nodes.IshlaLeg1.geometry} material={nodes.IshlaLeg1.material} position={[0.439, 0, 0.211]} rotation={[0, 0.991, -Math.PI]} scale={[-1, -36.664, -18.149]}>
        <meshStandardMaterial color={legsColor.color} />
      </mesh>
      <mesh geometry={nodes.IshlaLeg2.geometry} material={nodes.IshlaLeg2.material} position={[0.423, 0, -0.234]} rotation={[-Math.PI, 1.159, 0]} scale={[-1, -36.664, -18.149]}>
        <meshStandardMaterial color={legsColor.color} />
      </mesh>
      <mesh geometry={nodes.IshlaLeg3.geometry} material={nodes.IshlaLeg3.material} position={[-0.435, 0, 0.211]} rotation={[0, -0.991, -Math.PI]} scale={[-1, -36.664, -18.149]}>
        <meshStandardMaterial color={legsColor.color} />
      </mesh>
      <mesh geometry={nodes.IshlaLeg4.geometry} material={nodes.IshlaLeg4.material} position={[-0.42, 0, -0.234]} rotation={[Math.PI, -1.159, 0]} scale={[-1, -36.664, -18.149]}>
        <meshStandardMaterial color={legsColor.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('public/models//tableConstructor.gltf')

export default TableConstructor;