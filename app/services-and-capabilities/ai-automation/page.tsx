import Link from 'next/link';
import {
    ChevronLeft,
    ArrowRight,
    Workflow,
    Zap,
    Bot,
    Search,
    Users,
    Target,
    ShieldCheck,
    AlertTriangle,
    LineChart,
    Activity
} from 'lucide-react';

export default function AIAutomationEnablementPage() {
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
                        AI & Automation Enablement
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Practical automation that reduces overhead and scales execution through disciplined, human-in-the-loop design.
                    </p>
                </header>

                <hr className="border-gray-100 mb-16" />

                {/* 1. EXECUTIVE OVERVIEW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Executive Overview</h2>
                    <div className="prose prose-slate lg:prose-lg text-slate-600 leading-relaxed mb-10">
                        <p>
                            In operationally complex environments, automation is often viewed as a "silver bullet" for efficiency. However, most automation efforts fail because they are introduced too quickly, without context, or in isolation from the people doing the work. Automating a broken process only produces errors at a higher velocity.
                        </p>
                        <p>
                            This service provides disciplined automation enablement. We focus on pragmatic, execution-oriented improvements that reduce manual coordination and reporting friction. This isn't about speculative AI innovation or replacing staff; it's about introducing high-precision, human-in-the-loop automation that scales your existing execution capacity.
                        </p>
                    </div>

                    {/* HERO Visual Placeholder */}
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Bot className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Pragmatic Automation Lifecycle</h4>
                            <p className="text-sm text-slate-500">
                                Name: The Automation Loop<br />
                                Purpose: Show the progression from observing real-world work to identifying friction, then deploying human-in-the-loop agents.<br />
                                Type: Circular Flow Diagram<br />
                                Notes: Centralize "Human Oversight" as the core anchor.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. WHAT THIS SERVICE INCLUDES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">What This Service Includes</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            AI & Automation Enablement is the process of layering intelligent, narrowly-scoped tools onto stable operational workflows. We believe that automation must follow understanding—never precede it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            {
                                title: "Workflow Automation",
                                text: "Automating repetitive data entry, status updates, and notification triggers within your existing platforms."
                            },
                            {
                                title: "Coordination Reduction",
                                text: "Using lightweight agents to handle manual handoffs and follow-ups between teams to reduce execution drag."
                            },
                            {
                                title: "Reporting Acceleration",
                                text: "Developing automated insights and status summaries to replace manual spreadsheet consolidation."
                            },
                            {
                                title: "Decision Support Agents",
                                text: "Providing staff with purpose-built tools that summarize complex information without removing human judgment."
                            }
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
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Capabilities Architecture</h4>
                            <p className="text-sm text-slate-500">
                                Name: Core Enablement Pillars<br />
                                Purpose: Illustrate how automation, coordination, and reporting support the execution layer.<br />
                                Type: Pillar Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. EXECUTION AREA 1 — Understanding the Work Before Automating */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">I</span>
                        <h2 className="text-2xl font-bold text-slate-900">Understanding Before Automating</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            We begin by mapping how work is actually done across people and systems. Success in automation requires identifying where the real bottlenecks live—which are often hidden in manual coordination, non-standard tasks, or "shadow" workflows.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <Search className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Friction Mapping:</b> Identifying repetitive, manual tasks that consume high-value staff time and create operational drag.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Search className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Constraint Analysis:</b> Determining which tasks require human discretion and should remain manual to protect quality and oversight.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Discovery Roadmap</h4>
                            <p className="text-sm text-slate-500">
                                Name: Process Discovery Funnel<br />
                                Purpose: Show the shift from broad operational noise to focused automation opportunities.<br />
                                Type: Funnel/Process Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. EXECUTION AREA 2 — Role-Specific & Task-Focused Automation */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">II</span>
                        <h2 className="text-2xl font-bold text-slate-900">Role-Specific & Task-Focused Automation</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            Large-scale platform builds often fail under the weight of their own complexity. We build narrowly-scoped agents and automations designed for single tasks or specific user roles. This allows for rapid deployment and incremental value without disrupting the entire system.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Narrow Agent Scoping:</b> Designing tools for a specific sub-task (e.g., "Summarize this day's work logs") rather than an entire role replacement.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Human-in-the-Loop:</b> Every automation includes clear oversight points where a human verifies and approves the output.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Target className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Role Augmentation Model</h4>
                            <p className="text-sm text-slate-500">
                                Name: The Augmentation Grid<br />
                                Purpose: Visualize a human worker surrounded by specific, assisting task-agents.<br />
                                Type: Conceptual Grid
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. EXECUTION AREA 3 — Workflow & Coordination Automation */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">III</span>
                        <h2 className="text-2xl font-bold text-slate-900">Workflow & Coordination Automation</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            Operational slowdowns often occur at the "edges"—where work passes from one team or system to another. We automate handoffs, reminders, and status tracking to reduce decision latency and support teams that currently rely on manual coordination.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <Zap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Edge Coordination:</b> Automating the follow-ups and notifications that keep work moving between departments.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Zap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Latency Reduction:</b> Triggering automated status updates to reduce the time spent "waiting for an update".
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Zap className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Coordination Velocity Map</h4>
                            <p className="text-sm text-slate-500">
                                Name: Execution Path Acceleration<br />
                                Purpose: Show how automated edge-coordination removes "dead time" from a workflow.<br />
                                Type: Before/After Timeline Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. EXECUTION AREA 4 — Governance, Safety & Maintainability */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">IV</span>
                        <h2 className="text-2xl font-bold text-slate-900">Governance, Safety & Maintainability</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            We provide the guardrails necessary to avoid brittle or opaque automation. Our approach ensures that every automated component is maintainable, reversible, and subject to consistent oversight.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <ShieldCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Operational Guardrails:</b> Implementing limits and validation rules that prevent automation from behaving unpredictably.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <ShieldCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Maintainable Architecture:</b> Using standardized patterns that your internal IT operations teams can understand and support long-term.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <ShieldCheck className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The Safety Framework</h4>
                            <p className="text-sm text-slate-500">
                                Name: Automation Governance Shield<br />
                                Purpose: Illustrate the multiple layers of human oversight and technical guardrails surrounding automated tasks.<br />
                                Type: Concentric Ring Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. COMMON FAILURE PATTERNS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Failure Patterns</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We address the most common reasons automation efforts fail in professional environments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Automating Chaos", text: "Applying AI to a process that is undocumented or broken, which only accelerates failures." },
                            { title: "Overbuilding AI Solutions", text: "Creating enterprise-wide platforms when a simple task-bot would solve the core problem." },
                            { title: "Lack of Accountability", text: "Deploying black-box systems where no single person is responsible for the output." },
                            { title: "The Trust Gap", text: "Implementing tools that staff don't adopt because they seem complex, opaque, or irrelevant." }
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
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The ROI Mismap</h4>
                            <p className="text-sm text-slate-500">
                                Name: Implementation Cost vs. Execution Value<br />
                                Purpose: Show how "overbuilt" automation leads to diminishing returns vs. narrowly-scoped success.<br />
                                Type: Comparative Line Graph
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
                                <Users className="h-5 w-5 text-blue-600" /> Technical Enablement
                            </h4>
                            <p className="text-sm text-slate-600">Automation handles the mundane, freeing staff to focus on higher-level systems for which they've been enabled.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Zap className="h-5 w-5 text-blue-600" /> Agile Delivery
                            </h4>
                            <p className="text-sm text-slate-600">Automated status tracking and reporting provide the discipline needed for high-velocity delivery.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Activity className="h-5 w-5 text-blue-600" /> Operational Visibility
                            </h4>
                            <p className="text-sm text-slate-600">Feeding clean, automated data into dashboards for leadership decision support.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Network className="h-5 w-5 text-blue-600" /> IT Operations
                            </h4>
                            <p className="text-sm text-slate-600">Ensuring automated workflows are governed and maintainable within corporate infrastructure.</p>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Activity className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The Execution Stack</h4>
                            <p className="text-sm text-slate-500">
                                Name: NexData Unified Delivery Model<br />
                                Purpose: Show how automation layers on top of stable processes and enabled people.<br />
                                Type: Stacked Architecture Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. APPLICABLE USE CASES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Applicable Use Cases</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        {[
                            "SMBs scaling operations through lightweight automations",
                            "Field-based organizations requiring automated work log summaries",
                            "Regulated environments needing automated audit trails",
                            "Teams with high repetitive coordination and status reporting",
                            "Companies seeking practical AI adoption without large R&D spend"
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
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Execution Maturity Benchmarks</h4>
                            <p className="text-sm text-slate-500">
                                Name: Automation Success Matrix<br />
                                Purpose: Show value realization across diverse industries (Gov, Construction, SMB).<br />
                                Type: Icon/Value Grid
                            </p>
                        </div>
                    </div>
                </section>

                {/* 10. DELIVERY PHILOSOPHY */}
                <section className="mb-20 py-16 px-8 bg-slate-900 text-white rounded-3xl overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">Delivery Philosophy</h2>
                        <ul className="text-slate-300 text-lg leading-relaxed space-y-4 list-none p-0">
                            <li>Understand the business first, automate second</li>
                            <li>Restraint over experimentation</li>
                            <li>Discipline over hype</li>
                            <li>Human-in-the-loop by default</li>
                            <li>Pragmatic execution over transformative idealization</li>
                        </ul>
                    </div>

                    {/* Placeholder for Divider */}
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-xl"></div>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">[VISUAL PLACEHOLDER: Closing Automation Mosaic]</span>
                    </div>
                </section>

                <footer className="text-center pb-20">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                        Schedule an Automation Discovery Call
                    </Link>
                </footer>
            </article>
        </div>
    );
}
