import Link from 'next/link';
import {
    ChevronLeft,
    ArrowRight,
    Zap,
    Target,
    Workflow,
    BarChart3,
    ShieldCheck,
    Users,
    Clock,
    Eye,
    AlertCircle,
    Link as LinkIcon
} from 'lucide-react';

export default function AgileDeliveryEnablementPage() {
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
                        Agile Delivery & Leadership Enablement
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Execution discipline for Agile and hybrid environments, focusing on ownership, decision-making, and delivery accountability.
                    </p>
                </header>

                <hr className="border-gray-100 mb-16" />

                {/* 1. EXECUTIVE OVERVIEW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Executive Overview</h2>
                    <div className="prose prose-slate lg:prose-lg text-slate-600 leading-relaxed mb-10">
                        <p>
                            Agile delivery often fails not because of a lack of technical skill, but because of a breakdown in leadership execution discipline. In complex enterprise environments, "doing Agile" without a focus on ownership and accountability results in ceremonial theater rather than measurable outcomes.
                        </p>
                        <p>
                            This service is designed as embedded delivery enablement, not theoretical coaching. We focus on bridge-building between leadership intent and team execution, ensuring that decision-making is rapid, ownership is clear, and delivery accountability is maintained across every level of the organization.
                        </p>
                    </div>

                    {/* HERO Visual Placeholder */}
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Target className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Execution Alignment Hero</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Illustrate the bridge between Leadership Vision and Team Execution.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Conceptual flow diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Minimalist, showing decision flow and feedback loops without framework branding.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. WHAT THIS SERVICE INCLUDES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">2. What This Service Includes</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We define Agile delivery enablement as the practical application of execution discipline. We move beyond ceremonies to focus on the capabilities that actually drive predictable delivery.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Execution Ownership", text: "Establishing clear accountability for outcomes at the leadership and delivery levels." },
                            { title: "Cadence Design", text: "Structuring operating rhythms that align to actual dependencies and business milestones." },
                            { title: "Delivery Visibility", text: "Creating decision-oriented reporting that provides true insight into risks and progress." },
                            { title: "Leadership Enablement", text: "Practical support for leaders to navigate Agile roles and decision-making boundaries." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 border border-slate-100 rounded-2xl bg-white shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Workflow className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Core Capabilities Matrix</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Map service components to execution outcomes.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: 2x2 or grid diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Professional, emphasizing outcome over activity.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. EXECUTION AREA 1 — LEADERSHIP ENABLEMENT */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 font-blue-600">3. Execution Area 1 — Leadership Enablement in Practice</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Leadership involvement is the most critical factor in delivery success. We enable leaders to lead effectively within an Agile environment by clarifying roles and fostering a culture of ownership.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><b>Decision Ownership vs Escalation:</b> Defining what leaders decide versus what teams own to minimize bottlenecks.</li>
                            <li><b>Accountability without Micromanagement:</b> Establishing high-visibility indicators that allow for oversight without interference.</li>
                            <li><b>Behavioral Alignment:</b> Ensuring leadership actions reinforce the delivery discipline required for success.</li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Users className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Leadership Decision Boundary Map</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Visualize the separation of concerns between leaders and teams.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Split-level diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Clean, showing interactions and decision loops.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. EXECUTION AREA 2 — OPERATING MODEL & CADENCE */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Execution Area 2 — Delivery Operating Model & Cadence Design</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We design operating models that prioritize reality over framework theory. This means building rhythms that reflect actual work patterns and cross-team dependencies.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><b>Planning Horizons:</b> Aligning short-term execution with long-term commitment boundaries.</li>
                            <li><b>Dependency Management:</b> Synchronizing cadences across teams to ensure handoffs are seamless.</li>
                            <li><b>Backlog Alignment:</b> Bridging the gap between high-level roadmaps and team-level execution.</li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Clock className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Synchronized Cadence View</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Show how different team rhythms align for integrated delivery.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Timeline or gear-based diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Tool-agnostic, professional.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. EXECUTION AREA 3 — HYBRID & REGULATED ENVIRONMENTS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">5. Execution Area 3 — Operating in Hybrid & Regulated Environments</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Agile doesn't exist in a vacuum. We specialize in making Agile delivery work alongside traditional infrastructure, operations, and compliance frameworks.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><b>Constraint Integration:</b> Respecting security, audit, and compliance requirements without sacrificing delivery speed.</li>
                            <li><b>Infrastructure Alignment:</b> Coordinating software delivery with data center and hardware lead times.</li>
                            <li><b>Vendor Coordination:</b> Managing delivery across multi-vendor initiatives with unified accountability.</li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <ShieldCheck className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Regulated Environment Integration</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Illustrate how delivery discipline maintains speed while meeting constraints.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Concentric circles or layered diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Emphasize compliance as an integrated part of delivery.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. EXECUTION AREA 4 — DELIVERY VISIBILITY */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">6. Execution Area 4 — Delivery Visibility Executives Can Trust</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We move away from vanity metrics and "Agile theater" to provide leaders with visibility that drives decisions.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><b>Risk Signaling:</b> Proactive identification of delivery blockers and trade-off requirements.</li>
                            <li><b>Outcome Tracking:</b> Measuring progress against business commitments rather than activity levels.</li>
                            <li><b>Transparency:</b> Creating a "single source of truth" for delivery status that stands up to executive scrutiny.</li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Eye className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Decision-Oriented Visibility Framework</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Show how raw data translates into executive insight.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Funnel or transformation diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Clean, emphasizing clarity over volume of data.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. COMMON FAILURE PATTERNS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">7. Common Failure Patterns This Service Addresses</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We address the systemic issues that prevent teams from achieving their delivery potential.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Doing Agile without Outcomes", text: "Teams following ceremonies but failing to ship value consistently. We shift focus back to delivery." },
                            { title: "Missed Commitments", text: "Recurring failure to meet milestones. We establish predictable cadences and realistic planning." },
                            { title: "Scope Churn", text: "Constant changes preventing completion. We implement disciplined prioritization and backlog management." },
                            { title: "Leadership Confusion", text: "Unclear roles leading to friction. We clarify governance and decision-making boundaries." }
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
                            <BarChart3 className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Failure Pattern Diagnostic</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Help identify root causes of delivery friction.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Comparison chart or checklist.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Professional, emphasizing solutions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. HOW THIS SERVICE CONNECTS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">8. How This Service Connects to Others</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Agile Delivery & Leadership Enablement serves as the execution engine that integrates with our broader service ecosystem.
                        </p>
                    </div>

                    <div className="space-y-4 mb-12">
                        {[
                            { name: "Infrastructure & IT Operations Support", connection: "Coordinating software delivery with physical and virtual environmental readiness." },
                            { name: "Operational Visibility & Data", connection: "Leveraging raw delivery data to build executive dashboards and insights." },
                            { name: "Execution Enablement", connection: "Providing the discipline required to turn technical strategy into project reality." }
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
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Integrated Service Ecosystem</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Show the interplay between different NexData services.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Network or Venn diagram.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Highlight complementary nature without overlap.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. APPLICABLE USE CASES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">9. Applicable Use Cases</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        {[
                            "Federal & Public Sector Modernization",
                            "Highly Regulated Delivery Environments",
                            "Multi-Vendor Program Initiatives",
                            "Large-Scale Enterprise Transformations"
                        ].map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <ArrowRight className="h-4 w-4 text-blue-600" />
                                <span className="text-slate-700 font-medium">{useCase}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Target className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left bg-white p-4 rounded-lg border border-slate-100 shadow-sm inline-block w-full">
                                <p className="text-xs font-bold text-slate-500 uppercase">Name: Case Study / Use Case Snapshot</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Purpose: Demonstrate delivery impact across industries.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Type: Tiled or grid icons.</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Notes: Clean, professional representations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. DELIVERY PHILOSOPHY */}
                <section className="mb-20 py-16 px-8 bg-slate-900 text-white rounded-3xl overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">10. Delivery Philosophy</h2>
                        <p className="text-slate-300 text-lg leading-relaxed italic">
                            "We believe in execution over frameworks. Our goal is to build long-term delivery discipline through clarity, ownership, and measurable results, ensuring Agile works in the real world."
                        </p>
                    </div>

                    {/* Closing Visual Placeholder */}
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-xl"></div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                            <span className="block text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-2">[VISUAL PLACEHOLDER]</span>
                            <div className="text-left">
                                <p className="text-[10px] font-bold text-white uppercase opacity-70">Name: Closing Delivery Grid</p>
                                <p className="text-[10px] font-bold text-white uppercase opacity-70">Purpose: Final conceptual visual of disciplined execution.</p>
                                <p className="text-[10px] font-bold text-white uppercase opacity-70">Type: Abstract geometric pattern.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="text-center pb-20">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                        Schedule an Execution Readiness Discovery Call
                    </Link>
                </footer>
            </article>
        </div>
    );
}
