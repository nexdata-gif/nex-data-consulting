import Link from 'next/link';
import Image from 'next/image';
import {
  Workflow,
  Zap,
  BarChart3,
  Server,
  Bot,
  Terminal
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-12 pb-16 sm:pt-24 sm:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-slate-100 shadow-xl bg-[#E7E7E5] transition-transform hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="NexData Logo"
                  fill
                  className="object-cover scale-150"
                  priority
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6 sm:mb-8 leading-[1.1]">
              Turning Strategy Into <span className="text-blue-600">Execution</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl leading-relaxed text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              We provide systems-first consulting and embedded delivery leadership to help organizations
              achieve operational clarity and execution discipline in complex environments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-xl bg-blue-600 px-8 py-4 text-base sm:text-sm font-semibold text-white shadow-lg hover:bg-blue-500 hover:shadow-blue-200 transition-all text-center"
              >
                Start a Conversation
              </Link>
              <Link href="/contact" className="text-base sm:text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors py-2">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Do</h2>
            <p className="mt-4 text-lg text-gray-600">
              Focused support for critical business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Process Optimization",
                description: "Eliminating friction and bottlenecks through structured workflow redesign and clear operational ownership.",
                icon: Workflow
              },
              {
                title: "Embedded Delivery Leadership",
                description: "Hands-on coordination and execution discipline to stabilize complex cross-functional initiatives.",
                icon: Zap
              },
              {
                title: "Operational Visibility & Data",
                description: "Turning raw delivery data into actionable insight through standardized KPIs and automated reporting systems.",
                icon: BarChart3
              },
              {
                title: "Infrastructure & IT Ops Support",
                description: "Managing system deployments, operational readiness, and IT service management with technical precision.",
                icon: Server
              },
              {
                title: "Automation & AI Advisory",
                description: "Identifying and prototyping practical, non-production automation to streamline repetitive operational tasks.",
                icon: Bot
              },
              {
                title: "Execution Enablement",
                description: "Equipping teams with the tools, documentation, and processes needed to sustain results and reduce service reliance.",
                icon: Terminal
              }
            ].map((service, index) => (
              <div key={index} className="flex flex-col p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              href="/services-and-capabilities"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-500 transition-colors"
            >
              Services & Capabilities <span className="ml-2">→</span>
            </Link>
            <Link
              href="/insights-and-engagements"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-500 transition-colors"
            >
              Insights & Engagements <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                To build a lean, trusted consulting firm that helps organizations operate more effectively by
                modernizing systems, empowering teams, and delivering measurable impact without
                unnecessary complexity or overhead.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                To help organizations deliver complex initiatives with clarity, discipline, and integrity.
                Turning strategy into execution through pragmatic leadership, modern delivery practices,
                and data driven decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How We Work</h2>
            <p className="mt-4 text-lg sm:text-xl text-slate-400">
              A pragmatic approach to sustainable results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Assess & Align",
                description: "Rapidly understand objectives, constraints, and risks to establish clear priorities and a realistic delivery plan."
              },
              {
                step: "02",
                title: "Lead & Execute",
                description: "Provide hands-on leadership to stabilize delivery, improve coordination, and drive progress across teams."
              },
              {
                step: "03",
                title: "Enable & Transition",
                description: "Transfer knowledge, document processes, and ensure teams are equipped to sustain results after engagement ends."
              }
            ].map((phase, index) => (
              <div key={index} className="relative text-center sm:text-left">
                <div className="text-4xl sm:text-5xl font-bold text-slate-700/50 mb-4">{phase.step}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 relative z-10">{phase.title}</h3>
                <p className="text-slate-400 leading-relaxed relative z-10 text-base">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Move Forward?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto px-4 sm:px-0">
            Interested in working together? Let’s start with a conversation and discuss how we can help
            you deliver results.
          </p>
          <div className="px-4 sm:px-0">
            <Link
              href="/contact"
              className="block sm:inline-block w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-xl hover:bg-blue-50 transition-all"
            >
              Contact NexData Consulting
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
