import Image from 'next/image';
import { WorksProps } from '@/types';

export default function Works({ data }: WorksProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.map((work, index) => {
            // Debug log for each work item
            console.log(`Work item ${index}:`, work);
            
            // Check if we have a valid image URL
            const imageUrl = work.image?.url;
            if (!imageUrl) {
              console.log(`Missing image URL for work item ${index}`);
            }

            return (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  {imageUrl ? (
                    <Image
                      src={`${imageUrl}`}
                      alt={work.title}
                      width={800}
                      height={600}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Image not available</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{work.title}</h3>
                    <p className="text-gray-600">{work.category}</p>
                  </div>
                  <span className="text-gray-600">{work.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}