import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Import Playfair Display font with appropriate subsets
const cormorantgaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Gaurav Kumar's Portfolio",
  description: "Showcasing the projects and skills of Gaurav Kumar, a web developer.",
  charset: "UTF-8",
  robots: "index, follow",
  author: "Gaurav Kumar",
  // openGraph: {
  //   title: "Gaurav Kumar's Portfolio",
  //   description: "Showcasing the projects and skills of Gaurav Kumar, a web developer.",
  //   url: "https://your-website.com", // Replace with your website URL
  //   images: [
  //     {
  //       url: "/path-to-image.jpg", // Replace with the correct image path
  //       width: 1200,
  //       height: 630,
  //       alt: "Gaurav Kumar's Portfolio",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Gaurav Kumar's Portfolio",
  //   description: "Showcasing the projects and skills of Gaurav Kumar, a web developer.",
  //   images: ["/path-to-image.jpg"], // Replace with the correct image path
  // },
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
