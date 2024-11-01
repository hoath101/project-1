import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Home(){
  return(
    <main className="bg-gray-400">
      <div className="flex justify-center gap-10">
      <div className="mt-28 ">
        <Image src="/picture/pic-1.avif" width={200} height={150} alt="profile pic"
       className="rounded-full"/>
      </div>
        <div className=" mt-28 ml-20 ">
        <h1 className="text-2xl font-semibold text-blue-700 ">Hi, i am Hammad</h1>
        <h2 className="text-xl font-medium mt-2">Frontened Developer</h2>
        <p className="max-w-72 mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, reprehenderit, hic dignissimos minima eius quisquam non, quaerat facilis tempora quam unde! Ab aliquam fugit atque officia, est eos?</p>
      </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="h-12 w-32 bg-red-800 "><Link href="./about">About me</Link></button>
      </div>
      <footer className="bg-blue-950 h-36 max-w-screen-2xl mt-20">
        <h1 className="flex justify-center text-xl font-semibold pt-3">Dummy Portfolio Website</h1>
        <h2 className="flex justify-center text-xl font-semibold mt-3">Copyright © 2024</h2>
        <div className="text-2xl flex justify-center gap-9 font-semibold mt-6">
        <FaFacebook className="fill-blue-700"/>
        <FaSquareXTwitter/>
        <FaLinkedin className="fill-blue-600"/></div>
      </footer>
    </main>
  )
}
export default Home