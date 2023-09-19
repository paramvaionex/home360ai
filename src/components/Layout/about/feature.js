import { EyeIcon, UsersIcon, ArrowUpOnSquareIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Our Vision',
    description:
      'At AI Home, our vision is to create homes that are not just smart but truly intelligent. We believe that artificial intelligence has the power to transform the way we live, making our homes more convenient, secure, and personalized. O',
    href: '#',
    icon: EyeIcon,
  },
  {
    name: 'Who We Are',
    description:
      `AI Home is a team of passionate individuals dedicated to pushing the boundaries of what's possible in the realm of smart homes. With backgrounds in AI, machine learning, and home automation, our experts are at the forefront of this exciting industry. `,
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Our Approach',
    description:'We are driven by innovation and continuously explore emerging AI technologies to stay ahead of the curve. Our solutions are designed to adapt and evolve alongside the ever-changing landscape of AI.',
    href: '#',
    icon: ArrowUpOnSquareIcon,
  },
  {
    name: 'Our Approach',
    description:'We are driven by innovation and continuously explore emerging AI technologies to stay ahead of the curve. Our solutions are designed to adapt and evolve alongside the ever-changing landscape of AI.',
    href: '#',
    icon: ArrowUpOnSquareIcon,
  },
  {
    name: 'Who We Are',
    description:
      `AI Home is a team of passionate individuals dedicated to pushing the boundaries of what's possible in the realm of smart homes. With backgrounds in AI, machine learning, and home automation, our experts are at the forefront of this exciting industry. `,
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Our Vision',
    description:
      'At AI Home, our vision is to create homes that are not just smart but truly intelligent. We believe that artificial intelligence has the power to transform the way we live, making our homes more convenient, secure, and personalized. O',
    href: '#',
    icon: EyeIcon,
  },
  
]

export function AboutFeature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lorem Ispum 
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-cyan-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-cyan-500">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}





