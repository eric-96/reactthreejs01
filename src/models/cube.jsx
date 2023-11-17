import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import { MeshPhongMaterial, MeshStandardMaterial, MeshPhysicalMaterial, MeshBasicMaterial } from 'three';
import { OrbitControls } from '@react-three/drei';


const Cube = ({ randomColorStart = false, initialRotation = 0 }) => {
    const mesh = useRef();
    const colors = ['#FA7921', '#F038FF', '#2CF6B3', '#648DE5', '#1AC8ED'];
    const initialColor = randomColorStart ? colors[Math.floor(Math.random() * colors.length)] : '#F038FF';
    const [cubeColor, setCubeColor] = useState(initialColor);
  
    const handleClick = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCubeColor(randomColor);
    };
    const { gl } = useThree();
  
    useEffect(() => {
        if (mesh.current) {
          mesh.current.rotation.x = initialRotation;
          mesh.current.rotation.y = initialRotation;
        }
      }, [initialRotation]);
    
      useFrame(() => {
        if (mesh.current) {
          mesh.current.rotation.x += 0.01;
          mesh.current.rotation.y += 0.01;
        }
      });


    return (
       <>
          <mesh ref={mesh} 
          onClick={handleClick} receiveShadow castShadow
          onPointerOver={() => (gl.domElement.style.cursor = 'grab')} 
            onPointerOut={() => (gl.domElement.style.cursor = 'auto')} 
            onPointerDown={() => (gl.domElement.style.cursor = 'grabbing')} 
            onPointerUp={() => (gl.domElement.style.cursor = 'grab')} >
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={cubeColor} specular={cubeColor} metalness={10} />
          </mesh>
          <pointLight position={[0, 0, -10]} intensity={70} />
          <pointLight position={[0, 10, 0]} intensity={70} />
          <ambientLight intensity={0.04} />
          <OrbitControls />
        </>
    );
};

export default Cube;