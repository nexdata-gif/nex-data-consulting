import Link from 'next/link';
import {
    Zap,
    Workflow,
    BarChart3,
    Server,
    Terminal,
    Bot,
    ArrowDown,
    ChevronRight,
    CheckCircle2,
    AlertCircle,
    Landmark,
    Building2,
    HardHat,
    Droplets
} from 'lucide-react';

export default function ServicesAndCapabilities() {
    const workStreams = [
        {
            id: "agile-delivery",
            title: "Agile Delivery & Leadership Enablement",
            icon: Zap,
            focus: "Improve delivery performance and execution discipline in Agile and hybrid environments through hands-on leadership and coaching.",
            problems: [
                "Unclear delivery ownership and weak execution cadence",
                "Poor prioritization, scope churn, missed commitments",
                "Teams “doing Agile” without measurable outcomes",
                "Leaders and stakeholders unclear on Agile roles and decision-making"
            ],
            capabilities: [
                "Agile project / program delivery leadership (Scrum / hybrid)",
                "Sprint planning, backlog refinement, and prioritization support",
                "Roadmapping, milestones, releases, and dependency management",
                "Risk, issue, and cross-team coordination",
                "Agile coaching for delivery leads, managers, and stakeholders",
                "Workshops on Agile mindset, roles, and execution discipline",
                "Delivery governance, operating rhythms, and reporting practices"
            ],
            outputs: [
                "Delivery roadmap and execution plan",
                "Improved backlog structure and prioritization approach",
                "Cadence and ceremony operating model",
                "Delivery status reporting and visibility framework",
                "Team/leadership enablement sessions"
            ]
        },
        {
            id: "process-optimization",
            title: "Business Process & Operational Optimization",
            icon: Workflow,
            focus: "Redesign workflows to reduce friction, improve accountability, and create scalable operating models.",
            problems: [
                "Inefficient workflows and recurring bottlenecks",
                "Poor cross-team handoffs and unclear ownership",
                "Lack of operational consistency across teams",
                "Process gaps causing delays and quality issues"
            ],
            capabilities: [
                "Process discovery, interviews, and current-state mapping",
                "Workflow redesign (As-Is → To-Be)",
                "KPI definition and performance measurement",
                "SOPs, playbooks, and documentation",
                "Tool-enabled workflow optimization (Jira, ServiceNow, Asana)",
                "Roles, handoffs, and accountability (basic RACI support)"
            ],
            outputs: [
                "Process maps and workflow diagrams",
                "SOPs / playbooks / templates",
                "KPI measurement framework",
                "Optimized workflow recommendations"
            ]
        },
        {
            id: "data-analytics",
            title: "Data Analytics & Reporting Enablement",
            icon: BarChart3,
            focus: "Turn operational and delivery data into actionable insight through dashboards, KPIs, and automated reporting.",
            problems: [
                "Manual reporting and inconsistent metrics",
                "Lack of leadership visibility",
                "No shared KPI definitions (“everyone measures differently”)",
                "Decision-making based on anecdotes instead of data"
            ],
            capabilities: [
                "KPI and metrics strategy",
                "Executive and operational dashboards (Power BI, Excel)",
                "Data analysis and validation (SQL-based)",
                "Reporting automation and cadence design",
                "PMO and delivery analytics (throughput, predictability, trends)"
            ],
            outputs: [
                "KPI dictionary / definitions",
                "Dashboards and reporting packs",
                "Automated reporting workflows",
                "Monthly/biweekly insights summaries"
            ]
        },
        {
            id: "infrastructure-ops",
            title: "Infrastructure & IT Operations Support",
            subtitle: "(Delivery Management)",
            icon: Server,
            focus: "Coordinate infrastructure modernization and IT operations execution across vendors and technical teams.",
            problems: [
                "Deployment delays and weak coordination across teams/vendors",
                "Incomplete documentation and poor handoffs",
                "Risky transitions to live environments",
                "Asset visibility gaps and inconsistent ITSM execution"
            ],
            capabilities: [
                "Hardware ordering, delivery, staging, and scheduling coordination",
                "Data center coordination (access, mounting, cabling planning)",
                "Cabling and connectivity coordination with network technicians",
                "Asset management and inventory tracking",
                "Deployment task planning (Network, Security, OS, Agents, Migration)",
                "ITSM practices for live environments (incident/change coordination)"
            ],
            outputs: [
                "Deployment plan, task map, and schedule",
                "Dependency tracking and execution governance",
                "Asset inventory and documentation updates",
                "Operational readiness and handoff materials",
                "Improved ITSM workflow discipline"
            ]
        },
        {
            id: "tech-enablement",
            title: "Technical Enablement & Software Support",
            icon: Terminal,
            focus: "Help teams implement, configure, and adopt tools effectively—improving productivity, documentation, and operational consistency.",
            problems: [
                "Tool sprawl and inconsistent usage across teams",
                "Low adoption of Jira/ServiceNow/Confluence processes",
                "Weak documentation and slow onboarding",
                "Manual workflows that could be streamlined"
            ],
            capabilities: [
                "Jira administration support (workflows, boards, dashboards, hygiene)",
                "ServiceNow workflow enablement (ticket quality, process alignment)",
                "Confluence / knowledge base structuring and documentation standards",
                "Implementation support for operating rhythms",
                "Template creation for SOPs, status reports, and delivery artifacts",
                "Practical enablement and training for end users and leads"
            ],
            outputs: [
                "Configured workflows/boards and reporting views",
                "Standard templates and documentation structures",
                "Tool adoption guidance and enablement sessions",
                "Improved onboarding and knowledge transfer system"
            ]
        },
        {
            id: "ai-advisory",
            title: "AI & Automation Advisory",
            subtitle: "(Non-Production)",
            icon: Bot,
            focus: "Identify and prototype practical automation opportunities and AI-enabled workflows while maintaining responsible governance.",
            problems: [
                "Manual repetitive work consuming key staff time",
                "Unclear ROI on automation/AI initiatives",
                "Weak governance and inconsistent usage of automation tools",
                "Desire for faster reporting and documentation workflows"
            ],
            capabilities: [
                "Automation opportunity assessment and prioritization",
                "AI-assisted workflow advisory (decision support, summarization, reporting)",
                "Lightweight prototyping (non-production)",
                "Documentation and reporting automation patterns",
                "Guidance on responsible adoption and governance considerations"
            ],
            outputs: [
                "Automation opportunity map and roadmap",
                "Prototype workflows / proof-of-concepts (non-production)",
                "Recommendations for implementation approach and controls"
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="bg-slate-900 py-20 text-center text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Services & Capabilities</h1>
                    <p className="mt-6 text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        NexData Consulting provides advisory and delivery support across modernization, operations,
                        analytics, infrastructure, and enablement initiatives. We work hands-on with leadership and
                        delivery teams to turn strategy into execution with clarity, discipline, and measurable outcomes.
                    </p>
                </div>
            </section>

            {/* Categories & Anchor Links */}
            <section className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40 shadow-sm backdrop-blur-md bg-opacity-95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Core Services</span>
                            <div className="flex flex-wrap gap-2">
                                {workStreams.slice(0, 3).map((stream) => (
                                    <Link
                                        key={stream.id}
                                        href={`#${stream.id}`}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors"
                                    >
                                        {stream.title.split('&')[0]}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="md:text-right">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Advisory Roles</span>
                            <div className="flex flex-wrap gap-2 md:justify-end">
                                {workStreams.slice(3).map((stream) => (
                                    <Link
                                        key={stream.id}
                                        href={`#${stream.id}`}
                                        className="text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
                                    >
                                        {stream.title.split(' ')[0]} {stream.title.includes('AI') ? '& Automation' : ''}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Streams */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                {workStreams.map((stream, index) => (
                    <section key={stream.id} id={stream.id} className="scroll-mt-48">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md">
                                <stream.icon className="h-8 w-8" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    {stream.title}
                                </h2>
                                {stream.subtitle && (
                                    <span className="text-lg text-gray-500 font-medium">{stream.subtitle}</span>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Focus & Problems */}
                            <div className="lg:col-span-1 space-y-8">
                                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                    <h3 className="text-blue-900 font-semibold mb-3 flex items-center gap-2">
                                        <Workflow className="h-5 w-5" /> Service Focus
                                    </h3>
                                    <p className="text-blue-800 leading-relaxed">
                                        {stream.focus}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-red-500" /> Typical Client Problems
                                    </h3>
                                    <ul className="space-y-3">
                                        {stream.problems.map((problem, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                                <span className="text-sm">{problem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Core Capabilities */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-gray-900 font-bold mb-6 flex items-center gap-2 text-lg border-b border-gray-100 pb-2">
                                                <Zap className="h-5 w-5 text-blue-600" /> Core Capabilities
                                            </h3>
                                            <ul className="space-y-3">
                                                {stream.capabilities.map((cap, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                        <span>{cap}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-gray-900 font-bold mb-6 flex items-center gap-2 text-lg border-b border-gray-100 pb-2">
                                                <ArrowDown className="h-5 w-5 text-gray-500" /> Engagement Outputs
                                            </h3>
                                            <ul className="space-y-3 mb-8">
                                                {stream.outputs.map((output, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                                        <span>{output}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {stream.id === 'agile-delivery' && (
                                                <Link
                                                    href="/services-and-capabilities/agile-delivery"
                                                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group"
                                                >
                                                    View Delivery Model <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            )}

                                            {stream.id === 'infrastructure-ops' && (
                                                <Link
                                                    href="/services-and-capabilities/infrastructure-delivery"
                                                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group"
                                                >
                                                    View Delivery Model <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {index < workStreams.length - 1 && (
                            <div className="mt-24 border-t border-gray-100" />
                        )}
                    </section>
                ))}
            </div>

            {/* Industries Supported Section */}
            <section className="bg-gray-50 py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                            Industries Supported
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Our expertise is built through deep operational involvement across diverse sectors,
                            solving complex delivery and coordination challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                id: 'federal',
                                title: 'Federal & Public Sector',
                                description: 'Modernizing delivery practices, Agile adoption, and IT infrastructure modernization in highly regulated environments.',
                                icon: Landmark,
                                color: 'text-blue-600',
                                bgColor: 'bg-blue-50'
                            },
                            {
                                id: 'real-estate',
                                title: 'Real Estate & Development',
                                description: 'Bridging the gap between ownership and execution through structured workflows and embedded operational support.',
                                icon: Building2,
                                color: 'text-emerald-600',
                                bgColor: 'bg-emerald-50'
                            },
                            {
                                id: 'construction',
                                title: 'Construction',
                                description: 'Improving coordination between ownership, primes, and vendors to ensure operational clarity and execution discipline.',
                                icon: HardHat,
                                color: 'text-orange-600',
                                bgColor: 'bg-orange-50'
                            },
                            {
                                id: 'water',
                                title: 'Water Damage & Restoration',
                                description: 'Providing business management support and foundational operational structures for growing restoration businesses.',
                                icon: Droplets,
                                color: 'text-cyan-600',
                                bgColor: 'bg-cyan-50'
                            }
                        ].map((industry) => (
                            <Link
                                key={industry.id}
                                href={`/insights-and-engagements?industry=${industry.id}`}
                                className="group flex flex-col p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <div className={`h-14 w-14 ${industry.bgColor} ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <industry.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                    {industry.description}
                                </p>
                                <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                                    View Engagements <ChevronRight className="h-4 w-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-900 py-16 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-6">Need more details?</h2>
                    <p className="text-slate-300 mb-8">
                        Download our detailed capability statement or schedule a call to discuss your specific needs.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-all">
                        Contact Us <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
