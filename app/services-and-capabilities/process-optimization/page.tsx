import Link from 'next/link';
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
    Zap
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

                    {/* HERO Visual Placeholder */}
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Workflow className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: The Friction-to-Flow Bridge</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Contrast fragmented, high-friction work with optimized, high-throughput flow.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Before/After comparison diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Executive-safe, minimalist representation of throughput gains.</p>
                            </div>
                        </div>
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

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Target className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Flow Optimization Matrix</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Map service areas to specific operational outcomes.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Grid or quadrant diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Focus on clarity and simplicity, avoiding technical notation.</p>
                            </div>
                        </div>
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

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <MousePointer2 className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Intake Funnel & Filter</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Visualize how raw demand is filtered and prioritized into disciplined execution.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Funnel or gateway diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Professional, emphasizing control without creating bottlenecks.</p>
                            </div>
                        </div>
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

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Users className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Ownership Accountability Map</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Show clear alignment between roles and business outcomes.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Connection or nodes diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Simple, showing direct accountability lines.</p>
                            </div>
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

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Clock className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Seamless Handoff Lifecycle</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Illustrate the elimination of wait states between process steps.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Linear flow or chevron diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Emphasize continuous movement and clarity.</p>
                            </div>
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

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <ShieldCheck className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Decision Acceleration Map</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Visualize how streamlined decision points keep work moving.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Logic or decision tree (simplified).</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Professional, emphasizing speed and accountability.</p>
                            </div>
                        </div>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Work Stalling Between Teams", text: "Fragmentation and broken handoffs causing delays. We focus on seamless transitions." },
                            { title: "Over-Documentation", text: "Heavy processes that nobody follows. We focus on adoption and practical usability." },
                            { title: "Hidden Work & Shadow Processes", text: "Teams building their own systems to bypass bureaucracy. We simplify the core model." },
                            { title: "Lack of Clear Ownership", text: "Everyone is involved but nobody is responsible. We clarify accountability boundaries." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm flex items-start gap-4">
                                <AlertCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-600">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Accessibility className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Failure Pattern Diagnostic Grid</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Help leaders identify where their work flow is breaking down.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Table or diagnostic chart.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Clean and solution-oriented.</p>
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

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Zap className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Integrated Service Network</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Visualize how process design acts as an enabler for all other NexData services.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Relationship map or network diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Highlight the centrality of operating model design.</p>
                            </div>
                        </div>
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

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Workflow className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Use Case Impact Icons</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Categorical representation of where process optimization drives value.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Icon grid.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Clean, professional, and diverse representation.</p>
                            </div>
                        </div>
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

                    {/* Closing Visual Placeholder */}
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-xl"></div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                            <span className="block text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left">
                                <p className="text-[10px] font-bold text-white uppercase opacity-70">Name: Closing Execution Grid</p>
                                <p className="text-[10px] font-bold text-white uppercase opacity-70">Purpose: Abstract visual representing the intersection of flow and clarity.</p>
                                <p className="text-[10px] font-bold text-white uppercase opacity-70">Type: Abstract geometric pattern.</p>
                            </div>
                        </div>
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
