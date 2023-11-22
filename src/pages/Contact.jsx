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
    <section className='w-full h-screen text-white font-bold bg-stone-900 relative'>
    <div className='absolute text-xl z-10 inset-0 top-[130px] left-[-100px] w-[900px] mx-auto px-6 flex flex-row items-start gap-5'>
          <div className='flex flex-col justify-center items-center mt-5 bg-transparent'>
            <div className='w-10 sm:h-80 h-40 bg-gradient-to-b from-transparent via-red-400 to-purple-400'></div>
            <div className='w-10 h-10 mt-5 bg-purple-400'></div>
            <div className='w-10 h-10 mt-5 bg-purple-500'></div>
        </div>
            <div>
            <h1 className='text-8xl font-bold'>Tell me about your project &#x268C;&#x268D;&#x268E;&#x268F;</h1>
             <p className='text-sm font-extralight'>or about anything!!!!</p>
        </div>
          <div className='absolute right-[150px] bottom-10'>
        <Canvas 
        style={{ height: '100px', width: '100px' }}>
        <Suspense fallback={<Loader />}>
          <Cube 
 
           initialRotation={1}/>
          </Suspense>
        </Canvas>
          <Canvas className='absolute left-24 bottom-10 cursor-grabbing'
        style={{ height: '200px', width: '200px' }}>
        <Suspense fallback={<Loader />}>
          <Cube 
          initialRotation={2} />
          </Suspense>
        </Canvas>
        <Canvas 
        style={{ height: '400px', width: '400px' }}>
        <Suspense fallback={<Loader />}>
          <Cube 
          initialRotation={0}/>
          </Suspense>
        </Canvas>
        </div>
    <form 
      className='w-full flex flex-col gap-7 mt-5'
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
          className='text-center mt-5 px-2 py-1 border-none bg-gradient-to-r from-red-300 via-purple-300 to-teal-300 hover:bg-none hover:bg-white hover:text-black'
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