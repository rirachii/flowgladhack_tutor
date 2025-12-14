import { Laptop, Mic, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Pick a Topic',
    description: 'Select a subject you are passionate about—movies, sports, tech, or travel.',
    icon: Laptop,
  },
  {
    id: 2,
    title: 'Start Talking',
    description: 'Have a natural conversation with our AI tutor. No judgment, just practice.',
    icon: Mic,
  },
  {
    id: 3,
    title: 'Get Better',
    description: 'Review your personalized feedback and see your improvement over time.',
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            Simple steps to fluency. No complicated setup required.
          </p>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-xl mb-6">
                  {step.id}
                </div>
                <div className="mb-4 text-blue-600">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
