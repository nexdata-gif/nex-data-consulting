import Link from "next/link";
import { Linkedin, ExternalLink, ShieldCheck, GraduationCap, Award } from "lucide-react";

export default function About() {
    return (
        <div className="bg-white font-sans">
            <div className="bg-slate-900 py-16 sm:py-24 text-center text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-black tracking-tight sm:text-5xl mb-6">About NexData</h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
                        NexData is a systems-first consulting firm built by practitioners. We provide the operational clarity and execution enablement needed to navigate complex, multi-stakeholder delivery environments.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div>
                        <div className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[11px] font-black uppercase tracking-widest border border-blue-200 mb-6">
                            Founder & Principal
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">Artum Khorshid</h2>
                        <p className="text-blue-600 font-bold text-lg mb-8">Miami, FL / Washington, DC</p>
                        <div className="prose prose-slate prose-lg max-w-none text-gray-600 leading-relaxed font-medium space-y-5">
                            <p>NexData was founded on a simple principle: execution should be the deliverable, not the promise. After years embedded in high-stakes federal modernization programs — coordinating 8-workstream delivery teams, standing up governance frameworks from scratch, and serving as the on-site execution authority across $21M–$665M portfolios — it became clear that most organizations do not need more strategy. They need someone who can make it run.</p>
                            <p>That is what NexData does. We step into fragmented, high-pressure environments and build the accountability structures, workflows, and reporting systems that restore delivery control without disrupting what is already live.</p>
                            <p>Our clients range from federal agencies and enterprise IT programs to construction firms, field-service operators, and growing small businesses. The environment changes. The discipline does not.</p>
                        </div>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link href="https://www.linkedin.com/in/artum-khorshid/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#0A66C2] text-white rounded-xl font-bold text-sm hover:bg-[#004182] transition-all shadow-md">
                                <Linkedin className="h-4 w-4" />
                                Personal LinkedIn
                            </Link>
                            <Link href="https://www.linkedin.com/company/nexdata-consulting-llc/about/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-all shadow-md">
                                <ExternalLink className="h-4 w-4" />
                                NexData LinkedIn
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-xl shadow-slate-100/50">
                            <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                <div className="h-6 w-1.5 bg-blue-600 rounded-full" />
                                Credentials & Clearances
                            </h3>
                            <div className="mb-6">
                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <ShieldCheck className="h-3.5 w-3.5" /> Security Clearances
                                </p>
                                <ul className="space-y-2">
                                    {["DoD Secret Clearance", "IRS 2S Moderate MBI"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 font-bold text-[15px]">
                                            <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-6">
                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <GraduationCap className="h-3.5 w-3.5" /> Education
                                </p>
                                <ul className="space-y-2">
                                    {["M.S., Data Analytics Engineering — George Mason University", "B.S., Political Science & Data Analytics — George Mason University"].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700 font-bold text-[15px]">
                                            <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Award className="h-3.5 w-3.5" /> Certifications
                                </p>
                                <ul className="space-y-2">
                                    {["Certified Scrum Master (CSM)", "SAFe Advanced Scrum Master (SASM)"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 font-bold text-[15px]">
                                            <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <div>
                            <div className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[11px] font-black uppercase tracking-widest border border-blue-200 mb-6">
                                Our Philosophy
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 leading-tight">Who We Are</h2>
                            <div className="prose prose-slate prose-lg max-w-none text-gray-600 leading-relaxed font-medium space-y-5">
                                <p>Founded on the belief that consulting should be about outcomes, not hours, NexData brings a pragmatic, disciplined approach to every engagement.</p>
                                <p>We do not bring armies of junior staff to learn on your dime. Instead, we provide senior, hands-on leadership needed to stabilize delivery, optimize processes, and drive real progress.</p>
                                <p>Whether you need to recover a failing program, modernize your infrastructure, or leverage data for better decision-making, we partner with you to get it done.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-2xl shadow-slate-100/50">
                            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-8 sm:mb-10 flex items-center gap-3">
                                <div className="h-6 w-1.5 bg-blue-600 rounded-full" />
                                Core Differentiators
                            </h3>
                            <ul className="space-y-6">
                                {["Senior, hands-on delivery leadership", "Focus on execution, not slideware", "Practical application of analytics and AI", "Clear outcomes and clean handoff", "Embedded in your environment, not advising from the outside", "Systems built to hold under stress"].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 sm:gap-5 group">
                                        <div className="mt-1 h-6 w-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 group-hover:bg-white transition-colors" />
                                        </div>
                                        <span className="text-[17px] sm:text-lg text-gray-700 font-bold leading-tight pt-0.5">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
