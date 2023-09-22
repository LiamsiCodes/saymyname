import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {FaRegCircleXmark} from "react-icons/fa6";
import { useShoppingCart } from 'use-shopping-cart';


function CartPro({product}) {
  const {setItemQuantity,removeItem}=useShoppingCart()
  return (
    <div className='bg-white w-full flex items-center justify-between gap-4 mt-5 p-5 rounded-lg shadow-lg'>
      <div className=''>
     <Link href={`/products/${product.id}`} className='flex items-center flex-col'> 
      <div className='h-20 relative w-20'>
      <Image src={product.image} alt='gfbgd' fill objectFit='contain' />
      </div>
      <p className='font-semibold text-center text-base md:text-xl lg:text-xl mt-2'>{product.name}</p>
      </Link>
      </div>


    <div className='flex items-center justify-center '>
     <div className='flex items-center mr-20 space-x-3' >
     <button 
       onClick={()=>setItemQuantity(product.id,product.quantity+1)}
       className=" p-1 cursor-pointer rounded-sm hover:bg-green-500  duration-300">
        <AiOutlinePlus className="w-6 h-6"/></button>

        <p className=' font-bold text-xl'>{product.quantity}</p>

        <button 
         onClick={()=>setItemQuantity(product.id,product.quantity-1)}
         className=" p-1 cursor-pointer rounded-sm hover:bg-red-500  duration-300">
        <AiOutlineMinus className="w-6 h-6"/></button>
     </div>

    <div className='items-center gap-2  flex'>
      <p className='-ml-6'>{product.formattedPrice}</p>
      <button
      onClick={()=>removeItem(product.id)}
      className='hover:text-red-500 duration-500  cursor-pointer'><FaRegCircleXmark /></button>
    </div>

   </div>
    </div>
  )
}

export default CartPro