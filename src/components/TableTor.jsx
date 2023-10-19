import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const TableTor = (props) => {
  const group = useRef();
  const { nodes} = useGLTF('./models/tableTor.gltf');

  const vengeLuizianaProps = useTexture({
    map: './textures/venge_luiziana/Color.jpg',
    roughnessMap: './textures/venge_luiziana/Roughness.jpg',
  });

  vengeLuizianaProps.map.repeat.set(6, 6);
  vengeLuizianaProps.map.rotation = Math.PI / 1
  vengeLuizianaProps.roughnessMap.rotation = Math.PI / 1
  vengeLuizianaProps.roughnessMap.repeat.set(9, 9);
  vengeLuizianaProps.map.wrapS = vengeLuizianaProps.map.wrapT =
    THREE.MirroredRepeatWrapping;
  vengeLuizianaProps.roughnessMap.wrapS =
    vengeLuizianaProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;

  let selectedTexture = vengeLuizianaProps;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Desk1" geometry={nodes.Desk1.geometry} position={[0, 0.742, -0.343]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.347, -0.008, -0.343]}>
          <meshStandardMaterial {...selectedTexture} />
        </mesh>
        <mesh name="Desk2" geometry={nodes.Desk2.geometry} position={[0, 0.742, 0.344]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.347, -0.008, -0.343]}>
          <meshStandardMaterial {...selectedTexture} />
        </mesh>
        <mesh name="Leg" geometry={nodes.Leg.geometry} position={[0, 0.006, 0]} scale={[0.222, 0.006, 0.448]}>
          <meshStandardMaterial {...selectedTexture} />
        </mesh>
        <mesh name="Shelf" geometry={nodes.Shelf.geometry} position={[0, 0.641, 0]} scale={[0.23, 0.006, 0.48]}>
          <meshStandardMaterial {...selectedTexture} />
        </mesh>
        <mesh name="Furniture1" geometry={nodes.Furniture1.geometry} position={[0.112, 0.324, 0.128]} scale={[0.015, 0.31, 0.201]}>
          <meshStandardMaterial {...selectedTexture} map={null} color={"#FFFFFF"} />
        </mesh>
        <mesh name="Furniture2" geometry={nodes.Furniture2.geometry} position={[-0.126, 0.324, 0.128]} scale={[0.015, 0.31, 0.201]}>
          <meshStandardMaterial {...selectedTexture} map={null} color={"#FFFFFF"} />
        </mesh>
        <mesh name="Desk3" geometry={nodes.Desk3.geometry} position={[0, 0.667, -0.002]} rotation={[0, Math.PI / 2, 0]} scale={[-0.347, -0.008, -0.343]}>
          <meshStandardMaterial {...selectedTexture} />
        </mesh>
      </group>
    </group>
  )
}


useGLTF.preload('./models/tableTor.gltf')

export default TableTor;