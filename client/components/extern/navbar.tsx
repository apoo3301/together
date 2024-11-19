"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, Search, ShoppingBag, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [activePage, setActivePage] = useState('home')
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const isActive = (page: string) => activePage === page
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="h-20 flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image alt="icon" width={65} height={80} src="/togetherIconn.png" />
                            <span className="text-2xl font-bold tracking-tighter">TOGETHER.</span>
                        </Link>

                        <nav className="hidden lg:flex items-center space-x-8">
                            <div className="relative group">
                                <button
                                    className={`flex items-center space-x-1 py-8 ${isActive('shop') ? 'text-blue-600' : ''}`}
                                    onMouseEnter={() => setIsShopMenuOpen(true)}
                                    onMouseLeave={() => setIsShopMenuOpen(false)}
                                >
                                    <span className="text-sm font-medium tracking-wide">SHOP</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                {isShopMenuOpen && (
                                    <div
                                        className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-md py-4 px-6 min-w-max"
                                        onMouseEnter={() => setIsShopMenuOpen(true)}
                                        onMouseLeave={() => setIsShopMenuOpen(false)}
                                    >
                                        <div className="flex space-x-12">
                                            <Link href="/homme" className="text-sm font-medium hover:text-blue-600 transition-colors">
                                                HOMME
                                            </Link>
                                            <Link href="/femme" className="text-sm font-medium hover:text-blue-600 transition-colors">
                                                FEMME
                                            </Link>
                                            <Link href="/accessoires" className="text-sm font-medium hover:text-blue-600 transition-colors">
                                                ACCESSOIRES
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link
                                href="/nouveautes"
                                className={`text-sm font-medium tracking-wide py-8 relative ${isActive('nouveautes') ? 'text-blue-600' : ''}`}
                                onClick={() => setActivePage('nouveautes')}
                            >
                                NOUVEAUTÉS
                                {isActive('nouveautes') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ease-out scale-x-100" />
                                )}
                            </Link>
                            <Link
                                href="/a-propos"
                                className={`text-sm font-medium tracking-wide py-8 relative ${isActive('a-propos') ? 'text-blue-600' : ''}`}
                                onClick={() => setActivePage('a-propos')}
                            >
                                A PROPOS
                                {isActive('a-propos') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ease-out scale-x-100" />
                                )}
                            </Link>
                            <Link
                                href="/support"
                                className={`text-sm font-medium tracking-wide py-8 relative ${isActive('support') ? 'text-blue-600' : ''}`}
                                onClick={() => setActivePage('support')}
                            >
                                SUPPORT
                                {isActive('support') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ease-out scale-x-100" />
                                )}
                            </Link>
                        </nav>

                        <div className="flex items-center space-x-6">
                            <button className="hover:text-blue-600 transition-colors">
                                <Search className="h-5 w-5" />
                            </button>
                            <button className="hover:text-blue-600 transition-colors">
                                <ShoppingBag className="h-5 w-5" />
                            </button>
                            <button className="lg:hidden hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-x-0 top-20 bg-white shadow-lg z-40"
                    >
                        <nav className="container mx-auto px-4 py-6 space-y-4">
                            <Link href="/homme" className="block text-sm font-medium hover:text-blue-600 transition-colors">
                                HOMME
                            </Link>
                            <Link href="/femme" className="block text-sm font-medium hover:text-blue-600 transition-colors">
                                FEMME
                            </Link>
                            <Link href="/accessoires" className="block text-sm font-medium hover:text-blue-600 transition-colors">
                                ACCESSOIRES
                            </Link>
                            <Link href="/nouveautes" className="block text-sm font-medium hover:text-blue-600 transition-colors">
                                NOUVEAUTÉS
                            </Link>
                            <Link href="/a-propos" className="block text-sm font-medium hover:text-blue-600 transition-colors">
                                A PROPOS
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar