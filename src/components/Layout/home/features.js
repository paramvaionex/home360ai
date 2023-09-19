import {
  UserGroupIcon,
  CpuChipIcon,
  ChatBubbleBottomCenterTextIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Innovative Technology:',
    description:
      'We leverage the latest advancements in AI and machine learning to provide state-of-the-art solutions for your home.',
    icon: CpuChipIcon,
  },
  {
    name: 'User-Friendly Interface',
    description:
      `Our intuitive interfaces make it easy for anyone to harness the power of AI, whether you're tech-savvy or new to smart home technology.`,
    icon: UserGroupIcon,
  },
  {
    name: '24/7 Support',
    description:
      'AI Home is here for you day and night. Our dedicated support team is ready to assist you with any questions or issues.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Energy Efficiency',
    description:
      `AI Home's intelligent systems are dedicated to reducing energy consumption in your home, resulting in eco-friendly practices and cost savings.`,
    icon: BoltIcon,
  },
]


export function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-cyan-500  sm:text-4xl">Why Choose AI Home?</h2>

      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
  )
}
