import Link from 'next/link';
import { AiFillCheckCircle } from 'react-icons/ai';



export default function SucessPage(){
    return(
    <div className='text-center py-12'> 
        <div className='flex flex-col items-center'>
            <AiFillCheckCircle className="flex-shrink-0 mx-auto text-lime-500 h-24 w-24"  />
            <h2 className='font-bold text-center text-3xl'>Thanks for your order!</h2>
            <p className='mt-1 text-xl'>Go back to home page<Link href={"/"}> <span className='underline text-red-600'>here!</span></Link> </p>
        </div>
    </div>
)}