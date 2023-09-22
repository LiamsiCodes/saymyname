import About from '@/components/About'
import Cards from '@/components/Cards'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import { stripe } from '@/utils/store'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  console.log(products)
  return (
    <main
      className={`${inter.className}`}>
    <Hero/>
    <Features/>
    <Products />

   <div className='py-12 px-6 mx-auto container xl:max-w-screen-xl '>
    <div className='grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
    {products.map((pro)=>(
       <Cards pro={pro}/>
       ))}
       </div>
   </div>
   <Grid/>
   <Contact/>
   <About/>

    </main>
  )
}


export async function getStaticProps(){
  const inventory=await stripe.products.list({
    expand:["data.default_price"],
    limit:8
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
  })
  return{
    props:{
      products
    }
  }
}