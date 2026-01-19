export default function About() {
    return (
        <div className="bg-white font-sans">
            {/* Hero */}
            <div className="bg-slate-900 py-16 sm:py-24 text-center text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-black tracking-tight sm:text-5xl mb-6">About NexData</h1>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 font-medium">
                        NexData is a systems-first consulting firm built by practitioners. We provide the operational clarity
                        and execution enablement needed to navigate complex, multi-stakeholder delivery environments.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div>
                        <div className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[11px] font-black uppercase tracking-widest border border-blue-200 mb-6">
                            Expertise & Vision
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 sm:mb-10 leading-tight">Who We Are</h2>
                        <div className="prose prose-slate prose-lg max-w-none text-gray-600 leading-relaxed font-medium">
                            <p className="mb-6">
                                Founded on the belief that consulting should be about outcomes, not hours, NexData brings a
                                pragmatic, disciplined approach to every engagement.
                            </p>
                            <p className="mb-6">
                                We don&apos;t bring armies of junior staff to learn on your dime. Instead, we provide senior,
                                hands-on leadership needed to stabilize delivery, optimize processes, and drive real progress.
                            </p>
                            <p>
                                Whether you need to recover a failing program, modernize your infrastructure, or leverage
                                data for better decision-making, we partner with you to get it done.
                            </p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-2xl shadow-slate-100/50">
                        <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-8 sm:mb-10 flex items-center gap-3">
                            <div className="h-6 w-1.5 bg-blue-600 rounded-full" />
                            Core Differentiators
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Senior, hands-on delivery leadership",
                                "Focus on execution, not slideware",
                                "Practical application of analytics and AI",
                                "Clear outcomes and clean handoff"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4 sm:gap-5 group">
                                    <div className="mt-1 h-6 w-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600 group-hover:bg-white transition-colors" />
                                    </div>
                                    <span className="text-[17px] sm:text-lg text-gray-700 font-bold leading-tight pt-0.5">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
