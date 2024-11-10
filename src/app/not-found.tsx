import React from 'react'
import Link from 'next/link'
import { PiDogFill } from 'react-icons/pi'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <PiDogFill className="w-24 h-24 text-primary" />
      <h1 className="text-2xl text-center">404 - Page Not Found
        <span className="text-primary block text-center">Oops! The page you're looking for doesn't exist.</span>
      </h1>

      <Link href="/">
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors duration-300">
          Return to Home
        </button>
      </Link>
    </div>
  )
} 