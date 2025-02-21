import { HeroProps } from '@/types';

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {data.map((hero, index) => {
          // Debug log for each hero item
          console.log(`Hero item ${index}:`, hero);

          return (
            <div key={index} className="group cursor-pointer text-center md:text-left">
              <h5 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                {hero.title}
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-md text-gray-600">{hero.subtitle}</p>
                <p className="text-md text-gray-600">{hero.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
