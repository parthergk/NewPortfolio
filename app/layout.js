import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantgaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Parther • Freelance Designer & Developer",
  description: "I am a web developer and designer, specializing in creating interactive websites and SaaS platforms. As a freelancer, I focus on delivering user-friendly and engaging digital solutions tailored to meet client needs.",
  charset: "UTF-8",
  robots: "index, follow",
  author: "Parther",
  
  metadataBase: new URL('https://parther.in'),

  openGraph: {
    title: "Parther • Freelance Designer & Developer",
    description: "As a freelancer, I focus on delivering user-friendly and engaging digital solutions tailored to meet client needs.",
    url: "https://parther.in",
    siteName: 'Parther',
    images: [
      {
        url: "/title.png",
        width: 1200,
        height: 630,
        alt: "Parther",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Parther • Freelance Designer & Developer",
    description: "As a freelancer, I focus on delivering user-friendly and engaging digital solutions tailored to meet client needs.",
    images: ["/title.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body className={`${cormorantgaramond.className}  bg-main overflow-auto no-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
