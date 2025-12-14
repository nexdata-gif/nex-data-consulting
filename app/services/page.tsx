import Link from 'next/link';
import {
    Workflow,
    Zap,
    BarChart3,
    Server,
    Bot,
    Terminal,
    Check
} from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: "Business Process Optimization",
            description: "Redesigning workflows, eliminating bottlenecks, and creating efficient, scalable processes that improve operational performance.",
            icon: Workflow,
            outcomes: [
                "Reduced operational friction",
                "Streamlined cross-team handoffs",
                "Scalable workflow architecture"
            ]
        },
        {
            title: "Agile Delivery & Project Leadership",
            description: "Driving predictable delivery through structured Agile practices, sprint planning, roadmapping, and cross-functional team coordination.",
            icon: Zap,
            outcomes: [
                "Improved delivery predictability",
                "Clearer stakeholder visibility",
                "Faster time-to-market"
            ]
        },
        {
            title: "Data Analytics & Reporting",
            description: "Designing KPIs, dashboards, and automated reporting systems that give leaders clarity, transparency, and actionable insights.",
            icon: BarChart3,
            outcomes: [
                "Faster decision-making",
                "Increased visibility for leadership",
                "Real-time performance tracking"
            ]
        },
        {
            title: "Infrastructure & IT Operations Support",
            description: "Supporting system deployments, triage workflows, RHEL environments, STIG validation, hardware lifecycle, and operational readiness across federal and private sectors.",
            icon: Server,
            outcomes: [
                "Enhanced system stability",
                "Compliance with security standards",
                "Optimized resource utilization"
            ]
        },
        {
            title: "AI & Automation Advisory",
            description: "Helping teams identify practical automation opportunities and prototyping lightweight AI-powered workflows or agents that reduce manual effort and improve efficiency.",
            icon: Bot,
            outcomes: [
                "Reduced manual effort",
                "Prototype-driven innovation",
                "Practical AI implementation"
            ]
        },
        {
            title: "Technical Enablement & Software Support",
            description: "Providing guidance on system design, integrations, low-code tools, and targeted development support to accelerate delivery and improve technical execution.",
            icon: Terminal,
            outcomes: [
                "Sustainable team enablement",
                "Modernized tech stack",
                "Reduced technical debt"
            ]
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 sm:py-24 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Services</h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        NexData Consulting provides focused, hands-on support across delivery leadership, process
                        optimization, analytics, infrastructure, and AI enablement. Our services are designed to
                        address real operational challenges and produce measurable outcomes.
                    </p>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                            </div>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mt-auto">
                                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Outcomes</h3>
                                <ul className="space-y-3">
                                    {service.outcomes.map((outcome, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Need a custom solution?</h2>
                        <p className="text-blue-100 text-lg">We adapt our engagement model to your specific needs.</p>
                    </div>
                    <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
}
