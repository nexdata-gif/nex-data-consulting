import Link from 'next/link';
import { Search, Map, BarChart2, FileCheck } from 'lucide-react';

export default function Approach() {
    const steps = [
        {
            title: "Discovery as a Discipline",
            description: "Discovery is not a call—it's a process. We perform structured fact-finding to identify core operational constraints, risks, and objectives before recommending an engagement model.",
            icon: Search
        },
        {
            title: "Planning & Delivery Leadership",
            description: "We translate strategy into executable plans. We help you structure the work, define the roadmap, and provide the hands-on leadership needed to drive momentum and clear obstacles for your team.",
            icon: Map
        },
        {
            title: "Execution & Optimization",
            description: "We don't just advise; we execute. Whether it's running a program, modernizing a process, or building an analytics solution, we work alongside your teams to deliver high-quality outcomes while optimizing for efficiency.",
            icon: BarChart2
        },
        {
            title: "Enablement & Handoff",
            description: "Our goal is to leave you stronger than we found you. We prioritize documentation, knowledge transfer, and team upskilling so that the value we create is sustainable long after our engagement ends.",
            icon: FileCheck
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-slate-900 py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Approach</h1>
                <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto px-4">
                    Pragmatic. Execution-focused. We engage where clarity is needed most,
                    lead through complexity, and ensure lasting results through enablement.
                </p>
            </div>

            {/* Steps Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                                {/* Icon Marker */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-md z-10 hidden md:flex">
                                    <span className="text-white font-bold text-lg">{index + 1}</span>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-5/12 text-center md:text-left">
                                    <div className="flex flex-col items-center md:items-start">
                                        <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 border-4 border-blue-100 mb-4">
                                            <span className="text-white font-bold text-lg">{index + 1}</span>
                                        </div>
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg inline-block mb-4">
                                            <step.icon className="h-6 w-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer Side */}
                                <div className="w-full md:w-5/12 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Philosophy/Differentiator Section */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Why We Are Different</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                        We reject the &quot;land and expand&quot; model. Our focus is on delivering value quickly
                        and empowering your internal teams to take ownership. We believe that true success
                        is defined by what happens after we leave.
                    </p>
                    <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-500 transition-colors">
                        Discuss your project <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
