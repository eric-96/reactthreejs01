import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import { MeshPhongMaterial, MeshStandardMaterial, MeshPhysicalMaterial, MeshBasicMaterial } from 'three';
import { OrbitControls } from '@react-three/drei';


const Cube = ({ randomColorStart = false, initialRotation = 0}) => {
    const mesh = useRef();
    const colors = ['#C084B6', '#F7786B', '#F8719D', '#5ECED4', '#D8B4FE'];
    const initialColor = randomColorStart ? colors[Math.floor(Math.random() * colors.length)] : '#F7786B';
    const [cubeColor, setCubeColor] = useState(initialColor);
  
    const handleClick = () => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCubeColor(randomColor);
    };

    useEffect(() => {
      window.addEventListener('click', handleClick);
  
      return () => {
        window.removeEventListener('click', handleClick);
      };
    }, []);
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
          <pointLight position={[0, 0, -10]} intensity={15} />
          <pointLight position={[0, 10, 0]} intensity={10} />
          <ambientLight intensity={0.04} />
          <OrbitControls enablePan={false} enableZoom={false}  />
        </>
    );
};

export default Cube;