"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight" onClick={() => setIsOpen(false)}>
                            NexData Consulting
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
            {isOpen && (
                <div className="sm:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-16 z-40 shadow-lg px-4 pb-6 pt-2">
                    <div className="space-y-1">
                        <Link
                            href="/"
                            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 bg-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/services-and-capabilities"
                            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 bg-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Services & Capabilities
                        </Link>
                        <Link
                            href="/insights-and-engagements"
                            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 bg-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Insights & Engagements
                        </Link>
                        <Link
                            href="/approach"
                            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 bg-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Approach
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 bg-white"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-4 rounded-md text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 bg-white"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
