import Link from 'next/link';
import React from 'react';
import {
    ChevronLeft,
    ArrowRight,
    Workflow,
    Target,
    Users,
    MousePointer2,
    Clock,
    ShieldCheck,
    AlertCircle,
    Link as LinkIcon,
    Accessibility,
    Zap,
    XCircle,
    CheckCircle2,
    Eye,
    Layers,
    ArrowUp,
    Activity
} from 'lucide-react';

export default function BusinessProcessOptimizationPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Navigation Header */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/services-and-capabilities" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back to Services
                    </Link>
                </div>
            </nav>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Title Section */}
                <header className="mb-16">
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        Service Delivery Deep-Dive
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                        Business Process Optimization & Operating Model Design
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Making work flow without adding bureaucracy. Practical redesign of how work moves across people, systems, and decisions.
                    </p>
                </header>

                <hr className="border-gray-100 mb-16" />

                {/* 1. EXECUTIVE OVERVIEW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Executive Overview</h2>
                    <div className="prose prose-slate lg:prose-lg text-slate-600 leading-relaxed mb-10">
                        <p>
                            Organizations often struggle with inefficiency even when they have highly capable people and modern tools. The breakdown usually occurs not in the individual tasks, but in the friction between them—unclear ownership, broken handoffs, and "process theater" that adds weight without adding value.
                        </p>
                        <p>
                            This service focuses on practical operating model design. We don't deliver academic process maps; we deliver systems of work that reduce friction and improve throughput. By focusing on how work actually flows day-to-day, we help teams move faster and with greater clarity, ensuring that every effort contributes directly to execution.
                        </p>
                    </div>

                </section>

                {/* 2. WHAT THIS SERVICE INCLUDES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">2. What This Service Includes</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We define process optimization as the practical application of flow principles. We focus on the life cycle of work—from how it's requested to how it's completed and handed off.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Intake & Demand Alignment", text: "Establishing clear entry points for work to prevent uncontrolled or duplicate efforts." },
                            { title: "Operating Model Design", text: "Defining role clarity and accountability boundaries to eliminate ambiguity in execution." },
                            { title: "Handoff & Dependency Mapping", text: "Smoothing the transitions between teams and roles to reduce wait states and rework." },
                            { title: "Decision Architecture", text: "Streamlining how decisions are made, escalated, and resolved to keep work moving." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>

                </section>

                {/* 3. EXECUTION AREA 1 — INTAKE, DEMAND, AND WORK ENTRY */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Execution Area 1 — Intake, Demand, and Work Entry</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Execution discipline starts before the work begins. We establish clear "work entry" protocols to ensure that every team is focused on prioritized, well-defined tasks.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><b>Centralized Intake:</b> Eliminating "side-channel" requests that disrupt planned work.</li>
                            <li><b>Priority Clarity:</b> Ensuring teams know exactly what to work on next, based on real business value.</li>
                            <li><b>Definition of Ready:</b> Preventing work from entering execution until it has the clarity required to proceed.</li>
                        </ul>
                    </div>

                    {/* Section 3 Visual - Intake Funnel & Filter */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-16 mb-12 relative overflow-hidden flex items-center justify-center">
                        <div className="relative w-full max-w-sm space-y-2 z-10">
                            {/* Demand Layer */}
                            <div className="relative bg-white/5 border border-white/10 rounded-t-3xl p-6 flex flex-col items-center group overflow-hidden">
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Raw Demand Signals</div>
                                <div className="flex gap-4">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-700" />)}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none" />
                            </div>

                            {/* Filtering Layer */}
                            <div className="mx-4 relative group">
                                <div className="bg-blue-600 border border-blue-500 p-8 flex items-center justify-between text-white transition-all">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Disciplined Filter</p>
                                        <p className="text-xs font-semibold italic">Priority, Value, Capacity</p>
                                    </div>
                                    <Target className="h-6 w-6 text-blue-300 animate-pulse" />
                                </div>
                                <div className="absolute -left-2 -right-2 top-1/2 -translate-y-1/2 h-px bg-blue-400 border-t border-dashed opacity-20" />
                            </div>

                            {/* Ready Layer */}
                            <div className="mx-12 p-10 bg-white rounded-b-3xl border border-blue-100 flex flex-col items-center text-center shadow-2xl">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                                    <Zap className="h-5 w-5 text-blue-600" />
                                </div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Ready to Execute</h4>
                                <p className="text-[10px] text-slate-500 leading-tight mt-1 italic">High-clarity items only</p>
                            </div>
                        </div>

                        {/* Background Grid Accent */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    </div>
                </section>

                {/* 4. EXECUTION AREA 2 — OPERATING MODEL & OWNERSHIP DESIGN */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Execution Area 2 — Operating Model & Ownership Design</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Ambiguity is the enemy of throughput. We design operating models that clarify exactly who is accountable for what, eliminating the "hidden work" and rework caused by overlapping or missing responsibilities.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><b>Role-to-Outcome Mapping:</b> Aligning individual and team roles directly with delivery outcomes.</li>
                            <li><b>Accountability Boundaries:</b> Clarifying where one role ends and another begins to ensure seamless transitions.</li>
                            <li><b>Ownership Reinforcement:</b> Developing the behaviors and structures required for people to own their domains effectively.</li>
                        </ul>
                    </div>

                    {/* Section 4 Visual - Ownership Accountability Map */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-12 shadow-sm">
                        <div className="relative max-w-lg mx-auto py-12">
                            {/* Horizontal Connection Map */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                                {[
                                    { role: "Demand Owner", outcome: "Priority Clarity" },
                                    { role: "Process Owner", outcome: "Flow Integrity" },
                                    { role: "Execution Lead", outcome: "Target Delivery" }
                                ].map((node, i) => (
                                    <div key={i} className="flex flex-col items-center group w-full max-w-[160px]">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                            <Users className="h-7 w-7 text-blue-400" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{node.role}</p>
                                            <div className="h-px w-8 bg-blue-500 mx-auto mb-2" />
                                            <p className="text-sm font-bold text-slate-900">{node.outcome}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 bg-slate-100 -z-0" />
                        </div>
                        <div className="mt-4 flex items-center justify-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Disciplined Accountability Framework</span>
                        </div>
                    </div>
                </section>

                {/* 5. EXECUTION AREA 3 — HANDOFFS, DEPENDENCIES, AND FLOW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Execution Area 3 — Handoffs, Dependencies, and Flow</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Efficiency is lost at the boundaries. We map and optimize the handoffs between teams and roles to ensure that work moves without stalling or requiring constant clarification.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><b>Handoff Standards:</b> Establishing what "done" looks like for every handoff to prevent rework.</li>
                            <li><b>Dependency Visibility:</b> Making cross-team dependencies explicit so they can be proactively managed.</li>
                            <li><b>Rhythm Alignment:</b> Ensuring that the cadences of different teams are synchronized to support a unified flow.</li>
                        </ul>
                    </div>

                    {/* Section 5 Visual - Seamless Handoff Lifecycle */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200 shadow-inner">
                        <div className="flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto">
                            {[
                                { step: "Staged", icon: Workflow },
                                { step: "Validated", icon: ShieldCheck },
                                { step: "Transferred", icon: LinkIcon },
                                { step: "Activated", icon: Zap }
                            ].map((item, i) => (
                                <React.Fragment key={i}>
                                    <div className="flex-grow w-full bg-white border border-slate-200 p-6 rounded-2xl flex flex-col items-center group transition-all hover:border-blue-500 hover:shadow-md">
                                        <item.icon className="h-6 w-6 text-slate-300 mb-3 group-hover:text-blue-500 transition-colors" />
                                        <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 uppercase tracking-tighter">{item.step}</span>
                                    </div>
                                    {i < 3 && (
                                        <ArrowRight className="h-5 w-5 text-slate-200 hidden md:block" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-80">Cycle Time Optimization Model</p>
                        </div>
                    </div>
                </section>

                {/* 6. EXECUTION AREA 4 — DECISION POINTS AND ACCOUNTABILITY */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Execution Area 4 — Decision Points and Accountability</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Decisions are the friction points of an organization. We streamline decision-making to ensure that they are made at the right level, with the right data, and without unnecessary delay.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><b>Decision Authority:</b> Empowering individuals to make decisions within their domain of ownership.</li>
                            <li><b>Escalation Rhythms:</b> Defining clear pathways for when decisions must be moved to higher levels.</li>
                            <li><b>Accountability Reinforcement:</b> Ensuring that decisions are visible and that outcomes are owned.</li>
                        </ul>
                    </div>

                    {/* Section 6 Visual - Decision Acceleration Map */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 mb-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="max-w-md mx-auto relative z-10 space-y-6">
                            {/* Standard Level */}
                            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-colors">
                                <div className="space-y-1">
                                    <h5 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Execution Level</h5>
                                    <p className="text-sm font-semibold text-white">80% Decided at Point of Work</p>
                                </div>
                                <Zap className="h-6 w-6 text-blue-500/50" />
                            </div>

                            {/* Escalation Path */}
                            <div className="flex justify-center">
                                <div className="h-8 w-px bg-gradient-to-b from-blue-500/50 to-emerald-500/50 border-l border-dashed border-blue-500/30" />
                            </div>

                            {/* Strategic Level */}
                            <div className="p-5 bg-emerald-600/10 border border-emerald-500/20 rounded-2xl flex items-center justify-between group hover:bg-emerald-600/20 transition-colors">
                                <div className="space-y-1">
                                    <h5 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Escalation Threshold</h5>
                                    <p className="text-sm font-semibold text-white">High-Impact / Multi-Org Bounds</p>
                                </div>
                                <Target className="h-6 w-6 text-emerald-500/50" />
                            </div>
                        </div>

                        {/* Abstract Background Texture */}
                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #3b82f6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    </div>
                </section>

                {/* 7. COMMON FAILURE PATTERNS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Common Failure Patterns This Service Addresses</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We identify and dismantle the systemic issues that prevent organizations from achieving their throughput potential.
                        </p>
                    </div>


                    {/* Section 7 Visual - Failure Pattern Diagnostic Grid */}
                    <div className="bg-slate-50/50 rounded-3xl border border-slate-200 overflow-hidden mt-12 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Failure Patterns */}
                            <div className="bg-white p-8 md:p-10 md:border-r border-slate-200">
                                <h4 className="text-red-600 font-bold text-[10px] uppercase tracking-widest mb-10 flex items-center gap-2">
                                    <XCircle className="h-4 w-4" /> Systemic Failure Patterns
                                </h4>
                                <div className="space-y-8">
                                    {[
                                        { title: "Work Stalling Between Teams", desc: "Fragmentation and broken handoffs causing delays. We focus on seamless transitions." },
                                        { title: "Over-Documentation", desc: "Heavy processes that nobody follows. We focus on adoption and practical usability." },
                                        { title: "Hidden Work & Shadow Processes", desc: "Teams building their own systems to bypass bureaucracy. We simplify the core model." },
                                        { title: "Lack of Clear Ownership", desc: "Everyone is involved but nobody is responsible. We clarify accountability boundaries." }
                                    ].map((pattern, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                                            <div>
                                                <p className="text-slate-900 text-sm font-bold mb-1">{pattern.title}</p>
                                                <p className="text-slate-600 text-xs italic leading-relaxed">{pattern.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Corrective Disciplines */}
                            <div className="bg-slate-50/30 p-8 md:p-10">
                                <h4 className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-10 flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" /> Corrective Execution Disciplines
                                </h4>
                                <div className="space-y-10">
                                    {[
                                        "Unified Flow & Handoff Standards",
                                        "Practical Redesign & Usage Adoption",
                                        "Simplified Core Model Design",
                                        "Explicit Accountability Mapping"
                                    ].map((discipline, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                            <p className="text-slate-900 text-sm font-semibold">{discipline}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. HOW THIS SERVICE CONNECTS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">8. How This Service Connects to Others</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Business Process Optimization & Operating Model Design is the foundational layer that supports our broader execution ecosystem.
                        </p>
                    </div>

                    <div className="space-y-4 mb-12">
                        {[
                            { name: "Agile Delivery & Leadership Enablement", connection: "Providing the structural clarity required for Agile execution to be effective." },
                            { name: "Infrastructure & IT Operations Support", connection: "Ensuring technical delivery is supported by efficient operational workflows." },
                            { name: "Execution Enablement & Visibility", connection: "Creating the data-rich processes required for decision-oriented reporting." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50">
                                <LinkIcon className="h-5 w-5 text-blue-600" />
                                <div>
                                    <span className="font-bold text-slate-900">{item.name}:</span>
                                    <span className="text-slate-600 ml-2">{item.connection}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>

                {/* 9. APPLICABLE USE CASES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">9. Applicable Use Cases</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        {[
                            "Growing Organizations Scaling Operations",
                            "Field-Based & Front-Line Operational Teams",
                            "Regulated & Compliance-Driven Environments",
                            "Teams Modernizing Without Adding Bureaucracy"
                        ].map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <ArrowRight className="h-4 w-4 text-blue-600" />
                                <span className="text-slate-700 font-medium">{useCase}</span>
                            </div>
                        ))}
                    </div>

                </section>

                {/* 10. DELIVERY PHILOSOPHY */}
                <section className="mb-20 py-16 px-8 bg-slate-900 text-white rounded-3xl overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">10. Delivery Philosophy</h2>
                        <p className="text-slate-300 text-lg leading-relaxed italic">
                            "We believe that a perfect process that nobody uses is a failure. We prioritize adoption, clarity, and simplicity, building systems of work that people actually value because they make execution easier, not heavier."
                        </p>
                    </div>

                </section>

                <footer className="text-center pb-20">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                        Schedule a Process Optimization Discovery Call
                    </Link>
                </footer>
            </article>
        </div>
    );
}
