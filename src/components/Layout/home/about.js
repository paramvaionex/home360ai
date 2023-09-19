const data = [
  {
    title: 'Smart Home Automation',
    desc: 'Imagine a home that anticipates your needs. With AI Home, your lights, thermostat, and appliances seamlessly adapt to your preferences. Create customized routines and control your entire home with a single touch or voice command.',
  },
  {
    title: 'Enhanced Security',
    desc: 'Protect what matters most with our advanced security systems. AI-powered cameras, motion detectors, and facial recognition technology keep your home and loved ones safe around the clock. Receive instant alerts and take control from anywhere.',
  },
  {
    title: 'Personalized Entertainment',
    desc: 'Say goodbye to endless scrolling. Our AI algorithms curate personalized entertainment recommendations, from movies and music to books and news, ensuring you enjoy content tailored to your interests.',
  },
  
  
]

export function About() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore the Possibilities</h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {data.map((item,index) => (
            <li key={index} className="rounded-2xl bg-gray-800 px-8 py-10 hover:bg-gray-700">
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{item.title}</h3>
              <p className="text-sm leading-6 text-gray-400">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}






