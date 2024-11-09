import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
    return (
        <main className="bg-blue-900 text-white">
            <div className="flex ml-10 justify-around">
                <div>
                    <h2 className="text-2xl font-bold m-1 text-green-300 justify-center">Portfolio</h2>
                </div>
                <nav className="block md:hidden ml-auto mr-4 mt-2">
                    <Sheet>
                        <SheetTrigger className="">
                            <RxHamburgerMenu className="text-2xl" />
                        </SheetTrigger>
                        <SheetTitle></SheetTitle>
                        <SheetContent className="w-56 bg-slate-300">
                            <ul className="flex flex-col justify-center gap-3 text-xl text-blue-950 mt-6">
                                <Link href="/">Home</Link>
                                <Link href="/about">About</Link>
                                <Link href="/contact">Contact</Link>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </nav>
                <nav>
                    <ul className="md:block hidden text-xl font-semibold space-x-14">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </ul>
                </nav>
            </div>

        </main>
    )
}
export default Header