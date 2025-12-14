import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-white min-h-[calc(100vh-64px-300px)]"> {/* Adjust min-height as needed */}
            <div className="bg-slate-900 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
                    <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
                        Ready to move forward? Let’s start with a conversation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg flex-shrink-0">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <a href="mailto:info@nexdataconsulting.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                                        info@nexdataconsulting.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg flex-shrink-0">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Phone</h3>
                                    <a href="tel:202-420-9364" className="text-gray-600 hover:text-blue-600 transition-colors">
                                        202-420-9364
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                            <p className="text-gray-600">
                                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                                Weekend Support: By Appointment
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        placeholder="Your Name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 text-base shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        placeholder="How can we help?"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
