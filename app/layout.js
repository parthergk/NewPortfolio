import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantgaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Parther • Freelance Designer & Developer",
  description: "I am a freelance web developer and designer specializing in creating interactive websites and SaaS platforms. As a freelancer, I focus on Delivering user-friendly and engaging digital solutions.",

  charset: "UTF-8",
  robots: "index, follow",
  author: "Parther",
  
  metadataBase: new URL('https://parther.in'),

  openGraph: {
    title: "Parther • Freelance Designer & Developer",
    description: "As a freelancer, I focus on Delivering user-friendly and engaging digital solutions.",
    url: "https://parther.in",
    siteName: 'Parther',
    images: [
      {
        url: "https://parther.in/title.png", // Updated to absolute URL
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
    description: "As a freelancer, I focus on Delivering user-friendly and engaging digital solutions.",
    images: ["https://parther.in/title.png"], // Updated to absolute URL
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Parther',
  description: 'Parther is a freelance web developer and designer specializing in creating interactive websites and SaaS platforms.',
  url: 'https://parther.in',
  image: 'https://parther.in/title.png', // Absolute URL for JSON-LD as well
  sameAs: [
    'https://x.com/parther_gk', // Replace with your Twitter profile
  ],
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="xeE6RJLQ8uDj1hX8plqKs_n0j32IaEzOm1Qq6QTMDX0" />
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
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      </body>
    </html>
  );
}
