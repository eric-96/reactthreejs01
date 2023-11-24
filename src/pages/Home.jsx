import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Stuff from '../models/stuff'


const Home = () => {

/*   absolute text-8xl inset-0 top-[130px] left-[-350px] w-[800px] mx-auto flex items-start gap-5
 */    return (
      <section className='w-full h-screen text-white font-bold bg-stone-900 relative'>
        <div className='absolute z-10 inset-0 top-[130px] flex sm:ml-[-100px] justify-center flex-row items-start sm:w-4/5 md:w-4/5 h-1/4 sm:h-1/2 gap-5'>
          
          <div className='flex flex-col justify-center items-center'>
            <div className='w-5 h-5 rounded-full bg-red-400'></div>
            <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-red-400 via-purple-400 to-transparent'></div>
        </div>
            <div className='bg-stone-800 bg-opacity-30 sm:bg-opacity-20 p-2 text-center'>
          <h1 className='text-7xl lg:text-8xl'>Hi, I'm Eric</h1>
          
          <p className='text-2xl pt-5 text-start px-2 font-light'>FULLSTACK SOFTWARE DEVELOPER</p>
        </div>
        </div>

        <Canvas
        className= 'w-full h-screen'>
          
        <Suspense fallback={<Loader />}>
          <Stuff  position={[-0.5, -0.3, 0.4]}/>
          </Suspense>
          </Canvas>
    </section>
    )
}

export default Home