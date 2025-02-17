import { HeroProps } from '@/types';

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          {data.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-xl text-gray-600">
            {data.subtitle}
          </p>
          <p className="text-xl text-gray-600">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}