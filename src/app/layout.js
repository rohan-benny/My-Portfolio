import { Antonio, DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Rohan Benny | Android & Web Developer Portfolio",
  description: "Personal portfolio of Rohan Benny, MCA Postgraduate and Developer specialising in Android, Web, and Full-stack development.",
  keywords: ["Rohan Benny", "Portfolio", "Software Developer", "Android Developer", "Web Developer", "Kristu Jayanti", "Beepeaks"],
  icons: {
    icon: "/Rohan.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${antonio.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
