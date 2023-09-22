import Image from 'next/image'
import React from 'react'
import f1 from "../../public/f1.png"
import f2 from "../../public/f2.png"
import f3 from "../../public/f3.png"
import f4 from "../../public/f4.png"
import f5 from "../../public/f5.png"
import f6 from "../../public/f6.png"


function Features() {
  return (
    <div className='mt-8'>
      <div className='grid ml-12 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>

        <div className='border h-[145px] w-[130px] text-center flex items-center flex-col'>
            <Image alt="sdd" src={f1}  className='pt-2' />
            <p className=' text-sm bg-[#E9CED7] rounded-sm px-1 mt-5 text-blue-900 font-semibold'>Free Shipping</p>
        </div>

        <div className='border h-[145px] w-[130px] text-center flex items-center flex-col'>
            <Image alt="sdd" src={f2}  className='pt-2' />
            <p className='text-sm bg-[#AACEB6] px-1 mt-5 rounded-sm text-blue-900 font-semibold'>Online Order</p>
        </div>

        <div className='border h-[145px] w-[130px] text-center flex items-center flex-col'>
            <Image alt="sdd" src={f3} className='pt-2' />
            <p className='text-sm bg-[#9BB7C1] px-1 mt-5 rounded-sm text-blue-900 font-semibold'>Save Money</p>
        </div>
        
        <div className='border h-[145px] w-[130px] text-center flex items-center flex-col'>
            <Image alt="sdd" src={f4}  className='pt-2'/>
            <p className='text-sm bg-[#BAC1E3] px-1 mt-5 rounded-sm text-blue-900 font-semibold'>Promotions</p>
        </div>

        <div className='border h-[145px] w-[130px] text-center flex items-center flex-col'>
            <Image alt="sdd" src={f5} className='pt-2' />
            <p className='text-sm bg-[#E7CCE5] px-1 mt-5 rounded-sm text-blue-900 font-semibold'>Happy Sell</p>
        </div>

        <div className='border h-[145px] w-[130px] text-center flex items-center flex-col'>
            <Image alt="sdd" src={f6} className='pt-2'/>
            <p className='text-sm bg-[#E6DDD3] px-1 mt-5 rounded-sm text-blue-900 font-semibold'>24/7 Support</p>
        </div>

      </div>
    </div>
  )
}

export default Features
