import React from 'react'
import bg from "../../public/b17.jpg"
import bg1 from "../../public/b10.jpg"
import Image from 'next/image'

function Grid() {
  return (
    <div className='py-12 mx-auto container xl:max-w-screen-xl '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div className='flex items-center justify-center'>
                <Image src={bg} width={380} className='absolute' height={500} alt="dkfkf"/>
                <div className='relative py-14 px-6 text-white'>
                <p className='font-bold'>crazy deals</p>
                <h1 className='font-extrabold text-xl'>buy 1 get 1 for free</h1>
                <p className='font-bold'>The best chemises are on sell at <span className='text-black italic'>cara</span></p>
                <button className='mt-4  bg-[#088178] outline-none border-none py-1 px-4 rounded-md font-semibold text-[#ffff]'>Buy now</button>
                </div>
            </div>
            
            <div className='flex items-center justify-center'>
                <Image src={bg1} className='absolute' width={380} height={500} alt="dkfkf"/>
                <div className='relative  py-14 px-6 text-white'>
                <p className='font-bold'>spring/summer</p>
                <h1 className='font-extrabold text-2xl'>upcomming season</h1>
                <p className='font-bold mt-1'>The best chemises are on sell at cara</p>
                <button className='mt-4 text-center
                 outline-none py-1 px-4 rounded-md
                 font-semibold border border-gray-200
                 text-[#ffff]'>Collection</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Grid