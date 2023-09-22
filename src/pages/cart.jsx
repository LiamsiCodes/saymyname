import Link from 'next/link'
import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import axios from 'axios'
import CartPro from '@/components/CartPro'

export default function CartPage() {
    const {cartCount,clearCart,redirectToCheckout,cartDetails,formattedTotalPrice}=useShoppingCart()
    const [isRedirecting,setRedirecting]=useState(false)

    async function onCheckout(){
        if(cartCount > 0){
            try {
                setRedirecting(true)
                const {id}= await axios.post("/api/checkout-sessions",cartDetails).then((res)=>res.data)
                const result=await redirectToCheckout(id)
                if(result?.error){
                    console.log("error in result",result)
                }
            } catch (error) {
                console.log("error",error)
            }finally{
                setRedirecting(false)
            }
        }
    }
  return (
    <div>
     {cartCount > 0 ?(
         <div className='p-16'>
             <h2 className='font-bold text-2xl md:text-4xl'>Your Shopping Cart:</h2>
             <div className="">
                <span className='mt-1 text-xl font-semibold'>{cartCount} {cartCount>1 ?"items" :"item"} on the cart </span>
                <button className='font-semibold ml-2 text-red-600 ' onClick={()=>clearCart()} >(Clear All)</button>
             </div>
         </div>
     ) :(
    <div className='p-16'>
        <h2 className='font-bold text-4xl'>Your Cart is empty</h2>
        <p className='mt-1 text-xl'>Check our products <Link href={"/"}> <span className='underline text-red-600'>here!</span></Link> </p>
    </div>
     )}

    {cartCount > 0 &&(
        <div>
            {Object.entries(cartDetails).map(([productId,product])=>(
               <CartPro key={productId} product={product} />
            ))}
             <div className='flex flex-col mr-6 mt-5 items-end'>
        <p className='text-xl'>Total: <span className='font-semibold'>{formattedTotalPrice}</span> </p>
        <button 
        disabled={isRedirecting}
        onClick={onCheckout}
        className='mt-5 hover:bg-[#EFF5ED] duration-300 hover:text-[#355657]  bg-[#088178] outline-none border-none py-1 px-4 rounded-md font-semibold text-[#ffff]'>
        {isRedirecting ? "Redirecting...":"Go To Checkout" }</button>
        </div>
        </div>
    )}

    </div>
  )
}

