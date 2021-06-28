import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from "react";
import { XIcon } from '@heroicons/react/outline'

function Header() {
    const router = useRouter()
    const searchInputPointer = useRef(null)
    return (
        <header>
            <Image 
                onClick={() => router.push("/")} src="https://ik.imagekit.io/7gyfsrb45jc3/logo_K4CZdNE90S.png" height={40} width={240} className="cursor-pointer"
            />
            <form className="flex border-gray-200 border rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
                <input type="text" ref={searchInputPointer} className="flex-grow focus:outline-none w-full" />
                <XIcon className="h-7 cursor-pointer text-gray-500 transition duration-150 transform hover:scale-110" />
            </form>
        </header>
    )
}

export default Header
