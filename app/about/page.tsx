export default function About() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About NexData</h1>
                    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are a delivery-focused consulting firm helping organizations execute complex initiatives with confidence.
                        We combine experienced project leadership with modern analytics and AI capabilities to turn strategy into tangible results.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                Founded on the belief that consulting should be about outcomes, not hours, NexData brings a
                                pragmatic, disciplined approach to every engagement.
                            </p>
                            <p className="mb-4">
                                We don't bring armies of junior staff to learn on your dime. Instead, we provide senior,
                                hands-on leadership needed to stabilize delivery, optimize processes, and drive real progress.
                            </p>
                            <p>
                                Whether you need to recover a failing program, modernize your infrastructure, or leverage
                                data for better decision-making, we partner with you to get it done.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Differentiators</h3>
                        <ul className="space-y-4">
                            {[
                                "Senior, hands-on delivery leadership",
                                "Focus on execution, not slideware",
                                "Practical application of analytics and AI",
                                "Clear outcomes and clean handoff"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                                    <span className="text-lg text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
