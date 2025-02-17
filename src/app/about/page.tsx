import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAboutPage } from '@/lib/api';

export default async function About() {
  const data = await getAboutPage();
  
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            {data.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-xl text-gray-600">
              {data.description}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
