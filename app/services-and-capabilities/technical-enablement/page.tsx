import Link from 'next/link';
import {
    ChevronLeft,
    ArrowRight,
    Layout,
    Layers,
    Activity,
    LineChart,
    Settings,
    Users,
    GitBranch,
    Bot,
    ShieldCheck,
    AlertTriangle,
    Network
} from 'lucide-react';

export default function TechnicalEnablementPage() {
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
                        Technical Enablement & Infrastructure Delivery Support
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Helping people, workflows, and systems execute together through practical enablement and disciplined delivery support.
                    </p>
                </header>

                <hr className="border-gray-100 mb-16" />

                {/* 1. EXECUTIVE OVERVIEW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Executive Overview</h2>
                    <div className="prose prose-slate lg:prose-lg text-slate-600 leading-relaxed mb-10">
                        <p>
                            Most delivery failures don't originate from bad technology. They stem from a fundamental misalignment between the people doing the work, the workflows they follow, and the systems they use. When tools are introduced without enablement, adoption stalls and execution suffers.
                        </p>
                        <p>
                            Technical Enablement & Infrastructure Delivery Support is a hands-on service designed to bridge this gap. We focus on execution enablement across the entire organization, ensuring that staff are confident, workflows are simplified, and systems are ready to support real-world behavior. This isn't consulting theory—it's the practical work required to make execution possible across technical and non-technical roles.
                        </p>
                    </div>

                    {/* HERO Visual Placeholder */}
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Layers className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The Execution Triad</h4>
                            <p className="text-sm text-slate-500">
                                Name: Execution Triad Visualization<br />
                                Purpose: Illustrate the intersection of People, Workflows, and Systems as the core of execution.<br />
                                Type: Conceptual Diagram<br />
                                Notes: Emphasize overlap and balance; avoid tool logos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. WHAT THIS SERVICE INCLUDES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">What This Service Includes</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Technical Enablement is the process of teaching people how to use systems confidently while simplifying the workflows they are asked to follow. We support execution across all skill levels, ensuring that technology serves the work rather than dictating it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Staff System Confidence", text: "Hands-on training and support to ensure employees can use their core tools without frustration or workarounds." },
                            { title: "Workflow Simplification", text: "Auditing and stripping away unnecessary steps from processes before layering on automation or new tools." },
                            { title: "Execution Support", text: "Active participation in delivery to bridge gaps between leadership expectations and frontline reality." },
                            { title: "Friction Reduction", text: "Identifying and removing the small daily hurdles that accumulate into organizational drag." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Layout className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Enablement Flow</h4>
                            <p className="text-sm text-slate-500">
                                Name: Enablement Progression<br />
                                Purpose: Show the shift from "System Anxiety" to "Execution Confidence".<br />
                                Type: Flow Diagram<br />
                                Notes: Low-to-high maturity progression.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. EXECUTION AREA 1 — People & Role Enablement */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">I</span>
                        <h2 className="text-2xl font-bold text-slate-900">People & Role Enablement</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            We focus on teaching staff how to use tools and systems effectively for their specific roles. This is particularly critical for supporting low- to mid-skill workers who may be overwhelmed by complex software but are essential to daily operations.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Practical Behavior:</b> Translating abstract systems into practical, day-to-day behavior that employees can replicate.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Communication Hygiene:</b> Reducing informal chaos (texts, ad hoc work) by improving communication habits within official channels.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Users className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Role Mastery Grid</h4>
                            <p className="text-sm text-slate-500">
                                Name: Role Enablement Matrix<br />
                                Purpose: Show how different roles interact with a unified system based on their specific needs.<br />
                                Type: Grid/Matrix
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. EXECUTION AREA 2 — Workflow & Role-Based Design */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">II</span>
                        <h2 className="text-2xl font-bold text-slate-900">Workflow & Role-Based Design</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            We redesign workflows around real behavior, not ideal diagrams. By observing how work is actually done, we can identify and eliminate unnecessary steps and coordination overhead that slow teams down.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <GitBranch className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Behavior-First Design:</b> Aligning processes with the natural rhythms of the staff who execute them.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <GitBranch className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Clear Handoffs:</b> Clarifying ownership and responsibilities to ensure nothing falls through the cracks between teams.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <GitBranch className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Friction Audit Visualization</h4>
                            <p className="text-sm text-slate-500">
                                Name: Workflow Friction Map<br />
                                Purpose: Illustrate a complex workflow vs. a simplified, role-aligned workflow.<br />
                                Type: Comparison Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. EXECUTION AREA 3 — Automation & Agent Enablement */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">III</span>
                        <h2 className="text-2xl font-bold text-slate-900">Automation & Agent Enablement</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            We advocate for incremental automation and "human-in-the-loop" design. Instead of pursuing AI hype, we build small, purpose-built agents designed for single roles or functions to handle repetitive or mundane tasks.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <Bot className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Purpose-Built Agents:</b> Lightweight, maintainable, and practical automations delivered as one-time builds.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Bot className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Practical Augmentation:</b> Using automation to extend a person's capability without replacing their decision-making.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Bot className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The Digital Assistant Model</h4>
                            <p className="text-sm text-slate-500">
                                Name: Role-Specific Automation Diagram<br />
                                Purpose: Show a human worker supported by multiple "small" agents for specific tasks.<br />
                                Type: Conceptual Iconography
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. EXECUTION AREA 4 — Infrastructure & System Readiness */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">IV</span>
                        <h2 className="text-2xl font-bold text-slate-900">Infrastructure & System Readiness</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            Infrastructure is an enabler of work, not the focal point. We support execution when work depends on complex systems by providing delivery coordination, readiness validation, and go-live support.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <Network className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Bridge Coordination:</b> Bridging the gap between engineers, operators, and leadership to ensure operational stability.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <ShieldCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Readiness Validation:</b> Ensuring that system environments are actually ready for work before teams are deployed.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Settings className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Systems as Enablers</h4>
                            <p className="text-sm text-slate-500">
                                Name: Infrastructure Readiness Checklist Visual<br />
                                Purpose: Show infrastructure supporting the execution layer, not overshadowing it.<br />
                                Type: Stacked Layers Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. COMMON FAILURE PATTERNS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Failure Patterns</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We help organizations avoid the expensive pitfalls that occur when tools and technology are prioritized over people and workflows.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Tool Sprawl & Confusion", text: "Adding more tools to solve problems caused by poor usage of existing tools." },
                            { title: "Automation Before Understanding", text: "Automating a broken process, which only serves to make errors happen faster." },
                            { title: "Adoption vs. Execution", text: "Assuming that because a team has 'adopted' a tool, they are executing effectively." },
                            { title: "Over-Complex Systems", text: "Building systems that are so complex that teams create workarounds just to avoid them." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 border border-red-50 rounded-2xl bg-white shadow-sm flex gap-4">
                                <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-600">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Activity className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The "Complexity Trap"</h4>
                            <p className="text-sm text-slate-500">
                                Name: Complexity vs. Execution Velocity Map<br />
                                Purpose: Show how execution slows down as system complexity exceeds staff enablement.<br />
                                Type: Graph/Scatter Plot
                            </p>
                        </div>
                    </div>
                </section>

                {/* 8. HOW THIS SERVICE CONNECTS TO OTHERS */}
                <section className="mb-20 px-8 py-12 bg-slate-50 rounded-3xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">How This Service Connects to Others</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Activity className="h-5 w-5 text-blue-600" /> Agile Delivery
                            </h4>
                            <p className="text-sm text-slate-600">Technical Enablement provides the tool mastery required for Agile rhythms to function.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Network className="h-5 w-5 text-blue-600" /> Process Optimization
                            </h4>
                            <p className="text-sm text-slate-600">Enablement turns process redesign from a document into a lived staff reality.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Bot className="h-5 w-5 text-blue-600" /> AI & Automation
                            </h4>
                            <p className="text-sm text-slate-600">Provides the "human-in-the-loop" framework for responsible automation adoption.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Settings className="h-5 w-5 text-blue-600" /> IT Operations
                            </h4>
                            <p className="text-sm text-slate-600">Ensures infrastructure is delivered in a state that teams can actually support.</p>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Layers className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">NexData Service Ecosystem</h4>
                            <p className="text-sm text-slate-500">
                                Name: Service Connectivity Map<br />
                                Purpose: Show Technical Enablement as the connective tissue between people and modernization.<br />
                                Type: Network Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. APPLICABLE USE CASES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Applicable Use Cases</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        {[
                            "Construction and field-based operations",
                            "Real estate and development organizations",
                            "Government-adjacent and regulated environments",
                            "SMBs scaling operations",
                            "Teams adopting new tools or systems"
                        ].map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <ArrowRight className="h-4 w-4 text-blue-600" />
                                <span className="text-slate-700 font-medium">{useCase}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <LineChart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Industry Adoption Model</h4>
                            <p className="text-sm text-slate-500">
                                Name: Industry Use Case Grid<br />
                                Purpose: Show specific enablement needs across Construction, Real Estate, and Gov.<br />
                                Type: Icon Grid
                            </p>
                        </div>
                    </div>
                </section>

                {/* 10. DELIVERY PHILOSOPHY */}
                <section className="mb-20 py-16 px-8 bg-slate-900 text-white rounded-3xl overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">Delivery Philosophy</h2>
                        <ul className="text-slate-300 text-lg leading-relaxed space-y-4 list-none p-0">
                            <li>Execution before technology</li>
                            <li>People before automation</li>
                            <li>Simplicity over complexity</li>
                            <li>Systems should serve work, not dictate it</li>
                            <li>Enablement that sticks, not change for change’s sake</li>
                        </ul>
                    </div>

                    {/* Placeholder for Divider */}
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-xl"></div>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">[VISUAL PLACEHOLDER: Closing Enablement Grid]</span>
                    </div>
                </section>

                <footer className="text-center pb-20">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                        Discuss Your Technical Enablement Needs
                    </Link>
                </footer>
            </article>
        </div>
    );
}
