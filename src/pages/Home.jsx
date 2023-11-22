import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Stuff from '../models/stuff'


const Home = () => {

    
    return (
      <section className='w-full h-screen text-white font-bold bg-stone-900 relative'>
        <div className='absolute text-8xl z-10 inset-0 top-[130px] left-[-350px] w-[800px] mx-auto px-6 flex flex-row items-start gap-5'>
          
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-red-400'></div>
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-red-400 via-purple-400 to-transparent'></div>
        </div>
            <div>
          <h1>Hi, I'm <span className='text-white-300'>ERIC</span></h1>
          
          <p className='text-xl pt-5 font-light'><span className='font-medium '>FULLSTACK</span> <span className='bg-clip-text text-transparent font-bold bg-gradient-to-r from-red-300 via-purple-300 to-teal-300 '>SOFTWARE DEVELOPER</span></p>
        </div>
        </div>

        <Canvas
        className= 'w-full h-screen'>
          
        <Suspense fallback={<Loader />}>
          <Stuff  position={[1, 0, -1]}/>
          </Suspense>
          </Canvas>
    </section>
    )
}

export default Home