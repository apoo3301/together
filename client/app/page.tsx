'use client'

import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/extern/navbar'

export default function Component() {


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section className="relative h-[calc(100vh-5rem)] px-4 sm:px-0">
          <div className="absolute inset-0 overflow-hidden rounded-md">
            <Image
              src="/bg.png"
              alt="Together Collection"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg text-center">
              COLLECTION ÉTÉ 2024 💐🌊
            </h1>
          </div>
        </section>
      </main>

      <footer className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link>
              <Link href="/conditions" className="text-sm text-gray-600 hover:text-gray-900">Conditions</Link>
            </div>
            <p className="text-sm text-gray-600">&copy; 2024 TOGETHER. Tous droits réservés.</p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}