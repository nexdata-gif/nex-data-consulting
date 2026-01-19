"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow bg-[#E7E7E5]">
                                <Image
                                    src="/images/logo.png"
                                    alt="NexData Logo"
                                    fill
                                    className="object-cover scale-150"
                                />
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">NexData<span className="text-blue-600">.</span></span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                            Home
                        </Link>
                        <Link href="/services-and-capabilities" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                            Services & Capabilities
                        </Link>
                        <Link href="/insights-and-engagements" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                            Insights & Engagements
                        </Link>
                        <Link href="/approach" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                            Approach
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                            Contact
                        </Link>
                    </div>
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold">Menu</span>
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`sm:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                <div className={`absolute top-16 left-0 w-full bg-white border-t border-gray-100 shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className="px-4 py-6 space-y-1">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Services & Capabilities', href: '/services-and-capabilities' },
                            { name: 'Insights & Engagements', href: '/insights-and-engagements' },
                            { name: 'Approach', href: '/approach' },
                            { name: 'About', href: '/about' },
                            { name: 'Contact', href: '/contact', primary: true }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${link.primary
                                    ? 'text-white bg-blue-600 hover:bg-blue-700'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
