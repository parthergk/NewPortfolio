// import { Playfair_Display } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Import Playfair Display font with appropriate subsets
const cormorantgaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Gaurav Kumar's Portfolio",
  description:
    "Showcasing the projects and skills of Gaurav Kumar, a web developer.",
  // viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
  robots: "index, follow",
  author: "Gaurav Kumar",
  // You can add more metadata like Open Graph, Twitter Card here for SEO
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google's fonts to improve load performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
          as="style"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body
        className={`${cormorantgaramond.className}  bg-main overflow-auto no-scrollbar`}
      >
        {/* Use a wrapper div to apply global styles if needed */}
        {children}
        {/* Add analytics script if needed */}
      </body>
    </html>
  );
}
