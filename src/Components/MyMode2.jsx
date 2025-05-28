import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function MyModel(props) {
  const groupRef = useRef();
  const { nodes } = useGLTF('/home1.glb');

  useFrame(() => {
    if (groupRef.current) {
      // Continuous rotation around Y axis (change axes as you like)
      groupRef.current.rotation.y += 0.003;
      // Optional: slight rotation on X for a nice effect
      // groupRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 1, 0, 0]} scale={0.413}>
        {Object.entries(nodes).map(([key, node]) => {
          if ((node.type === 'Mesh' || node.isMesh) && node.geometry && node.material) {
            return (
              <mesh
                key={key}
                castShadow
                receiveShadow
                geometry={node.geometry}
                material={node.material}
              />
            );
          }

          if (node.type === 'LineSegments' && node.geometry && node.material) {
            return (
              <lineSegments
                key={key}
                geometry={node.geometry}
                material={node.material}
              />
            );
          }

          return null;
        })}
      </group>
    </group>
  );
}
