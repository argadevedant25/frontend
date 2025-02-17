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
    </main>
  );
}*/
// src/app/page.tsx
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Footer from '@/components/Footer';
import { getHomepage } from '@/lib/api';
//import { getAboutPage } from '@/lib/api';

export default async function Home() {
  const data = await getHomepage();
  
  if (!data) {
    // You might want to show an error state or loading state
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl">Loading...</h1>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {data.hero && <Hero data={data.hero} />}
      {data.works && data.works.length > 0 && <Works data={data.works} />}
      {data.services && data.services.length > 0 && <Services data={data.services} />}
      <Footer />
    </main>
  );
}
/*
export default async function About() {
  const data = await getAboutPage();
  
  if (!data) {
    // You might want to show an error state or loading state
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl">Loading...</h1>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero data={data} />
      <Footer />
    </main>
  );
}*/