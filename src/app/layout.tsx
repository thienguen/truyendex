import './globals.css'
import { Inter } from 'next/font/google'
import { MangadexContextProvider } from '../contexts/mangadex'
import { ChapterContextProvider } from '../contexts/chapter';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  other: {
    referrer: "same-origin"
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,

}) {
  return (
    <html lang="en">
      <body className={`vi-vn site1 ${inter.className}`}>
        <MangadexContextProvider>
          {/* <ChapterContextProvider> */}
          {children}
          {/* </ChapterContextProvider> */}
        </MangadexContextProvider>
      </body>
    </html>
  )
}
