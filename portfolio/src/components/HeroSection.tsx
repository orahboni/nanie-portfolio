import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ImDownload } from "react-icons/im";
import { MessageContext } from "./MessageContext";

const HeroSection = () => {

  const { setDefaultMessageValue } = useContext(MessageContext);

  const hireMe = () => {
    setDefaultMessageValue("Hello Rosemary, Are you up for this role:")
  }


  return (
    <div className="h-full border-b-2 border-b-[#EEEEEE]/10">
      <div className="container mx-auto px-6 pt-10 lg:pt-5 pb-5">
        <div className="flex flex-col xs:mt-20  lg:flex-row justify-between">
          {/* Left Section (Full width on mobile, 60% on lg+) */}
          <div className="w-full lg:w-[60%] px-0 lg:p-4 mt-10 lg:mt-10 mb-5 lg:mb-0">
            <div className="flex items-start justify-start lg:items-center px-0 py-4 lg:p-4 lg:justify-center gap-1">
              <div className="pt-8 hidden md:block">
                <Image 
                  src="/Vector-187.png" 
                  alt="Icon" 
                  width={40}
                  height={40}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div>
                <h1 className="text-5xl font-extrabold text-[#EEEEEE] mb-3">Insight-Driven Virtual</h1>
                <h1 className="text-5xl font-extrabold text-[#B50094] mb-5">Assitant</h1>
                <div className="flex gap-2">
                    <Link href="/#contact" onClick={hireMe} className="bg-[#B50094] hover:bg-[#B50094]/30 cursor-pointer transition-colors duration-300 ease-in-out text-[#EEEEEE] py-1 px-4 rounded-full">
                       Hire Me
                    </Link>
                    <a href="/" download="/"  className="bg-gray-700/20 hover:bg-[#B50094]/30 cursor-pointer transition-colors duration-300 ease-in-out flex gap-1 text-[#EEEEEE] py-1 px-4 rounded-full">
                       Download Cv <ImDownload className="size-4 m-auto"/>
                    </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Hidden on mobile, 40% on lg+) */}
          <div className="w-full lg:w-[40%] lg:block mt-5 p-0 lg:p-4 lg:mt-10">
            <div className="flex items-center justify-center">
                <Image src="/heroImage.png" alt="" width={400} height={400} className="m-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;