import Image from "next/image";
import { stripe } from "@/utils/store"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import toast from "react-hot-toast";


 export default function ProductsPage({product}){

    const [count,setCount]=useState(1);
    const {addItem}=useShoppingCart()

     function Add (event){
        event.preventDefault();
       const id=toast.loading(`Adding ${count} item${count >1 ? "s":""}`);
       addItem(product,{count});
       toast.success(`${count} ${product.name} added`,{id});
     };
 return(
    <div className="mt-24 grid grid-cols-1 items-center justify-center lg:grid-cols-2 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <Image className="hover:scale-105 duration-500 cursor-pointer shadow-xl rounded-md" src={product.image} width={300} height={600} alt="sac"/>
             </div>
           
           <div className="">

             <div className="text-center md:text-left mt-5">
                <h1 className="md:text-3xl text-2xl text-[#088178]  font-bold ">{product.name}</h1>
                <p className='font-bold text-xl mt-7'>{formatCurrencyString({currency:product.currency,value:product.price})}</p> 
                <span className="text-semibold">Quantity:</span>

                <div className="flex gap-4 mt-4 justify-center md:justify-start items-center">
                    <button onClick={()=>setCount(count+1)} className="p-1 cursor-pointer rounded-sm hover:bg-green-500  duration-500"><AiOutlinePlus className="w-6 h-6"/></button>
                    <span className="font-bold text-xl">{count}</span>
                    <button disabled={count < 1} onClick={()=>setCount(count-1)} className="p-1 cursor-pointer rounded-sm hover:bg-red-500  duration-500"><AiOutlineMinus className="w-6 h-6"/></button>
                </div>
                <div className="flex justify-center md:justify-start items-center">
                <h1 onClick={Add} className="mt-4 hover:bg-[#EFF5ED] duration-300 hover:text-[#355657]  bg-[#088178] text-center cursor-pointer max-w-[200px]   outline-none border-none py-1 px-4 rounded-lg font-semibold text-[#ffff]">Add To Cart</h1>
                </div>
              
                <div>
                    <h1 className="font-bold text-xl mt-6">Product Details:</h1>
                    <p className="max-w-[600px]  font-semibold">Introducing our stylish and comfortable chemise. Made from high-quality fabric, it offers a perfect blend of elegance and comfort. With its flattering fit and delicate details, this chemise is a must-have addition to your wardrobe. Experience ultimate relaxation and timeless style with our exquisite chemise.</p>
                </div>
             
             </div>
             </div>
    </div>
 )}
 



















export async function getStaticPaths(){
    const inventory=await stripe.products.list();
    const paths=inventory.data.map((product)=>({
        params:{id:product.id},
    }));
    return{
        paths,
        fallback:"blocking"
    }
}

export async function getStaticProps({params}){
    const inventory = await stripe.products.list({
        expand:["data.default_price"],
      });
      const products=inventory.data.map((product)=>{
        const price=product.default_price;
        return{
          currency:price.currency,
          id:product.id,
          name:product.name,
          price:price.unit_amount,
          image:product.images[0],
        }
        });
        const product=products.find((product)=>product.id === params.id)
        return{
          props:{
            product,
          },
        }};