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
            <section className="bg-slate-900 py-16 sm:py-24 text-center text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 sm:mb-6 leading-tight">
                        Insights & Engagements
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        A clear distinction between how we think and what we’ve done.
                        Explore our perspectives on delivery or view our real-world industry experience.
                    </p>
                </div>
            </section>

            {/* Primary Filter */}
            <section className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                    <div className="flex justify-center">
                        <div className="bg-gray-100 p-1 rounded-xl inline-flex w-full sm:w-auto max-w-sm">
                            <button
                                onClick={() => setActiveTab('engagements')}
                                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'engagements'
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                <Briefcase className="h-4 w-4" />
                                Engagements
                            </button>
                            <button
                                onClick={() => setActiveTab('insights')}
                                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'insights'
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
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 sm:mb-10">
                                <span className="w-fit px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[11px] font-black uppercase tracking-widest border border-blue-200">
                                    Thought Leadership
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Practical Perspectives</h2>
                            </div>

                            {/* Featured Insight */}
                            <article className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-2xl shadow-slate-100 group hover:shadow-blue-50 transition-all duration-300">
                                <div className="p-8 sm:p-12">
                                    <div className="flex items-center gap-3 text-[13px] font-bold text-gray-400 mb-8 uppercase tracking-wide">
                                        <span className="text-blue-600">Process Advisory</span>
                                        <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                                        <span>5 min read</span>
                                    </div>

                                    <h3 className="text-2xl sm:text-4xl font-black text-gray-900 mb-8 leading-[1.15]">
                                        Discovery Is Not a Call — It’s a Process
                                    </h3>

                                    <div className="prose prose-slate prose-lg max-w-none text-gray-600 mb-10 leading-relaxed">
                                        <p className="mb-4">
                                            Too often, &quot;discovery&quot; is treated as a single sales call—a quick chat to gauge budget and basic needs.
                                            But in complex delivery, this approach is the root cause of project failure.
                                        </p>
                                        <p>
                                            True discovery is structured fact-finding. It doesn&apos;t just ask &quot;what do you want?&quot;; it uncovers &quot;how do you operate?&quot;.
                                            Without this depth, engagements start on false premises, leading to scope creep, misalignment, and friction.
                                        </p>
                                    </div>

                                    <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-8 mb-10 border border-slate-100">
                                        <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                            <div className="h-[1px] w-6 bg-gray-200" />
                                            Engagement outcomes
                                        </h4>
                                        <p className="text-gray-700 font-bold mb-6">
                                            Effective discovery dictates the engagement model itself:
                                        </p>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-4">
                                                <div className="mt-1 h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                                </div>
                                                <span className="text-gray-700 text-[15px] leading-relaxed"><strong className="text-slate-900">Service Engagement:</strong> Hourly or advisory support for fluid requirements.</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="mt-1 h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                                </div>
                                                <span className="text-gray-700 text-[15px] leading-relaxed"><strong className="text-slate-900">Defined Product:</strong> Fixed-scope delivery for clear outcomes.</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <div className="mt-1 h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                                </div>
                                                <span className="text-gray-700 text-[15px] leading-relaxed"><strong className="text-slate-900">RFP / Requirements:</strong> Precise definition before execution.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex justify-end">
                                        <Link
                                            href="/insights-and-engagements/discovery-is-a-service"
                                            className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                                        >
                                            Read Full Article
                                            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
                        <div className="flex flex-row overflow-x-auto no-scrollbar gap-2 mb-10 pb-2 sm:pb-0 sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
                            {industries.map((industry) => (
                                <button
                                    key={industry.id}
                                    onClick={() => setActiveIndustry(industry.id as IndustryType)}
                                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[13px] font-bold transition-all border ${activeIndustry === industry.id
                                        ? 'bg-slate-900 text-white shadow-lg border-slate-900'
                                        : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-100'
                                        }`}
                                >
                                    {industry.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 gap-12 sm:gap-14">
                            {filteredEngagements.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-2xl shadow-slate-100 group hover:shadow-blue-50 transition-all duration-300"
                                >
                                    <div className="lg:flex">
                                        <div className="lg:w-1/3 bg-slate-50 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center">
                                            <div className="mb-6">
                                                <div className="p-3 bg-white rounded-2xl shadow-sm inline-block mb-6 group-hover:scale-110 transition-transform">
                                                    {item.industry === 'federal' && <Landmark className="h-8 w-8 text-blue-600" />}
                                                    {item.industry === 'real-estate' && <Building2 className="h-8 w-8 text-emerald-600" />}
                                                    {item.industry === 'construction' && <HardHat className="h-8 w-8 text-orange-600" />}
                                                    {item.industry === 'water' && <Droplets className="h-8 w-8 text-cyan-600" />}
                                                </div>

                                                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                                                <div className="text-[11px] font-extrabold text-blue-700 bg-blue-50/50 border border-blue-100 uppercase tracking-widest inline-block px-3 py-1.5 rounded-lg mb-6">
                                                    {item.role}
                                                </div>
                                            </div>
                                            <p className="text-gray-500 text-[15px] leading-relaxed italic">
                                                &quot;{item.context}&quot;
                                            </p>
                                        </div>
                                        <div className="lg:w-2/3 p-8 sm:p-10">
                                            <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                                                <div className="h-[1px] w-6 bg-gray-200" />
                                                Execution Depth
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                {item.details.map((detail, idx) => (
                                                    <div key={idx} className="flex items-start gap-4">
                                                        <div className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                                        <span className="text-gray-700 text-[14px] leading-relaxed font-medium">{detail}</span>
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
