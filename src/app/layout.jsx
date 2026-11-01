import "../styles/globals.css";
import LayoutClient from "@/components/layout/LayoutClient";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata = {
  title: "Binjwa IT Solutions | AI & Software Development Company",
  description: "From AI automation to web development and digital marketing, we help businesses grow with scalable, secure, and results-driven solutions.",
  icons: {
    icon: [
      { url: "/logo1.png" },
      { url: "/logo1.png", type: "image/png" },
    ],
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.png" type="image/png" />
      </head>
      <body className="relative">
        <SmoothScrollProvider>
          <LayoutClient>
            {children}
          </LayoutClient>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
