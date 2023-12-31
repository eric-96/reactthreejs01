import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Stuff from '../models/stuff'
/* import github from '../assets/assets/icons/github.svg'
import linkedin from '../assets/assets/icons/linkedin.svg' */


const Home = () => {

  return (
      <section className='w-full h-screen text-white font-bold bg-stone-900 relative'>
        <div className='absolute z-10 inset-0 top-[100px] lg:top-[60px] flex justify-center flex-row items-start md:ml-0 h-1/4 sm:h-1/2 gap-5'>
          
          <div className='sm:flex flex-col justify-center mr-10 items-center hidden'>
       {/*      <div className='w-1 h-5 rounded-full bg-teal-400'></div> */}
            <div className='w-10 sm:h-80 h-40 bg-gradient-to-b from-teal-400 via-purple-400 to-transparent'></div>
        </div>
            <div className='bg-stone-800 bg-opacity-60 sm:bg-opacity-70 p-2 text-center'>
          <h1 className='text-7xl lg:text-8xl'>Hi, I'm Eric</h1>
          
          <p className='text-2xl pt-5 text-center md:text-center px-2 font-light'>FULLSTACK SOFTWARE DEVELOPER</p>
         {/*  <div className='flex justify-center bg- py-5'>
          <img src={github} alt="Github Icon" className=" w-8 h-8 " />
          <img src={linkedin} alt="Linkedin Icon" className="w-8 h-8 ml-2  " />
          </div> */}
          <div className="flex justify-center flex-wrap py-4">
        <div className="text-sm text-teal-500 border border-teal-500 px-2 py-1 rounded-full mt-2">Node.js</div> 
        <div className="text-sm text-teal-400 border border-teal-400 px-2 py-1 rounded-full mt-2">Databases</div>
        <div className="text-sm text-teal-300 border border-teal-300 px-2 py-1 rounded-full mt-2">Security</div>
        <div className="text-sm text-teal-200 border border-teal-300 px-2 py-1 rounded-full mt-2">APIs</div>
        <div className="text-sm text-purple-200 border border-purple-200 px-2 py-1 rounded-full mt-2">Javascript</div>
        <div className="text-sm text-purple-300 border border-purple-300 px-2 py-1 rounded-full mt-2">React</div>
        <div className="text-sm text-purple-400 border border-purple-400 px-2 py-1 rounded-full mt-2">Typescript</div>
        <div className="text-sm text-purple-500 border border-purple-500 px-2 py-1 rounded-full mt-2">TailwindCSS</div>
      </div>
        </div>
        <div className='sm:flex flex-col justify-center  ml-10 items-center hidden'>
        {/*     <div className='w-1 h-5 rounded-full bg-teal-400'></div> */}
            <div className='w-10 sm:h-80 h-40 bg-gradient-to-b from-teal-400 via-purple-400 to-transparent'></div>
        </div>
        </div>

        <Canvas>
          
        <Suspense fallback={<Loader />}>
          <Stuff  position={[-0.5, -1, -0.5]}/>
          </Suspense>
          </Canvas>
    </section>
    )
}

export default Home