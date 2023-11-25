import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import Loader from '../components/Loader'
import Cube from '../models/cube'
import myImage from '../assets/assets/images/me.jpg'


const About = () => {

  return (
    <div className='w-full min-h-screen bg-stone-900 pt-10 text-white overflow-y-auto flex relative justify-center'>
    <div className="flex absolute z-10 items-center w-full max-w-2xl flex-wrap">
    <div className=''>

    <div className='flex justify-center p-5 text-center items-center bg-stone-900 bg-opacity-50 flex-col flex-wrap'>

    <figure className=''><img src={myImage} alt="MyPhoto"
    className='h-[180px] w-[180px] object-cover border-solid border-2 border-red-300 rounded-full' /></figure>
      <h2 className="text-2xl p-3 flex font-bold">
     Q: What do you mean 'Fullstack Developer'?
      </h2>
      <p className='pt-5 text-center'>Imagine a bridge between the user interface you interact with and the server that
       processes your requests.</p>
       <p className='mt-3 text-center'><span className='text-green-300'>User Experience</span>,<span className='text-green-300' > Interface Design</span> and 
       <span className='text-green-300'> responsiveness</span> are at the forefront of my work, creating interfaces that function flawlessly and engage users with
       aesthetic appeal. Behind the scenes, a robust <span className='text-green-300'> server-side logic</span>, <span className='text-green-300'>database management</span>, 
       <span className='text-green-300'> API integration </span> and <span className='text-green-300'>security</span> measures.</p>
      <div className="flex justify-center flex-wrap py-4">
        <div className="text-sm text-red-500 border border-red-500 px-2 py-1 rounded-full mt-2">Node.js</div> 
        <div className="text-sm text-red-400 border border-red-400 px-2 py-1 rounded-full mt-2">Databases</div>
        <div className="text-sm text-red-300 border border-red-300 px-2 py-1 rounded-full mt-2">Security</div>
        <div className="text-sm text-red-200 border border-red-300 px-2 py-1 rounded-full mt-2">APIs</div>
        <div className="text-sm text-green-200 border border-green-200 px-2 py-1 rounded-full mt-2">Javascript</div>
        <div className="text-sm text-green-300 border border-green-300 px-2 py-1 rounded-full mt-2">React</div>
        <div className="text-sm text-green-400 border border-green-400 px-2 py-1 rounded-full mt-2">Typescript</div>
        <div className="text-sm text-green-500 border border-green-500 px-2 py-1 rounded-full mt-2">TailwindCSS</div>
      </div>
       </div>

    </div>
    </div>
      <Canvas className='absolute'>
    <Suspense fallback={<Loader />}>
      <Cube initialColor={'#F7786B'} />
      </Suspense>
  </Canvas>

    </div>


  );
};

export default About