import Link from 'next/link';
import {
  Workflow,
  Zap,
  BarChart3,
  Server,
  Bot,
  Terminal,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
              Turning Strategy Into <span className="text-blue-600">Execution</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 mb-10 max-w-2xl mx-auto">
              We help organizations deliver complex initiatives with clarity, discipline, and measurable
              results through pragmatic leadership, modern delivery practices, and data-driven decision making.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
              >
                Start a Conversation
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To build a lean, trusted consulting firm that helps organizations operate more effectively by
                modernizing systems, empowering teams, and delivering measurable impact without
                unnecessary complexity or overhead.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To help organizations deliver complex initiatives with clarity, discipline, and integrity —
                turning strategy into execution through pragmatic leadership, modern delivery practices,
                and data-driven decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
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
                description: "Redesigning workflows, eliminating bottlenecks, and creating efficient, scalable processes that improve operational performance.",
                icon: Workflow
              },
              {
                title: "Agile Delivery & Project Leadership",
                description: "Driving predictable delivery through structured Agile practices, sprint planning, roadmapping, and cross-functional team coordination.",
                icon: Zap
              },
              {
                title: "Data Analytics & Reporting",
                description: "Designing KPIs, dashboards, and automated reporting systems that give leaders clarity, transparency, and actionable insights.",
                icon: BarChart3
              },
              {
                title: "Infrastructure & IT Operations Support",
                description: "Supporting system deployments, triage workflows, RHEL environments, STIG validation, hardware lifecycle, and operational readiness.",
                icon: Server
              },
              {
                title: "AI & Automation Advisory",
                description: "Helping teams identify practical automation opportunities and prototyping lightweight AI-powered workflows or agents.",
                icon: Bot
              },
              {
                title: "Technical Enablement & Software Support",
                description: "Providing guidance on system design, integrations, low-code tools, and targeted development support to accelerate delivery.",
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
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How We Work</h2>
            <p className="mt-4 text-xl text-slate-400">
              A pragmatic approach to sustainable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-slate-800 mb-4 opacity-50">{phase.step}</div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{phase.title}</h3>
                <p className="text-slate-300 leading-relaxed relative z-10">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Move Forward?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Interested in working together? Let’s start with a conversation and discuss how we can help
            you deliver results.
          </p>
          <Link
            href="/contact"
            className="rounded-md bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
          >
            Contact NexData Consulting
          </Link>
        </div>
      </section>
    </div>
  );
}
