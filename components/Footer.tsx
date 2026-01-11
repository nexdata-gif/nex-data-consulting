import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative w-6 h-6 rounded overflow-hidden border border-slate-200 bg-[#E7E7E5]">
                                <Image
                                    src="/images/logo.png"
                                    alt="NexData Logo"
                                    fill
                                    className="object-cover scale-150"
                                />
                            </div>
                            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase">NexData</h3>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            Turning Strategy Into Execution.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Navigation</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/services-and-capabilities" className="text-base text-gray-600 hover:text-gray-900">
                                    Services & Capabilities
                                </Link>
                            </li>
                            <li>
                                <Link href="/approach" className="text-base text-gray-600 hover:text-gray-900">
                                    Approach
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-base text-gray-600 hover:text-gray-900">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-base text-gray-600 hover:text-gray-900">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Contact</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <span className="text-base text-gray-600">info@nexdataconsulting.com</span>
                            </li>
                            <li>
                                <span className="text-base text-gray-600">202-420-9364</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} NexData Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
