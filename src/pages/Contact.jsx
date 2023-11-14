import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Loader from '../components/Loader'
import { Canvas } from '@react-three/fiber'
import PearlDrone from '../models/pearldrone'

const Contact = () => {

  const [form, setform] = useState({name:'', email:'', message:''})
  const [isLoading, setisLoading] = useState(false);


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);

    emailjs.send(
     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
     {
      from_name: form.name,
      to_name: 'Eric',
      from_email: form.email,
      to_email: 'ericpossollo@gmail.com',
      message: form.message
     },
     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setisLoading(false);
      //TODO: Show success message
      //TODO: Hide an alert
      setform({ name: '', email: '', message: '' });
    }).catch((error) => {
      setisLoading(false);
      console.log(error);
      //TODO: Show error message
  });
};
  
  const handleFocus = () => {};
  const handleBlur = () => {};

  const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
  
    const adjustDroneForScreenSize = () => {
      let screenScale = null;
      let screenPosition = [0, -5, -10];
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
    <section className='relative flex w-full h-screen mt-10 items-center flex-col lg:flex-row px-4'>
    <div className='flex-1 flex flex-col justify-center items-center lg:items-start px-4 lg:px-12 w-full lg:w-auto'>
    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl head-text'>Get in Touch</h1>

    <form 
      className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}
        
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
             type='text'
             name='name'
             className='input'
             placeholder='Your Name'
             required
             value={form.name}
             onChange={handleChange}
             onFocus={handleFocus}
             onBlur={handleBlur}
           />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
             type='email'
             name='email'
             className='input'
             placeholder='youremail@something.com'
             required
             value={form.email}
             onChange={handleChange}
             onFocus={handleFocus}
             onBlur={handleBlur}
           />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
             name='message'
             rows={4}
             className='textarea'
             placeholder='Let me know how I can help you!'
             required
             value={form.message}
             onChange={handleChange}
             onFocus={handleFocus}
             onBlur={handleBlur}
           />
          </label>
          <button 
          type='submit'
          className='btn btn-blue'
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}

          </button>
        </form>
      </div>

      <div className='flex-1 flex justify-center h-full items-center w-full lg:w-auto'>
        <Canvas>
          <Suspense fallback={<Loader />}>

          <PearlDrone 
          position={dronePosition}
          scale = {droneScale} 
          rotation={rotation} 
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}/>
          </Suspense>
          

        </Canvas>
      </div>
    </section>
  )
}

export default Contact