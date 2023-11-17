import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Drone from '../models/drone'
import Cube from '../models/cube'


const Home = () => {
  
  /*  const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    
    const adjustDroneForScreenSize = () => {
      let screenScale = null;
      let screenPosition = [15, -4, -30];
      let rotation = [0.1, -0.8, -0.1];
      
      if (window.innerWidth < 768) {
        screenScale = 2;
      } else {
        screenScale = 3;
      }
      return [screenScale, screenPosition, rotation];
    }
    const [droneScale, dronePosition, rotation] =
    adjustDroneForScreenSize(); */
    
    return (
      <section className='w-full h-full'>

        <section className='w-[100vw] h-[40vw] z-0 rounded-full absolute top-1/2 left-1 blur-3xl bg-gradient-to-r from-fuchsia-400 to-teal-500'></section>
        <section className='w-[90vw] h-[130vw] z-0 left-1/4 rounded-full absolute top-1/4 blur-3xl bg-gradient-to-r from-fuchsia-400 to-teal-500'></section>
        

        <div className='h-screen flex flex-col relative items-center justify-start py-24 mt-3 text-white'>
        
        <Canvas 
        style={{ height: '200px', width: '200px' }}>
        <Suspense fallback={<Loader />}>
          <Cube />
          </Suspense>
        </Canvas>
          
            <p className='text-sm z-10 text-center pb-2'>Software Developer</p>
          <h1 className='text-7xl font-bold z-10 text-center mt-2 '>Eric Schwalb</h1>
          <button className='text-xl text-center z-10 mt-5 px-2 py-1 border-solid border-2 border-white backdrop-blur-3xl'> see my work </button>
        </div>
{/*       {<Canvas 
        className={`w-full h-full bg-transparent ${isRotating} ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
        >
           <Suspense fallback={<Loader />}>
              <Drone
              position={dronePosition}
              scale = {droneScale} 
              rotation={rotation} 
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              />
          </Suspense>

      </Canvas>} */}
    </section>
    )
}

export default Home