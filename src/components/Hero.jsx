import Image from 'next/image'
import React from 'react'
import banner from "../../public/pic.webp"
function Hero() {
  return (
    <div className='mt-1 flex bg-[#E4E6F4] items-center justify-between '>

        <div className='pt-11 md:pt-20 pl-5'>
            <p className='font-bold text-lg'>Trade-in-offer</p>
            <h1 className='font-bold mt-1 text-2xl md:text-3xl  lg:text-5xl'>Super value deals <br /> <span className='text-[#0F7F76]'>On all projects</span></h1>
            <p className= 'font-bold md:flex hidden text-gray-600 mt-2'>save more with coupons & up to 70% off!</p>
            <button className='bg-[#D0B9A2] px-5 font-semibold py-1 mt-4  rounded-lg cursor-pointer text-[#0F7F76]'>Shop Now</button>
        </div>

        <div className=''>
            <Image src={banner} className='md:w-[400px] w-[300px]'/>
        </div>
    </div>
  )
}

export default Hero
