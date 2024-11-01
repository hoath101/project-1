import Link from "next/link";

function Header() {
    return (
        <main className="bg-blue-900 text-white">
            <div className="flex gap-96 ml-24">
                <div>
                    <h2 className="text-2xl font-bold m-1 text-green-300 justify-center  block ">Portfolio</h2>
                </div>
                <nav className="flex gap-28 text-xl font-medium m-2">
                    <Link href="/">Home</Link>
                    <Link href="./about">About</Link>
                    <Link href="./contact">Contact</Link>
                </nav>
            </div>
        </main>
    )
}
export default Header