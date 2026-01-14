'use client';

import Link from 'next/link';
import {
    ChevronLeft,
    ArrowRight,
    Search,
    Users,
    DollarSign,
    FileText,
    Layers,
    Activity,
    CheckCircle2,
    Zap,
    Scale,
    Shield
} from 'lucide-react';

export default function DiscoveryProcessPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Navigation Header */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/insights-and-engagements" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back to Insights
                    </Link>
                </div>
            </nav>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Title Section */}
                <header className="mb-16">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        Insight Piece — Operational Strategy
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                        Discovery Is a Service — Not a Sales Call
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Structured fact-finding as the foundation for execution. Moving beyond the pitch to uncover the operational reality.
                    </p>
                </header>

                <hr className="border-gray-100 mb-16" />

                {/* 1. EXECUTIVE OVERVIEW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">1</div>
                        Executive Overview — How We Approach Discovery
                    </h2>
                    <div className="prose prose-slate lg:prose-lg text-slate-600 leading-relaxed mb-10">
                        <p>
                            Discovery is not a pitch or a one-time call. In complex delivery environments, treating discovery as an administrative formality is the root cause of project failure. We approach discovery as structured fact-finding focused on uncovering how your business actually operates day-to-day.
                        </p>
                        <p>
                            The objective is to identify constraints, dependencies, and risks before resources are committed. By protecting both sides from mis-scoped or brittle solutions, we ensure that every engagement is built on a foundation of operational truth, not idealistic assumptions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Operational Truth", desc: "Understanding the actual workflows and data points." },
                            { title: "Risk Mitigation", desc: "Surfacing dependencies and constraints early." },
                            { title: "Execution Clarity", desc: "Ensuring scope aligns with measurable value." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. COMPLIMENTARY DISCOVERY */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">2</div>
                        Complimentary Discovery — First Two Calls
                    </h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            The first two discovery calls are entirely complimentary. These are conversational but highly structured sessions focused on alignment, not selling. Our goal is to determine whether there is a real fit between your execution needs and our delivery model.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-10 shadow-sm">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Discovery Workstream (Initial)</h4>
                        <div className="space-y-6">
                            {[
                                { title: "Business Context & Pain Points", desc: "Deep dive into the 'why' behind the current challenges." },
                                { title: "High-Level Process Walkthroughs", desc: "Understanding the flow of work across teams and systems." },
                                { title: "Feasibility & Risk Signals", desc: "Identifying immediate operational blockers and technical hurdles." },
                                { title: "Execution Fit Analysis", desc: "Determining if our delivery methods align with the business goals." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 transition-transform group-hover:scale-125" />
                                    <div>
                                        <h5 className="font-bold text-slate-900">{item.title}</h5>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. PAID DISCOVERY */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center">3</div>
                        When Discovery Becomes a Paid Engagement
                    </h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Once complexity increases and we move beyond high-level alignment into detailed mapping, discovery becomes a paid service. This is an investment that drastically reduces downstream cost and risk.
                        </p>
                        <p className="p-4 bg-slate-50 border-l-4 border-slate-400 rounded-r-lg font-medium italic">
                            "Paid discovery is billed at 50% or more of standard rates, with clear upfront agreements and zero open-ended billing without explicit consent."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Search className="h-5 w-5 text-blue-600" />
                                Deep-Dive Analysis
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-center gap-2">• Detailed process and handoff mapping</li>
                                <li className="flex items-center gap-2">• System and data flow architecture</li>
                                <li className="flex items-center gap-2">• Technical debt and constraint audit</li>
                            </ul>
                        </div>
                        <div className="p-8 border border-slate-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-blue-600" />
                                Decisions & Trade-offs
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-center gap-2">• Prioritized execution roadmaps</li>
                                <li className="flex items-center gap-2">• Clear 'Build vs. Buy' recommendations</li>
                                <li className="flex items-center gap-2">• Realistic staffing and tool requirements</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. DISCOVERY OUTCOMES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">4</div>
                        Discovery Outcomes — What Clients Walk Away With
                    </h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Proper discovery always produces usable artifacts, even if the execution doesn't continue with us. You walk away with a realistic delivery model and a documented path forward.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { title: "Execution Path", icon: Zap },
                            { title: "Defined Scope", icon: Shield },
                            { title: "Build/Buy Deck", icon: Scale },
                            { title: "Quick Win Plan", icon: CheckCircle2 },
                            { title: "Long-term Map", icon: Activity },
                            { title: "Delivery Model", icon: Layers }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col items-center text-center gap-3 group hover:bg-slate-800 transition-colors">
                                <item.icon className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. SCALING */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center">5</div>
                        Scaling Beyond Core Engagements
                    </h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            For specialized or high-scale efforts, discovery helps identify when additional expertise is needed. We leverage a network of trusted, vendor-agnostic partners to support your growth without losing coordination quality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Infra & Backend Design Partners",
                            "Data Engineering Specialists",
                            "Reporting & Dashboard Experts",
                            "Automation & Systems Vendors"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <Users className="h-4 w-4 text-blue-600" />
                                <span className="text-slate-700 font-medium text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 6. INTEGRATED EXECUTION MODEL */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">6</div>
                        Integrated Execution Model
                    </h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            The depth of discovery informs the delivery itself. Whether the work is handled directly by us, coordinated through partners, or documented and handed off cleanly to your internal teams, the transition is seamless.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center italic text-slate-500 font-medium">
                        Custom processes tailored to your business. Integration across all teams. Clear ownership from day one.
                    </div>
                </section>

                {/* 7. WHY THIS WORKS */}
                <section className="mb-20 py-16 px-8 bg-slate-900 text-white rounded-3xl overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Why This Approach Works</h2>
                        <div className="grid grid-cols-2 gap-8 text-left mb-10">
                            {[
                                { title: "Fewer Surprises", desc: "Surface constraints before they become blockers." },
                                { title: "Better Decisions", desc: "Data-driven alignment at the executive level." },
                                { title: "Lower Friction", desc: "Smoothing transitions between discovery and work." },
                                { title: "Deep Trust", desc: "Transparent billing and vendor-agnostic advice." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h4 className="text-blue-400 font-bold text-sm mb-1">{item.title}</h4>
                                    <p className="text-slate-400 text-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Background Detail */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </section>

                <footer className="text-center pb-20">
                    <p className="text-slate-500 mb-8 max-w-lg mx-auto italic">
                        Start with a no-pressure, no-cost discovery session. No high-pressure sales, just structured alignment on what's next.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                        Schedule an Initial Discovery Session
                    </Link>
                </footer>
            </article>
        </div>
    );
}
