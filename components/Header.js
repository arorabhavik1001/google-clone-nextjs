import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon } from "@heroicons/react/outline";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import HeaderOptions from "./HeaderOptions";
import Avatar from './Avatar'

function Header() {
  const router = useRouter();
  const searchInputPointer = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputPointer.current.value;
    if (!term) {
      return null;
    }
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="sm:flex w-full p-6 items-center">
        <div className={"sm:hidden absolute right-4"}>
      <Avatar  url={"https://images.squarespace-cdn.com/content/v1/57b711122e69cf5fea1cf5a6/1563373750117-4CCS2VSPC2XW4V1NI6HG/ke17ZwdGBToddI8pDm48kLJXQjpc-yWDKGokof8ZYb5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyvMLJO5Nc1jHayiyhnEEdtiL0fAxQ5VfgiNwce99YG5amUuI-5NVRyc6OSuLOpZwE/Screen+Shot+2019-07-17+at+10.29.00+AM.png?format=1000w"} />
      </div>
      {/* <Image
            loading="lazy"
            className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 inline-flex sm:hidden absolute right-4"
            src="https://images.squarespace-cdn.com/content/v1/57b711122e69cf5fea1cf5a6/1563373750117-4CCS2VSPC2XW4V1NI6HG/ke17ZwdGBToddI8pDm48kLJXQjpc-yWDKGokof8ZYb5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyvMLJO5Nc1jHayiyhnEEdtiL0fAxQ5VfgiNwce99YG5amUuI-5NVRyc6OSuLOpZwE/Screen+Shot+2019-07-17+at+10.29.00+AM.png?format=1000w"
            alt="profile pic"
            height={50}
            width={50}
            
          /> */}
        <div className="mb-3 sm:mb-0 justify-between">
          <Image
            onClick={() => router.push("/")}
            src="https://ik.imagekit.io/7gyfsrb45jc3/logo_K4CZdNE90S.png"
            height={40}
            width={240}
            className="cursor-pointer"
          />
          
        </div>
        <form className="flex border-gray-200 flex-grow border rounded-full shadow-lg max-w-3xl items-center px-6 py-3 sm:ml-10 mr-5">
          <input
            type="text"
            ref={searchInputPointer}
            className="flex-grow focus:outline-none w-full"
          />
          <XIcon
            className="h-7 cursor-pointer text-gray-500 transition duration-150 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputPointer.current.value = "")}
          />
          <MicrophoneIcon className="h-6 text-blue-500 transition duration-150 transform hover:110 mr-3 hidden sm:inline-flex border-l-2 pl-2 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 transition duration-150 transform hover:110 hidden sm:inline-flex"  onClick={search}/>
          <button hidden type="submit" onClick={search}>
            submit
          </button>
        </form>
        <div className="hidden sm:inline-flex ml-auto">
        <Avatar url={"https://images.squarespace-cdn.com/content/v1/57b711122e69cf5fea1cf5a6/1563373750117-4CCS2VSPC2XW4V1NI6HG/ke17ZwdGBToddI8pDm48kLJXQjpc-yWDKGokof8ZYb5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyvMLJO5Nc1jHayiyhnEEdtiL0fAxQ5VfgiNwce99YG5amUuI-5NVRyc6OSuLOpZwE/Screen+Shot+2019-07-17+at+10.29.00+AM.png?format=1000w"} />
        </div>
        {/* <Image
          loading="lazy"
          className="h-10 rounded-full cursor-pointer transition duration-150 transform  ml-auto sm:inline-flex hidden absolute right-4 mainImage"
          src="https://images.squarespace-cdn.com/content/v1/57b711122e69cf5fea1cf5a6/1563373750117-4CCS2VSPC2XW4V1NI6HG/ke17ZwdGBToddI8pDm48kLJXQjpc-yWDKGokof8ZYb5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyvMLJO5Nc1jHayiyhnEEdtiL0fAxQ5VfgiNwce99YG5amUuI-5NVRyc6OSuLOpZwE/Screen+Shot+2019-07-17+at+10.29.00+AM.png?format=1000w"
          alt="profile pic"
          height={40}
            width={40}
        /> */}
      </div>
      <HeaderOptions/>
    </header>
  );
}

export default Header;
