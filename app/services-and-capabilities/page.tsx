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
            title: "Data Analytics & Decision Enablement",
            subtitle: "Turning operational data into trusted decision support",
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
            title: "Technical Enablement & Infrastructure Delivery Support",
            subtitle: "Helping people, workflows, and systems execute together",
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
            id: "ai-automation",
            title: "AI & Automation Enablement",
            subtitle: "Practical automation that reduces overhead and scales execution",
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
            <section className="bg-slate-900 py-16 sm:py-20 text-center text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Services & Capabilities</h1>
                    <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                        NexData Consulting provides advisory and delivery support across modernization, operations,
                        analytics, infrastructure, and enablement initiatives. We work hands-on with leadership and
                        delivery teams to turn strategy into execution with clarity, discipline, and measurable outcomes.
                    </p>
                </div>
            </section>

            {/* Categories & Anchor Links */}
            <section className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40 shadow-sm backdrop-blur-md bg-opacity-95 overflow-x-auto no-scrollbar">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 min-w-max md:min-w-0">
                    <div className="flex flex-row md:flex-row justify-between items-center gap-8 md:gap-6">
                        <div className="flex items-center gap-4">
                            <span className="hidden sm:inline text-xs font-semibold text-gray-400 uppercase tracking-wider">Core</span>
                            <div className="flex gap-2">
                                {workStreams.slice(0, 3).map((stream) => (
                                    <Link
                                        key={stream.id}
                                        href={`#${stream.id}`}
                                        className="whitespace-nowrap text-[13px] font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-full transition-colors border border-blue-100"
                                    >
                                        {stream.title.split('&')[0].trim()}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="hidden sm:inline text-xs font-semibold text-gray-400 uppercase tracking-wider">Advisory</span>
                            <div className="flex gap-2">
                                {workStreams.slice(3).map((stream) => (
                                    <Link
                                        key={stream.id}
                                        href={`#${stream.id}`}
                                        className="whitespace-nowrap text-[13px] font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3.5 py-2 rounded-full transition-colors border border-gray-200"
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20 sm:space-y-32">
                {workStreams.map((stream, index) => (
                    <section key={stream.id} id={stream.id} className="scroll-mt-32 sm:scroll-mt-48">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-10 sm:mb-12 text-center sm:text-left">
                            <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-xl transform sm:-rotate-2">
                                <stream.icon className="h-8 w-8 sm:h-10 sm:w-10" />
                            </div>
                            <div className="pt-2">
                                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                    {stream.title}
                                </h2>
                                {stream.subtitle && (
                                    <span className="text-lg text-gray-400 font-medium block mt-1">{stream.subtitle}</span>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 backdrop-blur-sm bg-white/30 rounded-3xl p-2 sm:p-0">
                            {/* Focus & Problems */}
                            <div className="lg:col-span-5 space-y-8 sm:space-y-10">
                                <div className="bg-blue-600 rounded-3xl p-8 sm:p-10 text-white shadow-2xl shadow-blue-200">
                                    <h3 className="font-bold mb-4 flex items-center gap-3 text-lg">
                                        <div className="p-1.5 bg-white/20 rounded-lg">
                                            <Workflow className="h-5 w-5" />
                                        </div>
                                        Service Focus
                                    </h3>
                                    <p className="text-blue-50 leading-relaxed text-lg italic">
                                        &quot;{stream.focus}&quot;
                                    </p>
                                </div>

                                <div className="px-2 sm:px-4">
                                    <h3 className="text-gray-900 font-bold mb-6 flex items-center gap-3 text-lg">
                                        <div className="p-1.5 bg-red-50 text-red-500 rounded-lg">
                                            <AlertCircle className="h-5 w-5" />
                                        </div>
                                        Critical Challenges
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {stream.problems.map((problem, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600 bg-gray-50/50 p-4 rounded-2xl border border-gray-100 hover:border-red-100 transition-colors">
                                                <span className="mt-1.5 h-2 w-2 rounded-full bg-red-400 flex-shrink-0" />
                                                <span className="text-[15px] leading-relaxed font-medium">{problem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Core Capabilities */}
                            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
                                <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-xl shadow-slate-100 h-full">
                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12 sm:gap-16">
                                        <div>
                                            <h3 className="text-gray-900 font-bold mb-8 flex items-center gap-3 text-xl border-b border-gray-50 pb-4">
                                                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                                                    <Zap className="h-6 w-6" />
                                                </div>
                                                Core Capabilities
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                                                {stream.capabilities.map((cap, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-700 group">
                                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                        <span className="text-[15px] leading-relaxed">{cap}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-8">
                                            <h3 className="text-gray-900 font-bold mb-6 flex items-center gap-3 text-lg">
                                                <div className="p-1.5 bg-gray-200 text-gray-600 rounded-lg">
                                                    <ArrowDown className="h-5 w-5" />
                                                </div>
                                                Engagement Outputs
                                            </h3>
                                            <ul className="grid grid-cols-1 gap-3 mb-8">
                                                {stream.outputs.map((output, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                                        <span className="text-[15px] font-medium">{output}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {['data-analytics', 'process-optimization', 'agile-delivery', 'infrastructure-ops', 'tech-enablement', 'ai-automation'].includes(stream.id) && (
                                                <Link
                                                    href={`/services-and-capabilities/${stream.id === 'infrastructure-ops' ? 'infrastructure-delivery' : stream.id === 'tech-enablement' ? 'technical-enablement' : stream.id}`}
                                                    className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-blue-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all group shadow-sm"
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
                            <div className="mt-20 sm:mt-32 border-t border-gray-100 opacity-50" />
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
