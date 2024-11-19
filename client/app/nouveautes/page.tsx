"use client"

import Navbar from '@/components/extern/navbar'
import { ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const NewPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-grow pt-20">
            <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-12 text-center">Nos Nouveautés ✨</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Robe d\'été', price: '€180', image: '/gadji1.png' },
                { name: 'Chemise lin', price: '€120', image: '/chemise.jpg' },
                { name: 'Pantalon chino', price: '€140', image: '/chino.png' },
              ].map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                    <p className="text-gray-600">{product.price}</p>
                    <button className="mt-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <ShoppingBag size={20} className="mr-2" />
                      Ajouter au panier
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
            </main>
        </div>
    )
}

export default NewPage