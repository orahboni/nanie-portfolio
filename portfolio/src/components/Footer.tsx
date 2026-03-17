import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto px-4 pt-10 pb-2">
        <div className="xs:mt-20 lg:mt-0 justify-center">
            <div className="w-full flex items-center justify-center">
                 <p className="text-lg text-[#EEEEEE] mb-3">Copyright &copy; {new Date().getFullYear()} Rosemary . O</p>
            </div>
            <div className="w-full flex mb-4 items-center justify-center">
                <div className="flex gap-2">
                    <a href="https://x.com/okeleghel79949"
                        target="_blank" 
                        rel="noopener noreferrer"
                       className="bg-gray-700/20 m-auto text-[#EEEEEE] hover:text-[#B50094] cursor-pointer transition-colors duration-300 ease-in-out p-3 rounded-full">
                        <FaXTwitter className="size-5 m-auto "/>
                    </a>
                    <a href="https://www.instagram.com/okeleghelrosemary/"
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="bg-gray-700/20 m-auto text-[#EEEEEE] hover:text-[#B50094] cursor-pointer transition-colors duration-300 ease-in-out p-3 rounded-full">
                        <FaInstagram className="size-5 m-auto "/>
                    </a>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;