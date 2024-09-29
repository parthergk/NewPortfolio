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
  
  metadataBase: new URL('https://bogibogi.vercel.app'),

  openGraph: {
    title: "Parther • Freelance Designer & Developer",
    description: "As a freelancer, I focus on Delivering user-friendly and engaging digital solutions.",
    url: "https://bogibogi.vercel.app",
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
    description: "As a freelancer, I focus on Delivering user-friendly and engaging digital solutions.",
    images: ["/title.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Parther Portfolio',
  description: 'Parther is a freelance web developer and designer specializing in creating interactive websites and SaaS platforms.',
  url: 'https://parther.in',
  image: 'https://parther.in/title.png', // Replace with your site image URL
  sameAs: [
    'https://linkedin.com/in/your-profile', // Replace with your LinkedIn profile
    'https://twitter.com/your-profile', // Replace with your Twitter profile
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
