import React, { useRef } from 'react';
// import { useFrame } from '@react-three/fiber'; // ✅ import useFrame for animation
import { useGLTF } from '@react-three/drei';


export function MyModel(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/home1.glb');

  // ✅ Auto-rotation animation
  // useFrame(() => {
  //   if (groupRef.current) {
  //     groupRef.current.rotation.y += 0.001;
  //   }
  // });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Material_1168}
          position={[0.368, 0.261, 3.212]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.163, 0.158, 0.158]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Material_1175}
          position={[5.917, 0.099, 2.809]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.2, 0.158, 0.158]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Material_1180}
          position={[-1.519, 3.438, 1.588]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.283, 0.158, 0.283]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Material_1169}
          position={[-0.277, 0.451, 1.226]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.158}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Material_1183}
          position={[0.573, 0.595, -0.347]}
          rotation={[1.222, 1.571, 0]}
          scale={[0.273, 0.221, 0.273]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Material_1181}
          position={[-2.747, -0.025, 2.589]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.158}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Material_1163}
          position={[2.717, -0.016, 3.584]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.504, 0.158, 0.707]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Material_1161}
          position={[2.717, -0.016, 3.584]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.504, 0.158, 0.707]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Material_1167}
          position={[5.925, 1.442, 0.122]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={0.657}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.Material_1184}
          position={[1.61, 0.544, 3.457]}
          rotation={[0, Math.PI / 2, 0]}
          scale={1.063}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.Material_1166}
          position={[0.368, 0.261, 3.212]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.163, 0.158, 0.158]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.Material_1179}
          position={[5.945, 0.937, 0.769]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.121, 0.121, 0.091]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.Material_1164}
          position={[-0.277, 0.451, 1.226]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.158}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.Material_1173}
          position={[5.225, 0.923, 0.589]}
          scale={0.937}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.Material_1177}
          position={[-2.379, 0.449, -0.726]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.936, 0.655, 0.936]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.Material_1182}
          position={[2.717, -0.016, 3.584]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.121, 0.121, 0.091]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.Material_1162}
          position={[2.717, -0.016, 3.584]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.504, 0.158, 0.707]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.Material_1197}
          position={[2.829, 0.287, 3.598]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.92}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.Material_1170}
          position={[2.717, -0.016, 3.584]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.Material_1165}
          position={[2.717, -0.016, 3.584]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.Material_1172}
          position={[4.436, 1.055, 3.549]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.831, 1, 0.873]}
        />
      </group>
    </group>
  );
}

// ✅ Preload the model for performance
useGLTF.preload('/home1.glb');
