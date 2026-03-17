import { useContext, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MessageContext } from "./MessageContext";



const ContactForm = () => {

    {/* Message context import */}
    const { defaultMessageValue } = useContext(MessageContext);

    {/* User Inputs */}
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    {/* Error Check */}
    const [error, setError] = useState(false);

    {/* Email Regex for Email validation */}
    function isValidEmail(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    {/* User Input onChange Handling */}
    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    const handleUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    }
    const handleUserMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserMessage(e.target.value)
    }

    {/* Form Submission - Function/Logic */}
    const handleFormSubmit = (e: React.FormEvent) => {
         e.preventDefault()

         if (userName == "" || !isValidEmail(userEmail) || userMessage == "") {

            {/* Check for User Input Errors */}
            if (userName === "") {
            setError(true);
            } else {
            setError(false)
            }

            if (!isValidEmail(userEmail)) {
            setError(true);
            } else {
            setError(false)
            }

            if (userMessage === "") {
            setError(true);
            } else {
            setError(false)
            }
         } else {

            {/* Form Details Prep before redirect to whatsapp */}
             let message = userMessage;
             const email = "%5F" + userEmail + "%5F"
             const fullName = userName.charAt(0).toUpperCase() + userName.slice(1);
             let name;
             const formJobOfferTitle = "%2A" + "Job Offer" + "%2A";
             const formUrl = "https://api.whatsapp.com/send?phone=2348086501224"
             let finalUrl;

             if (fullName.endsWith(".")) {
                name = "%2A" + fullName.slice(0, -1) + "," + "%2A";
            } else if (fullName.endsWith(" ")) {
                name = "%2A" + fullName.slice(0, -1) + "," + "%2A";
            } else {
                name = "%2A" + fullName + "," + "%2A";
            }

            if (userMessage.endsWith(".")) {
                message = userMessage.slice(0, -1);
            } else if (userMessage.endsWith(" ")) {
                message = userMessage.slice(0, -1);
            } else if (userMessage.endsWith(".") || userMessage.endsWith(" ")) {
                message = userMessage;
            }

            const defaultWhatsappMsg = message + "%0D%0A%0D%0A" + name + "%0D%0A" + email;
            const jobOfferWhatsappMsg = formJobOfferTitle + "%0D%0A%0D%0A" + message + "%0D%0A%0D%0A" + name + "%0D%0A" + email;

            if (defaultMessageValue === "Hello Rosemary, Are you up for this role:"){
                finalUrl = `${formUrl}&text=${jobOfferWhatsappMsg}`
             } else {
                finalUrl = `${formUrl}&text=${defaultWhatsappMsg}`
             }

               window.open(finalUrl, "_blank");
            }

            
     };



    return (
        <form className="px-0 lg:px-6">
            <div className="w-full justify-center py-4 items-center grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full col-span-1 text-[#EEEEEE]">
                        <label htmlFor="firstName" className="text-md font-medium">Full Name</label>
                        <input  type="text" id="firstName" onChange={handleUserNameChange} autoComplete="name"  className={`w-full bg-gray-700/20 mt-2 py-2 px-3 rounded-md outline-0 ${userName === "" && error ? "border border-red-600" : ""}`} placeholder={`${userName === "" && error ? "Enter full name..." : "Your full name"}`} required/>
                </div>
                <div className="w-full col-span-1 text-[#EEEEEE]">
                        <label htmlFor="email" className="text-md font-medium">Email Address</label>
                        <input  type="email" id="email" onChange={handleUserEmailChange} autoComplete="email"  className={`w-full bg-gray-700/20 mt-2 py-2 px-3 rounded-md outline-0 ${!isValidEmail(userEmail) && error ? "border border-red-600" : ""}`} placeholder={`${!isValidEmail(userEmail) && error ? "Enter email address..." : "Your email address"}`} required/>
                </div>
            </div>
            <div className="w-full mb-2 text-[#EEEEEE]">
                <label htmlFor="message" className="text-md font-medium">Message</label>
                <textarea name="message" id="message" defaultValue={defaultMessageValue} onChange={handleUserMessageChange} placeholder={`${userMessage === "" && error ? "Enter your message..." : "Write your message..."}`} className={`w-full h-60 bg-gray-700/20 mt-2 py-2 px-3 rounded-md outline-0 ${userMessage === "" && error ? "border border-red-600" : ""}`}></textarea>
            </div>
            <div className="flex">
                <a href="#" target="_blank" 
                       rel="noopener noreferrer" onClick={handleFormSubmit} className="flex gap-2 bg-[#B50094] hover:bg-[#B50094]/30 cursor-pointer transition-colors duration-300 ease-in-out text-[#EEEEEE] py-1 px-4 rounded-full">
                    Send Message <FaWhatsapp className="size-4 m-auto"/>
                </a>
            </div>
        </form>
    )
}

export default ContactForm;