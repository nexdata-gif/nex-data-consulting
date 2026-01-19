import { Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-white min-h-[calc(100vh-64px-300px)]"> {/* Adjust min-height as needed */}
            <div className="bg-slate-900 py-16 sm:py-24 text-center text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-black tracking-tight sm:text-5xl mb-6">Contact Us</h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
                        Ready to move forward? Let’s start with a conversation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Contact Info */}
                    <div>
                        <div className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[11px] font-black uppercase tracking-widest border border-blue-200 mb-8">
                            Reach Out
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10 leading-tight">Get in Touch</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <div className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-slate-100/50 hover:shadow-blue-50 transition-all duration-300">
                                <div className="flex items-center gap-5">
                                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Email</h3>
                                        <a href="mailto:info@nexdataconsulting.com" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                                            info@nexdataconsulting.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-slate-100/50 hover:shadow-blue-50 transition-all duration-300">
                                <div className="flex items-center gap-5">
                                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">Phone</h3>
                                        <a href="tel:202-420-9364" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                                            202-420-9364
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                            <h3 className="text-base font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-3">
                                <div className="h-4 w-1 bg-blue-600 rounded-full" />
                                Office Hours
                            </h3>
                            <div className="space-y-2 text-gray-600 font-medium">
                                <div className="flex justify-between items-center py-2 border-b border-slate-200/50">
                                    <span>Monday - Friday</span>
                                    <span className="font-bold text-gray-900">9AM - 6PM EST</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span>Weekend Support</span>
                                    <span className="font-bold text-gray-900 italic">By Appointment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
                        <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-slate-200/50">
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8 tracking-tight">Send us a Message</h2>
                            <form
                                action="https://formspree.io/f/xvzzrwnp"
                                method="POST"
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-[13px] font-black text-gray-400 uppercase tracking-widest px-1">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            className="block w-full bg-slate-50 border-0 rounded-2xl py-4 px-5 text-gray-900 font-bold placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all font-sans"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[13px] font-black text-gray-400 uppercase tracking-widest px-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            className="block w-full bg-slate-50 border-0 rounded-2xl py-4 px-5 text-gray-900 font-bold placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all font-sans"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-[13px] font-black text-gray-400 uppercase tracking-widest px-1">
                                        How can we help?
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="block w-full bg-slate-50 border-0 rounded-2xl py-4 px-5 text-gray-900 font-bold placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-all resize-none font-sans"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group/btn relative flex w-full justify-center items-center gap-3 rounded-2xl bg-slate-900 px-8 py-5 text-lg font-black text-white shadow-xl shadow-slate-200 hover:bg-black transition-all active:scale-[0.98]"
                                >
                                    Send Message
                                    <Mail className="h-5 w-5 text-blue-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
