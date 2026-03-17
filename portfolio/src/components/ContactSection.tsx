
import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div  className="h-full border-b-2 border-b-[#EEEEEE]/10">
      <div className="container mx-auto px-4 pt-10 pb-5">
        <div className="flex w-full">
          <div className="w-[50%]">

          </div>
          <div className="w-[50%] pl-20">
            <Image 
                  src="/keyboard.png" 
                  alt="Icon" 
                  width={100} 
                  height={100}
                />
          </div>
            </div>
        <div id="contact" className="flex flex-col lg:flex-row justify-between lg:gap-15">
          {/* Left Section (Full width on mobile, 50% on lg+) */}
          <div className="w-full lg:w-[50%] mt-0 lg:mt-20 lg:mb-0 py-4">
              <div>
                <div className="flex gap-4">
                    <h4 className="text-5xl font-extrabold text-[#EEEEEE] mb-3">Got a project in<br/><span className="text-[#B50094]">Mind?</span></h4>
                </div>
                <Image src="/contactSectionIllustration.png" alt="" width={350} height={350} className="hidden lg:block mx-auto"/>
              </div>
          </div>

          {/* Right Section (Full width on mobile, 50% on lg+) */}
          <div className="w-full lg:w-[50%] mt-10 lg:mt-20 mb-5 lg:mb-0 py-4">
            <div className="items-center justify-center">
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;