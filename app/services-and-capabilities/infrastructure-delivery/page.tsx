import Link from 'next/link';
import {
    ChevronLeft,
    ArrowRight,
    Layout,
    Layers,
    Activity,
    LineChart,
    Settings
} from 'lucide-react';

export default function InfrastructureDeliveryPage() {
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
                        Infrastructure & IT Operations Support
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Ensuring the disciplined execution and operational readiness of enterprise infrastructure through structured coordination and data center delivery management.
                    </p>
                </header>

                <hr className="border-gray-100 mb-16" />

                {/* 2. EXECUTIVE OVERVIEW */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Executive Overview</h2>
                    <div className="prose prose-slate lg:prose-lg text-slate-600 leading-relaxed mb-10">
                        <p>
                            In large-scale enterprise environments, the successful delivery of infrastructure is not merely a technical achievement but a coordination-heavy milestone. This service focuses on the execution phase of infrastructure projects, bridging the gap between high-level engineering designs and functional production environments.
                        </p>
                        <p>
                            We provide the delivery management framework necessary to navigate complex infrastructure stacks, ensuring that data center deployments, hardware refreshes, and cloud migrations are executed with precision. By prioritizing operational readiness from the outset, we ensure that new infrastructure is stable, manageable, and fully integrated into the existing IT operations ecosystem.
                        </p>
                    </div>

                    {/* Placeholder Styling */}
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Layers className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Infrastructure Delivery Lifecycle</h4>
                            <p className="text-sm text-slate-500">
                                Conceptual lifecycle diagram showing end-to-end execution flow from planning to steady-state operations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT THIS SERVICE INCLUDES */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">What This Service Includes</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            This service specializes in the coordination of physical and virtual infrastructure components. We manage the "last mile" of delivery, where technical specifications meet operational reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { title: "Infrastructure Execution Coordination", text: "Oversight of the physical or virtual build-out, ensuring alignment with standardized build-books and security baselines." },
                            { title: "Data Center Delivery Management", text: "Coordinating the floor-space, power, cooling, and cabling requirements for physical hardware deployments." },
                            { title: "Operational Readiness Validation", text: "Performing structured check-outs to ensure monitoring, alerting, and logging systems are functional before production handover." },
                            { title: "Site Reliability Support", text: "Validating that infrastructure configurations support site-specific resiliency requirements and disaster recovery protocols." }
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
                            <h4 className="text-lg font-bold text-slate-800 mb-2">Environment Progression</h4>
                            <p className="text-sm text-slate-500">
                                Explaining phased infrastructure delivery (SBX → DEV → TEST → PROD → DR).
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. EXECUTION AREAS */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-2 border-b border-slate-100">Execution Areas</h2>

                    <div className="space-y-16">
                        {/* Area I */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">I</span>
                                <h3 className="text-xl font-bold text-slate-900">Data Center & Physical Infrastructure Delivery</h3>
                            </div>
                            <div className="prose prose-slate text-slate-600 mb-6 ml-12">
                                <p>
                                    We manage the complex logistics of physical data center deployments. This includes coordinating with site facilities teams, hardware vendors, and network engineering to ensure that physical assets are received, racked, stacked, and patched correctly.
                                </p>
                                <ul className="list-none p-0 mt-4 space-y-2">
                                    <li className="flex gap-2">
                                        <b className="text-slate-900">Why it matters:</b> Prevents costly rework and delays caused by mismanaged physical dependencies or environmental non-compliance.
                                    </li>
                                    <li className="flex gap-2">
                                        <b className="text-slate-900">Outcome:</b> A physically sound and fully cabled hardware environment ready for configuration.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Area II */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">II</span>
                                <h3 className="text-xl font-bold text-slate-900">Cross-Domain Dependency Coordination</h3>
                            </div>
                            <div className="prose prose-slate text-slate-600 mb-6 ml-12">
                                <p>
                                    Infrastructure delivery often stalls at the boundaries between teams. We act as a central coordination point, ensuring that networking, storage, compute, and security workstreams are synchronized.
                                </p>
                                <ul className="list-none p-0 mt-4 space-y-2">
                                    <li className="flex gap-2">
                                        <b className="text-slate-900">Why it matters:</b> Eliminates bottlenecks in the delivery pipeline by proactively managing inter-team handoffs.
                                    </li>
                                    <li className="flex gap-2">
                                        <b className="text-slate-900">Outcome:</b> A cohesive infrastructure stack delivered without fragmented delays.
                                    </li>
                                </ul>
                            </div>

                            <div className="ml-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                                <div className="max-w-md mx-auto">
                                    <Settings className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                                    <h4 className="text-lg font-bold text-slate-800 mb-2">Dependency Coordination Map</h4>
                                    <p className="text-sm text-slate-500">
                                        Illustrate cross-team and cross-vendor execution dependencies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Area III */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">III</span>
                                <h3 className="text-xl font-bold text-slate-900">IT Operations Transition & Readiness</h3>
                            </div>
                            <div className="prose prose-slate text-slate-600 mb-6 ml-12">
                                <p>
                                    We ensure that the operations team is prepared to support the new infrastructure. This involves validating documentation quality, ensuring that CMDB records are accurate, and testing incident response pathways.
                                </p>
                                <ul className="list-none p-0 mt-4 space-y-2">
                                    <li className="flex gap-2">
                                        <b className="text-slate-900">Why it matters:</b> Ensures that the "day-two" support team has the knowledge and tools required to maintain uptime.
                                    </li>
                                    <li className="flex gap-2">
                                        <b className="text-slate-900">Outcome:</b> A seamless transition from project delivery to steady-state operations.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. OPERATIONS & MATURITY SUPPORT */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Operations & Maturity Support</h2>
                    <div className="prose prose-slate text-slate-600 mb-10">
                        <p>
                            Stabilization is the ultimate benchmark of success. We support the maturation of operational workflows by ensuring that infrastructure delivery is supported by robust ITSM processes. This includes verifying that change management records are complete, that patching cycles are established, and that the environment is visible within the enterprise monitoring dashboard.
                        </p>
                    </div>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                        <div className="max-w-md mx-auto">
                            <Activity className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">[VISUAL PLACEHOLDER]</span>
                            <h4 className="text-lg font-bold text-slate-800 mb-2">ITSM Conceptual Dashboard</h4>
                            <p className="text-sm text-slate-500">
                                Illustrate incident, change, problem, and knowledge workflows.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. DELIVERY PHILOSOPHY */}
                <section className="mb-20 py-16 px-8 bg-slate-900 text-white rounded-3xl overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-6">Delivery Philosophy</h2>
                        <p className="text-slate-300 text-lg leading-relaxed italic">
                            "Our approach is grounded in the principle of operational-first delivery. We believe that infrastructure is only truly delivered once it is stable, visible, and supportable."
                        </p>
                    </div>

                    {/* Placeholder for Divider */}
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-xl"></div>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">[VISUAL PLACEHOLDER: Delivery Philosophy Divider]</span>
                    </div>
                </section>

                {/* 7. APPLICABLE USE CASES */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Applicable Use Cases</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "New Data Center Builds or Moves",
                            "Global Infrastructure Refreshes",
                            "Cloud Landing Zone Deployment",
                            "Post-Merger Infrastructure Integration"
                        ].map((useCase, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <ArrowRight className="h-4 w-4 text-blue-600" />
                                <span className="text-slate-700 font-medium">{useCase}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 pt-20 border-t border-slate-100 text-center">
                        <div className="inline-block p-12 opacity-40">
                            <LineChart className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">[VISUAL PLACEHOLDER: Closing Infrastructure Grid]</span>
                        </div>
                    </div>
                </section>

                <footer className="text-center pb-20">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                        Schedule a Delivery Discovery Call
                    </Link>
                </footer>
            </article>
        </div>
    );
}
