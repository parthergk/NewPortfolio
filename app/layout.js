import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantgaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Parther - Freelance Designer & Developer",
  description:
    "I am a freelance web developer and designer specializing in creating interactive websites and SaaS platforms.",
  charset: "UTF-8",
  robots: "index, follow",
  author: "Parther",
  metadataBase: new URL("https://parther.in"),
  openGraph: {
    title: "Parther - Freelance Designer & Developer",
    description:
      "As a freelancer, I focus on delivering user-friendly and engaging digital solutions.",
    url: "https://parther.in",
    siteName: "Parther",
    images: [
      {
        url: "https://parther.in/social-img.png",
        width: 1200,
        height: 630,
        alt: "Parther",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parther - Freelance Designer & Developer",
    description:
      "As a freelancer, I focus on delivering user-friendly and engaging digital solutions.",
    images: ["https://parther.in/social-img.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Parther",
  description:
    "Parther is a freelance web developer and designer specializing in creating interactive websites and SaaS platforms.",
  url: "https://parther.in",
  image: "https://parther.in/social-img.png",
  logo: "https://parther.in/social-img.png", // Ensure you provide the correct logo URL
  sameAs: [
    "https://x.com/parther_gk", // Replace with your actual social media profiles
  ],
  author: {
    "@type": "Person",
    name: "Parther", // Author name
    url: "https://parther.in", // Link to the author’s website
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://parther.in/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  keywords: "freelance, web development, design, interactive websites, SaaS",
  operatingSystem: "All", // Or specify the primary OS if applicable
  inLanguage: "en", // The language of the content
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="xeE6RJLQ8uDj1hX8plqKs_n0j32IaEzOm1Qq6QTMDX0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorantgaramond.className}  bg-main overflow-auto no-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
