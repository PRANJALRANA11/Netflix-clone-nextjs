"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  return (
    <>
<header id='nav' class="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  text-gray-600 body-font h-[45rem] ">
  <div class=" container mx-auto flex flex-wrap   flex-col md:flex-row items-center">
    <Link href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <Image className='ml-[5rem]' src="/Netflix.svg" alt="Picture of the author" width={200} height={500} />
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <button onClick={() => router.push('/authentication')} class="inline-flex items-center bg-[red] border-0 py-1 mr-40 px-3 focus:outline-none hover:bg-red-600 rounded text-white font-semibold  mt-4 md:mt-0">Sign In
      
        </button>
    </nav>
  </div>
  <div className='m-auto w-[70rem] mt-40'>
    <h1 className='text-white text-[3rem] font-bold'>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
    <p className='text-white text-center text-[1.5rem]'>Endless entertainment starts at just ₹ 149. Cancel anytime.</p>
    <p className=' mt-6 text-white text-center text-[1.3rem]'>Ready to watch? Enter your email to create or restart your membership.</p>
    <div>
      <input className=' mt-6 ml-80 h-12 rounded-sm p-4 text-slant-400 text-bold border-[#ffffffb7] bg-[#000000b1] border-[1px] w-[20rem]' placeholder='Email Address'/>
      <button className=' bg-[red] h-12 w-44 border-0 py-1 mr-40 px-3 focus:outline-none hover:bg-red-600 rounded text-white font-semibold ml-4  mt-4 md:mt-0'>Get Started</button>
    </div>
  </div>
</header> 

    </>
  )
}

export default Navbar
