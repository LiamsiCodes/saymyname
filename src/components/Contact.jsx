import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

function Contact() {
    const [state, handleSubmit] = useForm("mrgwllkv");
    if (state.succeeded) {
      return <div className='text-center text-white'>
        <div className='mt-8 flex items-center justify-center w-full h-44 bg-[#041D44]'>
        <p className='font-bold  text-3xl'>Thanks for joining!</p>
        </div>
      </div> 
        
  }
  return (
    <div className='mt-8 w-full h-44 bg-[#041D44]'>
     <div className='flex justify-center'>

      <div className='py-5 px-5 '>
        <h1 className='font-bold text-white text-center text-lg'>Sign Up For Newsletters</h1>
        <p className='text-gray-400 text-center md:text-xl text-sm font-semibold '>Get E-mail for updates about our latest shop and <span className='text-yellow-400'>special offers.</span></p>
    <form onSubmit={handleSubmit} className='flex items-center justify-center mt-6'>
    <input className=' bg-white px-4 py-2 mr-2 rounded-sm  outline-none text-left text-gray-700 border-none' placeholder='Your email address' id="email" type="email"  name="email"/>
    <ValidationError prefix="Email" field="email" errors={state.errors}/>
     <button className='bg-green-700 -ml-2 rounded-sm text-white px-4 py-2' type="submit" disabled={state.submitting}>Submit</button>
   </form>
      </div>

     </div>
    </div>
  )
}

export default Contact


