import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
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
                        {/* Mobile menu button placeholder - can be expanded if needed */}
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            Menu
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
