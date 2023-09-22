import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'
import { AiFillStar} from 'react-icons/ai'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

function Cards({pro}) {
  const {addItem}=useShoppingCart()
  function handleMe(e){
    e.preventDefault()
    addItem(pro)
    toast.success(`${pro.name} added to your cart`)
  }
  return (
    <div className='border rounded-xl shadow-xl'>
      <Link href={`/products/${pro.id}`}>
      <div className='flex items-center p-2 justify-center'>
        <Image src={pro.image} className='rounded-lg' width={200} height={200} alt='dc' />
      </div>
      <div className=''>
        <p className='text-[#355657] text-center font-bold'>{pro.name}</p>
        <div className='flex mt-2 text-yellow-400 justify-center items-center gap-1'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <p className='text-[#355657] text-center font-semibold mt-2'>{formatCurrencyString({currency:pro.currency,value:pro.price})}</p> 
       
        <div className='flex items-center justify-center'>
        <button
        onClick={handleMe}
        className='bg-[#EFF5ED] hover:bg-[#088178] hover:text-white duration-300  mb-3 outline-none border-none mt-2 py-1 px-6 rounded-lg font-semibold text-[#355657]'>Add To Cart</button>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Cards
