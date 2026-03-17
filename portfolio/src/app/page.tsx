"use client"

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { MessageContext } from "@/components/MessageContext";



export default function Home() {

  const [defaultMessageValue, setDefaultMessageValue] = useState("");

  return (
    <div className="h-full p-2 bg-[#E0AAFF]">
      <div className="pt-4 px-4 rounded-md">
        
        <Header />

        {/* Message Context wrap - Start */}
        <MessageContext.Provider value={{ defaultMessageValue, setDefaultMessageValue }}>

          <AnimatedSection>
          <HeroSection/>
        </AnimatedSection>
           
        <AnimatedSection delay={300}>
          <ContactSection />
        </AnimatedSection>

        </MessageContext.Provider>
        {/* Message Context Wrap - End */}
        <Footer />
      </div>
    </div>
  );
}