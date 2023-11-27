import Image from "next/image";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";



export default function Home() {
  return (
    <>
        <Navbar/>
    <div className="bg-[black] h-[38rem]">
      <div className="bg-[#323232] h-2"></div>
       <div className="flex justify-center mt-40">
        <div className="mt-20">
          <h1 className="text-white text-[4rem] text-bold">Enjoy on your TV</h1>
          <p className="text-white text-[2rem]">Watch on smart TVs, PlayStation, Xbox, Chromecast,</p>
          <p className="text-white text-[2rem]">Apple TV, Blu-ray players and more.</p>
        </div>
        <div>
          <Image src="/tv-img.png" alt="Picture of the author" width={600} height={800} />
        </div>
       </div>
    </div>
     <div className="bg-[black] h-[38rem]">
     <div className="bg-[#323232] h-2"></div>
      <div className="flex justify-center mt-[5rem]">
      <div>
         <Image src="/mobile_img.png" alt="Picture of the author" width={400} height={400} />
       </div>
       <div className="mt-20">
         <h1 className="text-white text-[3rem] text-bold">Download your shows to watch offline</h1>
         <p className="text-white text-[1.5rem]">Save your favourites easily and always have</p>
         <p className="text-white text-[1.5rem]">something to watch.</p>
       </div>
      </div>
   </div>
     <div className="bg-[black] h-[38rem]">
     <div className="bg-[#323232] h-2"></div>
      <div className="flex justify-center mt-[5rem]">
       <div className="mt-20 mr-8">
         <h1 className="text-white text-[4rem] text-bold">Watch everywhere</h1>
         <p className="text-white text-[2rem]">Stream unlimited movies and TV shows on your</p>
         <p className="text-white text-[2rem]">phone, tablet, laptop, and TV.</p>
       </div>
       <div>
         <Image src="/pc_img.png" alt="Picture of the author" width={600} height={400} />
       </div>
      </div>
   </div>
     <div className="bg-[black] h-[38rem]">
     <div className="bg-[#323232] h-2"></div>
      <div className="flex justify-center mt-[5rem]">
      <div>
         <Image src="/children_img.png" alt="Picture of the author" width={600} height={400} />
       </div>
       <div className="mt-28 ml-8">
         <h1 className="text-white text-[4rem] text-bold">Create profiles for kids</h1>
         <p className="text-white text-[1.5rem]">Send children on adventures with their favourite</p>
         <p className="text-white text-[1.5rem]">characters in a space made just for them—free with your membership.</p>
       </div>
      </div>
      
   </div>
   <Footer/>
   </>
  )
}
