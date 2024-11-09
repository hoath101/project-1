import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Contact(){
    return(
        <main className="">
            <div className="flex justify-center mt-8">
            <div className="bg-blue-950 rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Contact Me</h2>
        <form className="border-gray-500">
            <div className="mb-4">
                <label className="block text-sm font-medium text-white" htmlFor="name">Name</label>
                <input type="text" id="name" className="bg-gray-300 mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-white" htmlFor="email">Email</label>
                <input type="email" id="email" className="bg-gray-300 mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-white" htmlFor="message">Message</label>
                <textarea id="message" rows={4} className="bg-gray-300 mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">Send</button>
        </form>
    </div></div>
    <footer className="bg-blue-950 h-36 max-w-screen-2xl mt-10">
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
export default Contact