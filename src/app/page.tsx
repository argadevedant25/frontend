/*import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Footer from '@/components/Footer';
import { getHomepage } from '@/lib/api';

export default async function Home() {
  const data = await getHomepage();
  
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero data={data.hero} />
      <Works data={data.works} />
      <Services data={data.services} />
      <Footer />
    </main>http://localhost:1337/uploads/image2_e815117247.png
  );
}*/
// src/app/page.tsx
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Footer from '@/components/Footer';
import { getHomepage } from '@/lib/api';

export default async function Home() {
  try {
    const data = await getHomepage();
    console.log('Homepage data received:', JSON.stringify(data, null, 2));

    if (!data) {
      return (
        <main className="min-h-screen bg-white">
          <Navigation />
          <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl">Error loading content</h1>
            </div>
          </div>
          <Footer />
        </main>
      );
    }

    // Validate data structure
    if (!data.hero || !data.works || !data.services) {
      console.error('Invalid data structure:', data);
    }

    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        {Array.isArray(data?.hero) && data.hero.length > 0 ? (
          <Hero data={data.hero} />
        ) : (
          <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl">Hero section not available</h1>
            </div>
          </div>
        )},

        {Array.isArray(data?.works) && data.works.length > 0 ? (
          <Works data={data.works} />
        ) : (
          <div className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl">Works section not available</h2>
            </div>
          </div>
        )},

        {Array.isArray(data?.services) && data.services.length > 0 ? (
          <Services data={data.services} />
        ) : (
          <div className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl">Services section not available</h2>
            </div>
          </div>
        )}
        <Footer />
      </main>
    );
  } catch (error) {
    console.error('Error in Home page:', error);
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl">Something went wrong</h1>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}