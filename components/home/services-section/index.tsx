import Link from 'next/link'
import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      id: 0,
      name: 'Web Development',
      description: 'Convert your graphics and design into a live website.',
      icon: '/icons/web-dev.png',
    },
    {
      id: 1,
      name: 'Responsive Website Design',
      description:
        'Having a responsive layout means that your website fluidly resizes for optimal viewing regardless of the screen size or device (e.g.Desktop, iPhone, iPad).',
      icon: '/icons/responsive-design1.png',
    },
    {
      id: 2,
      name: 'Dashboard Design',
      description:
        'Implement Dashboards and admin panels for ecommerce products management, clinic management among other types of management systems',
      icon: '/icons/responsive-design1.png',
    },
  ]

  return (
    <div className="section bg-gray-100 dark:bg-dark">
      <div className="container py-10">
        <h1 className="mb-2 select-none text-center text-xl font-bold uppercase opacity-50">
          Services
        </h1>
        <h2 className="text-center text-3xl font-bold capitalize text-dim-dark dark:text-white">
          What I offer
        </h2>

        <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex cursor-pointer  flex-col gap-6 rounded-md bg-white p-6 pb-6 transition-all duration-100 ease-in-out hover:bg-primary hover:text-white"
            >
              <div className="h-16 w-16 rounded-lg">
                <img src={service.icon} alt="" className="w-full" />
              </div>

              <h4 className="text-lg font-bold">{service.name}</h4>
              <p>{service.description}</p>

              <Link href="#">
                <a className="bg-primary text-white group-hover:bg-white group-hover:text-primary text-center cursor-pointer py-2 rounded-lg text-lg">
                  Learn More
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
