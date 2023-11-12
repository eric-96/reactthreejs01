import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Drone from '../models/drone'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Home = () => {
  
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
       adjustDroneForScreenSize();

       return (

    <section className='w-full h-screen relative'>
      <Canvas 
        className='w-full h-full bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
        >
           <Suspense fallback={<Loader />}>
            <directionalLight 
              position={[100, 0, 50]} // Position the light source above the scene
              intensity={15} // Adjust the brightness of the light
              castShadow // Enable shadows
            />
            <ambientLight 
              intensity={0.3} // Use a lower intensity for ambient light
            />
            <spotLight  
              position={[10, , 10]} 
              angle={0.15} 
              penumbra={1} 
              intensity={1} 
              castShadow // Enable shadows
            />
            <hemisphereLight 
              skyColor={'#ffffff'} 
              groundColor={'#ffffff'} 
              intensity={0.5} 
              />
              <Drone
              position={dronePosition}
              scale = {droneScale} 
              rotation={rotation} 
               />
          </Suspense>

      </Canvas>
    </section>
    )
}

export default Home