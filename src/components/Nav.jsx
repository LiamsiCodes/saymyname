import Image from 'next/image'
import React from 'react'
import img from "../../public/favicon.ico"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'

function Nav() {
    const {formattedTotalPrice,cartCount}=useShoppingCart();
  return (
    <div className='p-8 bg-[#E4E6F4] shadow-xl'>
        <div className='flex items-center justify-between'>
            <Link href="/">
        <Image src={img} alt='ssd' width={84} className='cursor-pointer'/>

            </Link>
        <div className='flex items-center justify-center gap-1'>
            <Link href="/cart">
        <AiOutlineShoppingCart className='cursor-pointer' size={30}/>
            </Link>
        <span className='text-sm font-bold text-gray-700'>{formattedTotalPrice}$</span>
        <span className='text-sm font-bold text-gray-700'>({cartCount})</span>
        </div>
        </div>
    </div>
  )
}

export default Nav


