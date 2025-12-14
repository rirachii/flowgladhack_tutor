import { MessageSquare, Brain, BarChart3, Globe } from 'lucide-react';

const features = [
  {
    name: 'Topic-Based Learning',
    description: 'Choose from hundreds of topics or create your own. Learn vocabulary that matters to you.',
    icon: MessageSquare,
  },
  {
    name: 'Smart AI Tutor',
    description: 'Our AI adapts to your proficiency level and corrects your mistakes in real-time.',
    icon: Brain,
  },
  {
    name: 'Instant Feedback',
    description: 'Get detailed feedback on your grammar, pronunciation, and vocabulary usage after every session.',
    icon: BarChart3,
  },
  {
    name: 'Global Context',
    description: 'Learn cultural nuances and idioms that textbooks often miss.',
    icon: Globe,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why learn with TutorTalk?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            We combine advanced AI with proven language learning techniques to help you speak fluently faster.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-blue-600 mb-6">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.name}</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
