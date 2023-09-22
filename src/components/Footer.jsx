import Image from 'next/image'
import React from 'react'
import jpg from "../../public/pay.png"
function Footer() {
  return (
    <footer className='bg-gray-200 mt-11 flex items-center flex-col p-3 shadow-lg text-gray-600'>
      <h1 className='mt-2 font-semibold italic'>© 2023 Cara. All rights are reserved</h1>
      <h1 className='font-bold mt-3'>Secured Payments Gateways:</h1>
      <Image src={jpg} alt="sjsj" className='mt-3'/>
      <div className= 'flex items-center cursor-pointer mt-3 gap-3 underline font-semibold'>
        <p className=''>Security</p>
        <p>Contact us</p>
        <p>Privacy Policy</p>
      </div>

    </footer>
  )
}

export default Footer
