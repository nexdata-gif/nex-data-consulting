import Link from 'next/link';
import {
    ChevronLeft,
    ArrowRight,
    BarChart3,
    PieChart,
    LineChart,
    Activity,
    ShieldCheck,
    AlertTriangle,
    Target,
    Zap,
    Network,
    Users,
    Layers
} from 'lucide-react';

export default function DataAnalyticsEnablementPage() {
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
                        Data Analytics & Decision Enablement
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Turning operational data into trusted decision support through metric discipline and actionable visibility.
                    </p>
                </header>

                <hr className="border-gray-100 mb-16" />

                {/* 1. EXECUTIVE OVERVIEW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Executive Overview</h2>
                    <div className="prose prose-slate lg:prose-lg text-slate-600 leading-relaxed mb-10">
                        <p>
                            Most organizations today suffer from an "information paradox": they have more data than ever, yet lack the trusted insight required to make high-stakes decisions. Dashboards often fail not because of technical flaws, but because they are disconnected from the operational reality they are meant to represent.
                        </p>
                        <p>
                            Data Analytics & Decision Enablement is a disciplined approach to turning raw data into actionable visibility. We position analytics as an execution enablement capability, focusing on creating the trust and clarity necessary for leaders to act with confidence. This service is designed for operationally complex and regulated environments where "vanity metrics" are not enough.
                        </p>
                    </div>

                    {/* HERO Visual Placeholder */}
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <BarChart3 className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The Decision Support Lifecycle</h4>
                            <p className="text-sm text-slate-500">
                                Name: Decision-Oriented Analytics Loop<br />
                                Purpose: Illustrate the flow from raw data ingestion to metric validation, and finally to executive decision support.<br />
                                Type: Conceptual Lifecycle Diagram<br />
                                Notes: Highlight "Metric Trust" as the central bridge.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. WHAT THIS SERVICE INCLUDES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">What This Service Includes</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We provide the strategic and technical coordination required to build a repeatable insight system. Our focus is on metrics that support action, ensuring that every dashboard and report has a clear purpose in the leadership decision rhythm.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            {
                                title: "Metric Strategy & Optimization",
                                text: "Defining the 'vital few' metrics that actually drive delivery and operational performance."
                            },
                            {
                                title: "Operational Execution Visibility",
                                text: "Real-time tracking of throughput, predictability, and bottlenecks across complex workstreams."
                            },
                            {
                                title: "Reporting Automation",
                                text: "Replacing manual spreadsheet consolidation with automated, defensible reporting cadences."
                            },
                            {
                                title: "Decision Rhythm Support",
                                text: "Structuring analytics to feed directly into leadership forums, governance boards, and executive reviews."
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
                            <Layers className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Service Component Map</h4>
                            <p className="text-sm text-slate-500">
                                Name: Decision Enablement Pillars<br />
                                Purpose: Show the layering of Metric Discipline, Execution Visibility, and Data Trust.<br />
                                Type: Stacked Component Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. EXECUTION AREA 1 — Metric Discipline & KPI Design */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">I</span>
                        <h2 className="text-2xl font-bold text-slate-900">Metric Discipline & KPI Design</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            We help organizations define what actually matters by aligning KPIs to real-world ownership and accountability. We avoid "metric sprawl" by distinguishing between executive-level outcomes and the operational indicators that drive them.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Accountability-Linked KPIs:</b> Ensuring every metric has a clear owner and a directly related execution action.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Target className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Metric Hierarchies:</b> Building a clear path from frontline execution data to executive-level strategic summaries.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Target className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Metric Alignment Grid</h4>
                            <p className="text-sm text-slate-500">
                                Name: The Accountability Matrix<br />
                                Purpose: Illustrate how operational metrics roll up into executive decision support.<br />
                                Type: Hierarchy/Tiered Chart
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. EXECUTION AREA 2 — Analytics That Support Execution */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">II</span>
                        <h2 className="text-2xl font-bold text-slate-900">Analytics That Support Execution</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            Analytics must serve the work. We specialize in delivery and operational analytics that provide visibility into throughput, predictability, and trends. We prioritize leading indicators that allow for course correction over lagging indicators that only report failure after the fact.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <Activity className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Delivery Velocity & Predicting:</b> Using execution data to forecast milestones and identify project risks before they stall delivery.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Activity className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Resource & Capacity Visibility:</b> Identifying bottlenecks and constraints within the delivery pipeline to optimize staff allocation.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <LineChart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Execution Flow Dashboard</h4>
                            <p className="text-sm text-slate-500">
                                Name: Delivery Predictability Chart<br />
                                Purpose: Show the shift from unpredictable "noise" to a disciplined, predictable delivery cadence.<br />
                                Type: Trend/Velocity Visualization
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. EXECUTION AREA 3 — Reporting Cadence & Decision Rhythm */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">III</span>
                        <h2 className="text-2xl font-bold text-slate-900">Reporting Cadence & Decision Rhythm</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            Insight is perishable. We align analytics to your organization's leadership forums and governance rhythms, ensuring that data is presented exactly when and where decisions are made. We replace ad-hoc "report requests" with a stable, automated cadence of repeatable insight.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <Zap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Meeting-Aligned Analytics:</b> Tailoring reporting packs to specific leadership forums (Weekly Ops, Monthly SteerCo).
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Zap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Cadence Automation:</b> Reducing the manual effort required to generate recurring reports, ensuring they are always on time and accurate.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Activity className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The Governance Clock</h4>
                            <p className="text-sm text-slate-500">
                                Name: Decision Rhythm Timeline<br />
                                Purpose: Illustrate the alignment of data refreshes, reporting cycles, and leadership forums.<br />
                                Type: Circular/Wheel Timeline
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. EXECUTION AREA 4 — Data Trust, Governance & Validation */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8 pb-2 border-b border-slate-100">
                        <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">IV</span>
                        <h2 className="text-2xl font-bold text-slate-900">Data Trust, Governance & Validation</h2>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-10 ml-12">
                        <p>
                            A dashboard that isn't trusted is a liability. We ensure that your numbers are explainable, defensible, and audit-aware. By implementing "light governance," we create a single source of truth without slowing down the execution teams who provide the data.
                        </p>
                        <ul className="list-none p-0 mt-4 space-y-4">
                            <li className="flex gap-3">
                                <ShieldCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Source Validation:</b> Ensuring that data from fragmented or inconsistent sources is cleaned and validated before it hits the dashboard.
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <ShieldCheck className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                <div>
                                    <b className="text-slate-900 block">Audit-Aware Reporting:</b> Ensuring that data definitions and logic are documented and defensible for regulated or government environments.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <ShieldCheck className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The Trust Framework</h4>
                            <p className="text-sm text-slate-500">
                                Name: Data Validation Layers<br />
                                Purpose: Show the validation checks data passes through before reaching the executive dashboard.<br />
                                Type: Shield/Layered Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. COMMON FAILURE PATTERNS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Failure Patterns</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            We address the fundamental reasons why traditional reporting platforms fail to provide decision support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Metric Conflict", text: "Different teams measuring the same outcome with different definitions, leading to leadership confusion." },
                            { title: "Dashboard Abandonment", text: "Complex visualizations that are too difficult for stakeholders to use, resulting in a return to anecdotes." },
                            { title: "Anecdotal Decision Making", text: "Leaders making high-stakes choices based on feeling because the data is outdated or untrusted." },
                            { title: "The 'Report Factory' Trap", text: "Teams spending more time generating manual reports than actually executing the work." }
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
                            <PieChart className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The "Noise Gap"</h4>
                            <p className="text-sm text-slate-500">
                                Name: Data Volume vs. Decision Accuracy<br />
                                Purpose: Show how decision quality decreases as data volume increases without metric discipline.<br />
                                Type: Scatter Plot/Curve Line
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
                                <Zap className="h-5 w-5 text-blue-600" /> Agile Delivery
                            </h4>
                            <p className="text-sm text-slate-600">Analytics provide the predictability data required for high-velocity Agile planning and release coordination.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Network className="h-5 w-5 text-blue-600" /> IT Operations
                            </h4>
                            <p className="text-sm text-slate-600">Metric discipline ensures infrastructure delivery is supported by clear operational readiness validation.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Activity className="h-5 w-5 text-blue-600" /> Technical Enablement
                            </h4>
                            <p className="text-sm text-slate-600">Decision-oriented data helps prioritize which staff enablement initiatives will have the highest execution impact.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <LineChart className="h-5 w-5 text-blue-600" /> AI & Automation
                            </h4>
                            <p className="text-sm text-slate-600">Clean, validated operational data is the essential foundation for any successful automation or AI initiative.</p>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Network className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">The Integrated Delivery Model</h4>
                            <p className="text-sm text-slate-500">
                                Name: NexData Core Connectivity<br />
                                Purpose: Show Data Analytics as the visibility layer that connects all other execution services.<br />
                                Type: Network/Integrations Diagram
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. APPLICABLE USE CASES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Applicable Use Cases</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        {[
                            "Executive and program leadership visibility",
                            "Operational performance management",
                            "Federal and regulated environments",
                            "SMBs scaling execution through data discipline",
                            "Organizations preparing for automation or AI adoption"
                        ].map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <ArrowRight className="h-4 w-4 text-blue-600" />
                                <span className="text-slate-700 font-medium">{useCase}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Users className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Stakeholder Adoption Visual</h4>
                            <p className="text-sm text-slate-500">
                                Name: Persona-Based Analytics Model<br />
                                Purpose: Show how analytics serve Program Leads, Executive Sponsors, and Operations Managers.<br />
                                Type: Icon Grid/Matrix
                            </p>
                        </div>
                    </div>
                </section>

                {/* 10. DELIVERY PHILOSOPHY */}
                <section className="mb-20 py-16 px-8 bg-slate-900 text-white rounded-3xl overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">Delivery Philosophy</h2>
                        <ul className="text-slate-300 text-lg leading-relaxed space-y-4 list-none p-0">
                            <li>Insight over information</li>
                            <li>Decisions over dashboards</li>
                            <li>Discipline over tooling</li>
                            <li>Trust before automation</li>
                            <li>Actionable clarity over observation</li>
                        </ul>
                    </div>

                    {/* Placeholder for Divider */}
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-xl"></div>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">[VISUAL PLACEHOLDER: Closing Data Grid]</span>
                    </div>
                </section>

                <footer className="text-center pb-20">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                        Discuss Your Decision Support Needs
                    </Link>
                </footer>
            </article>
        </div>
    );
}
