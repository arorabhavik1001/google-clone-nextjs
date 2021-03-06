import Head from 'next/head'
import Avatar from '../components/Avatar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon,} from '@heroicons/react/outline'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const searchInputPointer = useRef(null)
  const router = useRouter()
  const search = (e) => {
    e.preventDefault()
    const term = searchInputPointer.current.value
    if(!term){
      return null
    }
    router.push(`/search?term=${term}`)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Bhavik&#39;s Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />
      </Head>
      <header className="flex justify-between p-5 w-full text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p onClick={() => alert("This is a dummy button")} className="link cursor-pointer">About</p>
          <p onClick={() => alert("This is a dummy button")} className="link cursor-pointer">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="https://mail.google.com/mail/?authuser=0&ogbl" className="link cursor-pointer">Gmail</a>
          <p onClick={() => alert("This is a dummy button")} className="link cursor-pointer">Images</p> 
          <p onClick={() => alert("This is a dummy button")}><ViewGridIcon className="h-10 w-7 rounde-full cursor-pointer transition duration-150 transform hover:scale-110"/></p>
          <p onClick={() => alert("This is a dummy button")}><Avatar url={"https://images.squarespace-cdn.com/content/v1/57b711122e69cf5fea1cf5a6/1563373750117-4CCS2VSPC2XW4V1NI6HG/ke17ZwdGBToddI8pDm48kLJXQjpc-yWDKGokof8ZYb5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyvMLJO5Nc1jHayiyhnEEdtiL0fAxQ5VfgiNwce99YG5amUuI-5NVRyc6OSuLOpZwE/Screen+Shot+2019-07-17+at+10.29.00+AM.png?format=1000w"} /></p>
        </div>
      </header>
      <form className="flex flex-col items-center mt-52 flex-grow w-4/5">
        {/* <Image src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" width={300} height={100} /> */}
        <Image src="https://ik.imagekit.io/7gyfsrb45jc3/logo_K4CZdNE90S.png" width={605} height={100} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md  border rounded-full border-gray-200 py-1.5 items-center px-5 sm:max-w-xl lg:max-w-2xl">
          <SearchIcon onClick={search} className="h-6 text-gray-500 mr-5 w-7 rounde-full cursor-pointer transition duration-150 transform hover:scale-110" />
          <input ref={searchInputPointer} type="text" className="focus:outline-none flex-1 h-9" />
          <MicrophoneIcon className="h-7 text-gray-500 w-7 rounde-full cursor-pointer transition duration-150 transform hover:scale-110" />
        </div>
        <div className="flex flex-col sm:flex-row"> 
          <button onClick={search} className="button">
            Google Search
          </button>
          <button onClick={search} className="button">
            I&#39;m Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  )
}