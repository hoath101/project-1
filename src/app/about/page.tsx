import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link"
function About() {
    return (
        <main className="bg-gray-300 h-max ">
            <h1 className="flex justify-center text-3xl font-semibold text-amber-800 pt-7">About Me</h1>
            <div className="flex justify-center mt-10">
                <p className="max-w-screen-md justify-items-center mx-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia, cum at reiciendis
                    consectetur labore aspernatur explicabo minus eligendi et fuga nihil porro, neque sint earum
                    enim commodi voluptatem adipisci! Officiis placeat dignissimos laborum inventore, et accusamus!
                    Ad id recusandae nam ea aperiam ipsum accusamus earum deleniti sint! Qui, fuga!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima aliquam
                    corporis tempora, repudiandae nam alias. Aliquid, voluptatum. Illo dolore, eum architecto corporis quos
                    quasi aperiam expedita! Reprehenderit, voluptates pariatur itaque blanditiis explicabo ullam harum
                    repellendus officiis quae odio modi enim iusto sapiente illum minus iste aspernatur numquam quisquam
                    voluptatum vitae commodi. Corporis blanditiis fuga at eaque, id optio aperiam ut illum pariatur fugit
                    quia odio dignissimos repellat consequuntur excepturi autem recusandae temporibus totam quae.</p>
            </div>
            <div className="flex justify-center mt-6">
                <button className="h-12 w-32 bg-blue-900 text-white font-semibold  px-2">
                    <Link href="./contact">Contact me</Link>
                </button>
            </div>
            <footer className="bg-blue-950 h-36 max-w-screen-2xl mt-20">
                <h1 className="flex justify-center text-xl font-semibold pt-3">Dummy Portfolio Website</h1>
                <h2 className="flex justify-center text-xl font-semibold mt-3">Copyright © 2024</h2>
                <div className="text-2xl flex justify-center gap-9 font-semibold mt-6">
                    <FaFacebook className="fill-blue-700" />
                    <FaSquareXTwitter />
                    <FaLinkedin className="fill-blue-600" /></div>
            </footer>
        </main>
    )
}
export default About