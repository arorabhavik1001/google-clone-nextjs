import HeaderOption from "./HeaderOption"
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline";


function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} Title="All" selected />
                <HeaderOption Icon={PhotographIcon} Title="Images" />
                <HeaderOption Icon={PlayIcon} Title="Vidoes"  />
                <HeaderOption Icon={NewspaperIcon} Title="News"  />
                <HeaderOption Icon={MapIcon} Title="Maps"  />
                <HeaderOption Icon={DotsVerticalIcon} Title="More"  />
            </div>
            <div className="flex space-x-4">
            <p onClick={() => alert("This is a dummy button")} className="link cursor-pointer">Settings</p> 
            <p onClick={() => alert("This is a dummy button")} className="link cursor-pointer">Tools</p> 
            </div>
        </div>
    )
}

export default HeaderOptions
