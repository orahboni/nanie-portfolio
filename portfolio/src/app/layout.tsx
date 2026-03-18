import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoseMary Okeleghel | Virtual Assistant",
  description: "Insight-Driven Virtual Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script>
        {`function initFreshdesk() {
  window.fdWidget.init({
    token: "01KKWD4QCJNWPFDMF8WVPXRF10",
    host: "https://rosemaryokeleghel19.freshdesk.com",
    widgetId: "01KKWMTFJ2Y8V1NY6R40NDX4KM"
  });
}

function initialize(i,t){var e;i.getElementById(t)?initFreshdesk():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://rosemaryokeleghel19.freshdesk.com/webchat/js/widget.js",e.onload=initFreshdesk,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);`}
      </script>
      </head>
      <body className={`${montserrat.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
