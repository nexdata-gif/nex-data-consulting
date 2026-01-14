'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
    Lightbulb,
    Briefcase,
    Building2,
    Landmark,
    HardHat,
    Droplets,
    ArrowRight,
    Map,
    CheckCircle2
} from 'lucide-react';

export default function InsightsAndEngagements() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
            <InsightsAndEngagementsContent />
        </Suspense>
    );
}

function InsightsAndEngagementsContent() {
    type TabType = 'insights' | 'engagements';
    type IndustryType = 'all' | 'federal' | 'real-estate' | 'construction' | 'water';

    const searchParams = useSearchParams();
    const queryIndustry = searchParams.get('industry') as IndustryType | null;

    const [activeTab, setActiveTab] = useState<TabType>('engagements');
    const [activeIndustry, setActiveIndustry] = useState<IndustryType>('all');

    useEffect(() => {
        if (queryIndustry && ['all', 'federal', 'real-estate', 'construction', 'water'].includes(queryIndustry)) {
            setActiveIndustry(queryIndustry);
        }
    }, [queryIndustry]);

    const industries = [
        { id: 'all', label: 'All Industries' },
        { id: 'federal', label: 'Federal & Public Sector' },
        { id: 'real-estate', label: 'Real Estate & Development' },
        { id: 'construction', label: 'Construction' },
        { id: 'water', label: 'Water Damage & Restoration' }
    ];

    const engagements = [
        {
            industry: 'federal',
            title: 'Federal & Public Sector',
            role: 'Advisory & Delivery Support',
            context: 'Long-term advisory and delivery support across DoD and Treasury programs in highly regulated, multi-stakeholder environments.',
            details: [
                'Supported modernization initiatives (Agile delivery, data platforms, IT infrastructure)',
                'Served as Scrum Master and Agile Lead across multiple teams',
                'Designed and administered delivery platforms (Jira, Asana, ServiceNow, ClickUp), workflows, and reporting',
                'Bridged delivery leadership with data center and infrastructure operations to ensure systems were production-ready, compliant, and supportable',
                'Coordinated across engineering, analytics, and leadership groups',
                'Standardized delivery practices at scale',
                'Supported ITSM processes, change management, and compliance workflows'
            ]
        },
        {
            industry: 'real-estate',
            title: 'Real Estate & Development',
            role: 'Hybrid Advisor & Embedded Operator',
            context: 'Operating as a hybrid advisor and embedded operator supporting ownership directly in fast-moving development activities.',
            details: [
                'Directly supported ownership and CEO with execution visibility',
                'Implemented task management systems and defined operational workflows',
                'Improved coordination across internal finance, vendors, and development timelines',
                'Supported leadership with prioritization and execution enablement',
                'Identified work for internal handling vs. outsourcing',
                'Created artifacts to reduce reliance on informal communication'
            ]
        },
        {
            industry: 'construction',
            title: 'Construction',
            role: 'Business Process & Coordination Support',
            context: 'Supporting the operational interface between real estate ownership and construction firms acting as primes or general contractors.',
            details: [
                'Structured task tracking and coordination flows between owners and field teams',
                'Managed action items and documented dependencies',
                'Organized business processes rather than construction execution',
                'Created process diagrams and task frameworks',
                'Improved communication between leadership and vendors',
                'Reduced ambiguity and improved follow-through'
            ]
        },
        {
            industry: 'water',
            title: 'Water Damage & Restoration',
            role: 'Business Management Support',
            context: 'Early-stage operational support focused on business management rather than technical restoration work.',
            details: [
                'Assisted leadership with business process support and workflow organization',
                'Created visualization artifacts (mind maps, organizational views)',
                'Coordinated across external resources including marketing and vendors',
                'Brought clarity to day-to-day operations and task structures',
                'Focused on operational stability, explicitly avoiding technical field labor',
                'Helped move from reactive execution to structured operations'
            ]
        }
    ];

    const filteredEngagements = activeIndustry === 'all'
        ? engagements
        : engagements.filter(e => e.industry === activeIndustry);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <section className="bg-slate-900 py-20 text-center text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        Insights & Engagements
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        A clear distinction between how we think and what we’ve done.
                        Explore our perspectives on delivery or view our real-world industry experience.
                    </p>
                </div>
            </section>

            {/* Primary Filter */}
            <section className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-center">
                        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                            <button
                                onClick={() => setActiveTab('engagements')}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${activeTab === 'engagements'
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                <Briefcase className="h-4 w-4" />
                                Engagements
                            </button>
                            <button
                                onClick={() => setActiveTab('insights')}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${activeTab === 'insights'
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                <Lightbulb className="h-4 w-4" />
                                Insights
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* INSIGHTS VIEW */}
                {activeTab === 'insights' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Thought Leadership
                                </span>
                                <h2 className="text-2xl font-bold text-gray-900">Practical Perspectives</h2>
                            </div>

                            {/* Featured Insight */}
                            <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                                        <span>Process Advisory</span>
                                        <span>•</span>
                                        <span>5 min read</span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                        Discovery Is Not a Call — It’s a Process
                                    </h3>

                                    <div className="prose prose-lg text-gray-600 mb-8">
                                        <p>
                                            Too often, "discovery" is treated as a single sales call—a quick chat to gauge budget and basic needs.
                                            But in complex delivery, this approach is the root cause of project failure.
                                        </p>
                                        <p>
                                            True discovery is structured fact-finding. It doesn't just ask "what do you want?"; it uncovers "how do you operate?".
                                            Without this depth, engagements start on false premises, leading to scope creep, misalignment, and friction.
                                        </p>
                                    </div>

                                    <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <Map className="h-5 w-5 text-blue-600" />
                                            The Outcome of Proper Discovery
                                        </h4>
                                        <p className="text-gray-600 mb-4">
                                            Effective discovery dictates the engagement model itself. It tells us whether we should build:
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700"><strong>A Service Engagement:</strong> Hourly or advisory support when requirements are fluid.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700"><strong>A Defined Product:</strong> Fixed-scope delivery when outcomes are clear and predictable.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700"><strong>A RFP / Requirements Doc:</strong> When the path forward needs definition before execution begins.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex justify-end">
                                        <Link
                                            href="/insights-and-engagements/discovery-is-a-service"
                                            className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 transition-colors"
                                        >
                                            Read Full Article <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                )}

                {/* ENGAGEMENTS VIEW */}
                {activeTab === 'engagements' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Secondary Filter - Industries */}
                        <div className="flex flex-wrap gap-2 mb-10 justify-center">
                            {industries.map((industry) => (
                                <button
                                    key={industry.id}
                                    onClick={() => setActiveIndustry(industry.id as IndustryType)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeIndustry === industry.id
                                        ? 'bg-slate-800 text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    {industry.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            {filteredEngagements.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="md:flex">
                                        <div className="md:w-1/3 bg-slate-50 p-8 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center">
                                            <div className="mb-4">
                                                {item.industry === 'federal' && <Landmark className="h-10 w-10 text-blue-600 mb-4" />}
                                                {item.industry === 'real-estate' && <Building2 className="h-10 w-10 text-emerald-600 mb-4" />}
                                                {item.industry === 'construction' && <HardHat className="h-10 w-10 text-orange-600 mb-4" />}
                                                {item.industry === 'water' && <Droplets className="h-10 w-10 text-cyan-600 mb-4" />}

                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                                <div className="text-sm font-semibold text-blue-700 bg-blue-50 inline-block px-3 py-1 rounded-md mb-4">
                                                    {item.role}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.context}
                                            </p>
                                        </div>
                                        <div className="md:w-2/3 p-8">
                                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                                                Operational Context & Execution
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                                {item.details.map((detail, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                                        <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* CTA */}
            <section className="bg-white border-t border-gray-200 py-16 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a specific challenge?</h2>
                    <p className="text-gray-600 mb-8">
                        Whether you need a quick advisory perspective or deep operational support, let's discuss the right approach.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-500 transition-colors"
                    >
                        Start a Conversation <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
