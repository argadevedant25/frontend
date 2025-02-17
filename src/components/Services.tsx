import { ArrowRight } from 'lucide-react';
import { ServicesProps } from '@/types';

export default function Services({ data }: ServicesProps) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-black group-hover:translate-x-2 transition-transform">
                Learn more
                <ArrowRight className="ml-2" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
