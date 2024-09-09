import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

export default function Navbar() {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-2xl font-bold">
          <Link href={"/"} className=" hover:text-blue-400">
            {" "}
            HarshBlog
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className=" hover:text-purple-500 hover:font-bold">
            Home
          </Link>
          <Link href="/about" className=" hover:text-purple-500 hover:font-bold">
            About
          </Link>
          <Link href="/blog" className=" hover:text-purple-500 hover:font-bold">
            Blog
          </Link>
          <Link href="/contact" className=" hover:text-purple-500 hover:font-bold" >
            Contact
          </Link>
          <div  className="flex items-center">
            <Button className="mx1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Signup
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">HarshBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/" className=" hover:text-purple-500 hover:font-bold hover:scale-105 transition-transform duration-300 "> Home</Link>
                    <Link href="/about" className=" hover:text-purple-500 hover:font-bold hover:scale-105 transition-transform duration-300 ">About</Link>
                    <Link href="/blog" className=" hover:text-purple-500 hover:font-bold hover:scale-105 transition-transform duration-300 ">Blog</Link>
                    <Link href="/contact" className=" hover:text-purple-500 hover:font-bold hover:scale-105 transition-transform duration-300 ">Contact</Link>
                    <div>
                      <Button className="mx-1 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant="outline">
                        Signup
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
