import React from 'react'
import './globals.css'
import localFont from 'next/font/local'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const ttSketch = localFont({
  src: './assets/fonts/testType-sketchBook.otf',
  variable: '--font-ttSketch',
})

const ttGDC = localFont({
  src: './assets/fonts/testType-GDC.otf',
  variable: '--font-ttGDC',
})

const tt02 = localFont({
  src: './assets/fonts/testType-02.otf',
  variable: '--font-tt02',
})

const monument = localFont({
  src: './assets/fonts/MonumentGrotesk-Regular.otf',
  variable: '--font-monument',
})

const monumentMedium = localFont({
  src: './assets/fonts/MonumentGrotesk-Medium.otf',
  variable: '--font-monumentMedium',
})

const monumentBold = localFont({
  src: './assets/fonts/MonumentGrotesk-Bold.otf',
  variable: '--font-monumentBold',
})

const monumentMono = localFont({
  src: './assets/fonts/MonumentGrotesk-Mono.otf',
  variable: '--font-monumentMono',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body
        className={` ${tt02.variable} ${ttSketch.variable} ${ttGDC.variable} ${monument.variable} ${monumentMedium.variable} ${monumentBold.variable} ${monumentMono.variable}  antialiasing`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
