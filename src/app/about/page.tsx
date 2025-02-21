import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAboutPage } from '@/lib/api';

export default async function About() {
  const aboutdata = await getAboutPage();
  
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            {aboutdata.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-xl text-gray-600">
              {aboutdata.description}
            </div>
            <div>
              {aboutdata.image?.url? (
                <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${aboutdata.image.url}`} alt="About Image" className="w-full h-auto rounded-lg shadow-md" />
              ) : (
                <p className="text-gray-500">No image available</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
