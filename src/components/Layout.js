import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import {Inter} from "next/font/google"


const inter=Inter({
  subsets:["latin"],
  variable:"--font-inter"
})

function Layout({children}) {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <Nav/>
      <main className="flex-grow">{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout