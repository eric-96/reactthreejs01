import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Loader from '../components/Loader'
import { Canvas } from '@react-three/fiber'
import Cube from '../models/cube'

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
  
 


  return (
    <section className='flex flex-col text-white justify-center items-center h-screen w-full'>
        <section className='w-[150vw] z-0 h-[100vh] bottom-0 rounded-full absolute top-[650px] blur-3xl bg-gradient-to-r from-teal-300 to-fuchsia-400'></section>
        <Canvas 
        style={{ height: '100px', width: '100px' }}>
        <Suspense fallback={<Loader />}>
          <Cube 
           randomColorStart={true} 
           initialRotation={1}/>
          </Suspense>
        </Canvas>
          <Canvas className='absolute right-24 bottom-10 cursor-grabbing'
        style={{ height: '200px', width: '200px' }}>
        <Suspense fallback={<Loader />}>
          <Cube 
          randomColorStart={true}
          initialRotation={2} />
          </Suspense>
        </Canvas>
        <Canvas 
        style={{ height: '400px', width: '400px' }}>
        <Suspense fallback={<Loader />}>
          <Cube 
          randomColorStart={true}
          initialRotation={0}/>
          </Suspense>
        </Canvas>
    <div className='sm:w-full sm:px-24 sm:absolute lg:w-1/2 lg:justify-start flex sm:justify-center sm:items-center flex-col z-10'>
    <h1 className='text-4xl font-bold'>Let's have a chat</h1>
    <p className='text-sm font-extralight'>about anything!!!!</p>

    <form 
      className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}
        
        >
          <label>
            Name
            <input
             type='text'
             name='name'
             className='input'
             placeholder='Your Name'
             required
             value={form.name}
             onChange={handleChange}
           />
          </label>
          <label>
            Email
            <input
             type='email'
             name='email'
             className='input'
             placeholder='youremail@something.com'
             required
             value={form.email}
             onChange={handleChange}
           />
          </label>
          <label>
            Your Message
            <textarea
             name='message'
             rows={4}
             className='textarea'
             placeholder='Let me know how I can help you!'
             required
             value={form.message}
             onChange={handleChange}
           />
          </label>
          <button 
          type='submit'
          className='text-center mt-5 px-2 py-1 border-solid border-2 border-white backdrop-blur-3xl'
          disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}

          </button>
        </form>
      </div>
    </section>
    
    
  )
}

export default Contact