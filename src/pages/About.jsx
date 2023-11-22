import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import Loader from '../components/Loader'
import Balls from '../models/balls'


const About = () => {
  return (
    <div className='w-full h-screen  bg-stone-900 text-white flex relative justify-center'>
      <Canvas>
    <Suspense fallback={<Loader />}>
      <Balls />
      </Suspense>
  </Canvas>
    <div className="w-1/2 absolute h-2/3 bg-opacity-0 p-6">
    <div className='p-10'>
    <figure><img src='./src/assets/assets/images/me.jpg' alt="Photo"
    className='h-[250px] w-[250px] object-contain rounded-full' /></figure>
      <h2 className="text-2xl font-bold flex items-center">
      Shoes!Shoes!Shoes!Shoes!Shoes!Shoes!
        <div className="ml-2 inline-block bg-teal-300 text-md px-2 rounded-full">NEW</div>
      </h2>
      <p className='pt-5'>If a dog chews shoes whose shoes does he choose? 
      If a dog chews shoes whose shoes does he choose?
      If a dog chews shoes whose shoes does he choose?
      If a dog chews shoes whose shoes does he choose?
      If a dog chews shoes whose shoes does he choose?
      If a dog chews shoes whose shoes does he choose?
      If a dog chews shoes whose shoes does he choose?
      If a dog chews shoes whose shoes does he choose?
      If a dog chews shoes whose shoes does he choose?</p>
      <div className="flex justify-start p-5 mt-4">
        <div className="text-sm text-purple-200 border border-purple-200 px-2 py-1 rounded-full mr-2">Fashion</div> 
        <div className="text-sm text-purple-300 border border-purple-300 px-2 py-1 rounded-full mr-2">Products</div>
        <div className="text-sm text-purple-400 border border-purple-400 px-2 py-1 rounded-full mr-2">Products</div>
        <div className="text-sm text-blue-400 border border-blue-400 px-2 py-1 rounded-full mr-2">Products</div>
        <div className="text-sm text-blue-300 border border-blue-300 px-2 py-1 rounded-full mr-2">Products</div>
        <div className="text-sm text-teal-300 border border-teal-300 px-2 py-1 rounded-full mr-2">Products</div>
        <div className="text-sm text-teal-200 border border-teal-200 px-2 py-1 rounded-full mr-2">Products</div>
      </div>
    </div>
  </div>

    </div>


  );
};

export default About