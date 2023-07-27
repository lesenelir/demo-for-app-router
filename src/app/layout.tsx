import React, {ReactNode} from "react"
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import './globals.css'

const inter = Inter({subsets: ['latin-ext']})

// just for seo
export const metadata: Metadata = {
  title: 'App Router Demo',
  description: 'personal demo for app router by lesenelir',
}

interface IProps {
  children: ReactNode
}

// Root Layout is the outermost layout that wraps all pages
// Root Layout need html and body tags
export default function RootLayout(props: IProps) {
  const {children} = props

  return (
    <html lang="en">
    <body className={inter.className}>
    <div className={'flex flex-col items-center'}>
      <h1 className={'p-4 text-xl'}> root layout need html and body tags </h1>
      {children}
    </div>
    </body>
    </html>
  )
}
