import React, { Suspense, useState } from 'react'
import emailjs from '@emailjs/browser'
import Loader from '../components/Loader'
import { Canvas } from '@react-three/fiber'
import Cube from '../models/cube'

const Contact = () => {

  const [form, setform] = useState({name:'', email:'', message:''})
  const [isLoading, setisLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);


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
      setSuccessMessage('Your message has been sent successfully!');
      setErrorMessage(null);
      setform({ name: '', email: '', message: '' });
    }).catch((error) => {
      setisLoading(false);
      console.log(error);
      setErrorMessage('An error occurred while sending your message.');
      setSuccessMessage(null);
  });
};
  
 


  return (
    <section className='w-full h-screen flex justify-center text-white font-bold bg-stone-900 py-[100px]'>
      
    <div className='flex z-10 flex-col absolute p-5 items-center h-[500px] justify-center sm:w-4/5 lg:w-3/5'>
    {errorMessage && <p className="error-message text-white p-2 rounded-full bg-red-400">{errorMessage}</p>}
        {successMessage && <p className="success-message text-white p-2 rounded-full bg-green-400">{successMessage}</p>}
      <div>
            <div className='text-center'>
            <h1 className='text-5xl md:text-6xl font-bold'>Tell me about your<br></br> project needs</h1>
             <p className='text-sm font-regular bg-stone-900 bg-opacity-30 mt-2'>or about anything !!!!</p>
    </div>
          <form 
            className='text-start p-2 flex flex-col items-center w-full gap-5'
              onSubmit={handleSubmit}
              
              >
                <label className='w-full'>
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
                <label className='w-full'>
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
                <label className='w-full'>
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
                className='text-center px-2 py-1 border hover:bg-none hover:bg-white hover:text-black'
                disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
      
                </button>
              </form>
        </div>
          </div>
         
        
          <div className=''>
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
        style={{ height: '400px', width: '400px'}}>
        <Suspense fallback={<Loader />}>
        <Cube 
        initialRotation={0}
        randomColorStart={true}/>
        </Suspense>
      </Canvas>
        </div>
    </section>
    
    
  )
}

export default Contact