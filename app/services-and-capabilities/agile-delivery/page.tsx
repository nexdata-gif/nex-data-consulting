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
    XCircle,
    CheckCircle2,
    ArrowUp,
    ArrowDown,
    Activity,
    Layers,
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

                    {/* HERO Visual - Strategy-to-Execution Alignment Loop */}
                    <div className="bg-slate-50/50 border border-slate-200 rounded-3xl p-8 md:p-12 mb-12">
                        <div className="relative max-w-lg mx-auto aspect-square flex items-center justify-center">
                            {/* Central Hub */}
                            <div className="absolute z-10 bg-white shadow-xl rounded-full w-28 h-28 md:w-32 md:h-32 flex items-center justify-center border-2 border-blue-500">
                                <div className="text-center">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core</span>
                                    <span className="text-sm font-bold text-slate-900">Alignment</span>
                                </div>
                            </div>

                            {/* Loop Elements */}
                            <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-4 md:gap-6">
                                {/* Strategy */}
                                <div className="bg-slate-900 rounded-2xl p-6 flex flex-col justify-end text-white relative overflow-hidden group">
                                    <Target className="absolute top-4 right-4 h-6 w-6 text-slate-700 group-hover:text-blue-400 transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-sm mb-1 uppercase tracking-tight">Strategy</h4>
                                        <p className="text-[10px] text-slate-400 leading-tight">Deciding what, where and why</p>
                                    </div>
                                </div>
                                {/* Planning */}
                                <div className="bg-blue-600 rounded-2xl p-6 flex flex-col justify-end text-white relative overflow-hidden group">
                                    <Clock className="absolute top-4 right-4 h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-sm mb-1 uppercase tracking-tight">Planning</h4>
                                        <p className="text-[10px] text-blue-100 leading-tight">Deciding how, who and when</p>
                                    </div>
                                </div>
                                {/* Results */}
                                <div className="bg-slate-100 rounded-2xl p-6 flex flex-col justify-end text-slate-900 relative border border-slate-200 overflow-hidden group">
                                    <BarChart3 className="absolute top-4 right-4 h-6 w-6 text-slate-300 group-hover:text-blue-500 transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-sm mb-1 uppercase tracking-tight">Results</h4>
                                        <p className="text-[10px] text-slate-500 leading-tight">Comparing actual to anticipated</p>
                                    </div>
                                </div>
                                {/* Execution */}
                                <div className="bg-blue-50 rounded-2xl p-6 flex flex-col justify-end text-blue-900 border border-blue-100 relative overflow-hidden group">
                                    <Zap className="absolute top-4 right-4 h-6 w-6 text-blue-300 group-hover:text-blue-600 transition-colors" />
                                    <div>
                                        <h4 className="font-bold text-sm mb-1 uppercase tracking-tight">Execution</h4>
                                        <p className="text-[10px] text-blue-700 leading-tight">Actually doing it</p>
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Path Visualization */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                                <div className="w-[85%] h-[85%] rounded-full border-2 border-dashed border-blue-500 animate-[spin_20s_linear_infinite]" />
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

                    {/* Visual - Leadership Decision Boundary Map */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-12 shadow-sm">
                        <div className="space-y-4 max-w-2xl mx-auto">
                            {/* Leadership Lane */}
                            <div className="relative p-6 bg-slate-900 rounded-2xl text-white">
                                <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    Leadership Decisions
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">Strategy & Commitment</p>
                                        <p className="text-[10px] text-slate-400 italic">Deciding "What & Why"</p>
                                    </div>
                                    <ArrowDown className="h-5 w-5 text-blue-400" />
                                    <div className="space-y-1 text-right">
                                        <p className="text-sm font-bold">Course Correction</p>
                                        <p className="text-[10px] text-slate-400 italic">Based on high-trust visibility</p>
                                    </div>
                                </div>
                            </div>

                            {/* Boundary Line */}
                            <div className="flex items-center gap-4 py-2">
                                <div className="h-px bg-slate-200 flex-grow border-dashed border-t" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-4">Decision Boundary</span>
                                <div className="h-px bg-slate-200 flex-grow border-dashed border-t" />
                            </div>

                            {/* Team Lane */}
                            <div className="relative p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                                <div className="absolute -bottom-3 right-6 px-3 py-1 bg-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-600">
                                    Operational Execution
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-slate-900">Task-Level Ownership</p>
                                        <p className="text-[10px] text-slate-500 italic">Deciding "How, Who & When"</p>
                                    </div>
                                    <ArrowUp className="h-5 w-5 text-blue-500" />
                                    <div className="space-y-1 text-right">
                                        <p className="text-sm font-bold text-slate-900">Feedback Loops</p>
                                        <p className="text-[10px] text-slate-500 italic">Continuous visibility flow</p>
                                    </div>
                                </div>
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

                    {/* Visual - Synchronized Cadence View */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-12 shadow-sm overflow-hidden text-slate-900">
                        <div className="relative space-y-6">
                            {/* Horizontal Time Axis (Implicit) */}
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex-shrink-0">Horizon</div>
                                <div className="flex-grow grid grid-cols-4 gap-2">
                                    {[1, 2, 3, 4].map(q => <div key={q} className="h-1 bg-slate-100 rounded-full" />)}
                                </div>
                            </div>

                            {/* Leadership Cadence */}
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-[10px] font-bold text-blue-600 uppercase tracking-widest flex-shrink-0">Leadership</div>
                                <div className="flex-grow flex items-center h-12 bg-blue-50 rounded-xl px-4 border border-blue-100 border-dashed">
                                    <div className="w-1/4 h-6 bg-blue-600 rounded-lg flex items-center justify-center text-[8px] font-bold text-white uppercase tracking-tighter">Strategic Commitment</div>
                                    <div className="flex-grow" />
                                    <div className="w-1/4 h-6 bg-blue-600/50 rounded-lg flex items-center justify-center text-[8px] font-bold text-white uppercase tracking-tighter">Adjustment</div>
                                </div>
                            </div>

                            {/* Team Delivery Cadence */}
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-[10px] font-bold text-slate-500 uppercase tracking-widest flex-shrink-0">Delivery Teams</div>
                                <div className="flex-grow grid grid-cols-8 gap-2">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                        <div key={i} className="h-8 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center group overflow-hidden">
                                            <div className="w-full h-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex items-center justify-center">
                                                <Activity className="h-3 w-3 text-blue-400" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Convergence Points */}
                            <div className="absolute inset-y-0 left-[25%] w-px bg-blue-500/20 dashed border-l border-dashed pointer-events-none" />
                            <div className="absolute inset-y-0 left-[50%] w-px bg-blue-500/20 dashed border-l border-dashed pointer-events-none" />
                            <div className="absolute inset-y-0 left-[75%] w-px bg-blue-500/20 dashed border-l border-dashed pointer-events-none" />
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

                    {/* Visual - Regulated Environment Integration Model */}
                    <div className="bg-slate-900 rounded-3xl p-12 mb-12 flex items-center justify-center relative overflow-hidden">
                        <div className="relative z-10 w-full max-w-sm aspect-square">
                            {/* Inner Circle: Core Execution */}
                            <div className="absolute inset-[30%] bg-blue-600 rounded-full shadow-2xl shadow-blue-500/50 flex flex-col items-center justify-center text-white border-4 border-blue-400">
                                <Zap className="h-6 w-6 mb-1" />
                                <span className="text-[8px] font-extrabold uppercase tracking-[0.2em]">Execution</span>
                            </div>

                            {/* Middle Ring: Governance & Security */}
                            <div className="absolute inset-[15%] border-4 border-slate-700 rounded-full flex items-center justify-center">
                                <div className="absolute -top-3 px-3 py-0.5 bg-slate-800 border border-slate-700 rounded-full text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                                    Governance Rings
                                </div>
                                <ShieldCheck className="absolute top-4 right-8 h-4 w-4 text-slate-500" />
                            </div>

                            {/* Outer Ring: Infrastructure & Compliance */}
                            <div className="absolute inset-0 border-4 border-slate-800 rounded-full opacity-50 border-dashed animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-0 border-4 border-slate-800 rounded-full flex items-center justify-center">
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-slate-800 border border-slate-700 rounded-full text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                                    Environmental Guardrails
                                </div>
                                <Layers className="absolute bottom-4 left-8 h-4 w-4 text-slate-500" />
                            </div>
                        </div>

                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #334155 1px, transparent 0)', backgroundSize: '24px 24px' }} />
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

                    {/* Visual - Decision-Oriented Visibility Funnel */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-12 text-slate-900 shadow-sm relative overflow-hidden">
                        <div className="max-w-md mx-auto space-y-2 relative z-10">
                            {/* Raw Signals */}
                            <div className="bg-slate-50 border border-slate-100 p-4 rounded-t-3xl flex items-center justify-between opacity-40">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Raw Execution Signals</div>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-3 bg-slate-300 rounded-full" />)}
                                </div>
                            </div>

                            {/* Curated Indicators */}
                            <div className="relative group">
                                <div className="bg-blue-50 border border-blue-100 p-6 mx-4 flex items-center justify-between text-blue-900 transition-all group-hover:bg-blue-100">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Curated Indicators</p>
                                        <p className="text-xs font-semibold italic">Predictability, Bottlenecks, Risk Velocity</p>
                                    </div>
                                    <Activity className="h-5 w-5 text-blue-500 animate-pulse" />
                                </div>
                                <div className="absolute -left-2 -right-2 top-1/2 -translate-y-1/2 h-px bg-blue-200 dashed border-t border-dashed opacity-20" />
                            </div>

                            {/* Executive Decision */}
                            <div className="bg-slate-900 p-8 mx-8 rounded-b-3xl border border-blue-500/30 flex flex-col items-center text-center text-white shadow-xl shadow-blue-900/10">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                                    <Target className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Executive Decisions</h4>
                                <p className="text-[10px] text-slate-400 leading-tight">Investment priorities, risk mitigation, and strategic pivots</p>
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

                    {/* Executive Comparison Graphic */}
                    <div className="bg-slate-50/50 rounded-3xl border border-slate-200 overflow-hidden mt-12 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Unsuccessful Column */}
                            <div className="bg-white p-8 md:p-10 md:border-r border-slate-200">
                                <h4 className="text-red-600 font-bold text-[10px] uppercase tracking-widest mb-10 flex items-center gap-2">
                                    <XCircle className="h-4 w-4" /> Characteristics of Unsuccessful Transformations
                                </h4>
                                <div className="space-y-12">
                                    <div className="flex gap-4">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                                        <p className="text-slate-600 text-sm leading-relaxed italic">Gap between strategy and execution; culprit is usually an obsolete or misaligned operating model</p>
                                    </div>
                                    <div className="pt-8 border-t border-slate-50 flex gap-4">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                                        <p className="text-slate-600 text-sm leading-relaxed italic">Budgets not linked to strategy, resulting in misaligned resources and capabilities</p>
                                    </div>
                                    <div className="pt-8 border-t border-slate-50 flex gap-4">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                                        <p className="text-slate-600 text-sm leading-relaxed italic">Legacy organizational designs left in place, inhibiting change in roles, responsibilities, and processes</p>
                                    </div>
                                </div>
                            </div>
                            {/* Successful Column */}
                            <div className="bg-slate-50/30 p-8 md:p-10">
                                <h4 className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-10 flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" /> Characteristics of Successful Transformations
                                </h4>
                                <div className="space-y-12">
                                    <div className="flex gap-4">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                        <p className="text-slate-900 text-sm font-semibold leading-relaxed">Budgets built around strategic priorities with resources explicitly allocated to execution</p>
                                    </div>
                                    <div className="pt-8 border-t border-slate-200/50 flex gap-4">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                        <p className="text-slate-900 text-sm font-semibold leading-relaxed">Strategy translated into operational mechanisms, with progress monitored and adjustments made</p>
                                    </div>
                                    <div className="pt-8 border-t border-slate-200/50 flex gap-4">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                        <p className="text-slate-900 text-sm font-semibold leading-relaxed">Top-quartile operating models correlated with materially stronger long-term growth outcomes</p>
                                    </div>
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

                    {/* Visual - Integrated Service Ecosystem */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-12 md:p-16 mb-12 shadow-sm relative overflow-hidden flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-8 md:gap-16 relative z-10">
                            {[
                                { name: "Infrastructure & IT Ops", icon: Layers },
                                { name: "Data & Visibility", icon: Eye },
                                { name: "Agile Delivery", icon: Zap, active: true },
                                { name: "Technical Enablement", icon: Activity }
                            ].map((item, i) => (
                                <div key={i} className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-all ${item.active ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-110' : 'bg-slate-50 text-slate-400'}`}>
                                    <item.icon className={`h-6 w-6 ${item.active ? 'text-white' : 'text-slate-300'}`} />
                                    <span className="text-[8px] font-bold uppercase tracking-widest text-center leading-tight">{item.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Connecting Lines */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                            <div className="w-1/2 h-1/2 border-2 border-slate-900 rounded-full" />
                            <div className="absolute w-full h-px bg-slate-900 top-1/2" />
                            <div className="absolute h-full w-px bg-slate-900 left-1/2" />
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

                </section>

                {/* 10. DELIVERY PHILOSOPHY */}
                <section className="mb-20 py-16 px-8 bg-slate-900 text-white rounded-3xl overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">10. Delivery Philosophy</h2>
                        <p className="text-slate-300 text-lg leading-relaxed italic">
                            "We believe in execution over frameworks. Our goal is to build long-term delivery discipline through clarity, ownership, and measurable results, ensuring Agile works in the real world."
                        </p>
                    </div>

                    {/* Closing Visual - Delivery Grid */}
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                        <div className="grid grid-cols-6 gap-4 rotate-12 scale-150">
                            {Array.from({ length: 24 }).map((_, i) => (
                                <div key={i} className="w-12 h-12 border border-blue-500 rounded-lg flex items-center justify-center">
                                    <div className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'bg-slate-800'}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-8 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg">
                        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/40">Execution Architecture | NexData Consulting</span>
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
