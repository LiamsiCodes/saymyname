import Image from 'next/image'
import React from 'react'
import avif from "../../public/favicon.ico"
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsFacebook,BsTiktok } from 'react-icons/bs'

function About() {
  return (
    <div className='' >
      <div className='text-center mt-5'>
        <div className='flex items-center justify-center'>
        <Image src={avif} alt='logo' width={55} height={55} />
        </div>
     <h1 className='font-bold text-xl lg:text-2xl'>A brand that strives to inspire and push creative culture forward.</h1>
       <p className='mt-5 lg:font-semibold text-base'>
      We approach our work with the mentality that every product made is a learning
      experience to <br /> improve our craft. We are practitioners and purveyors of creative 
      culture and are inspired <br /> by its various forms from art,
      design, fashion, music, film, food, and more.</p>
      </div>
      <div className='flex items-center justify-center text-2xl cursor-pointer gap-5 mt-5'>
        <BsFacebook className='text-blue-700'/>
        <BsTiktok className=''/>
        <AiOutlineInstagram className='text-rose-800'/>
        <AiOutlineWhatsApp className='text-green-600'/>
      </div>
      <div className='flex flex-col justify-around'>
      </div>
    </div>
  )
}

export default About