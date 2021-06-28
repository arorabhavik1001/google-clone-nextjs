import { GlobeIcon } from "@heroicons/react/outline";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>India</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 px-8 py-3 ">
          <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
            <p className="link" onClick={() => alert("This is a dummy button")}>Advertising</p>
            <p className="link" onClick={() => alert("This is a dummy button")}>Business</p>
            <p className="link" onClick={() => alert("This is a dummy button")}>How search works</p>
          </div>
          <div className="flex justify-center space-x-8 md:ml-auto ">
            <p className="link" onClick={() => alert("This is a dummy button")}>Privacy</p>
            <p className="link" onClick={() => alert("This is a dummy button")}>Terms</p>
            <p className="link" onClick={() => alert("This is a dummy button")}>Settings</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
