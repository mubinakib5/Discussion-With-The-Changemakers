import { Suspense } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Timeline from '../components/sections/Timeline';
import Participate from '../components/sections/Participate';
import Sponsors from '../components/sections/Sponsors';
import Team from '../components/sections/Team';
import Gallery from '../components/sections/Gallery';
import News from '../components/sections/News';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export const metadata = {
  title: 'Home',
  description: 'Discussion with the Changemakers is a youth-driven platform empowering Chattogram\'s youth to collaborate with city leaders on urban challenges.',
  keywords: 'DWC, Changemakers, youth empowerment, urban development, Chattogram, city leaders, innovation, collaboration',
};

export default function HomePage() {
  return (
    <>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <About />
          <Timeline />
          <Participate />
          <Sponsors />
          <Team />
          <Gallery />
          <News />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Discussion with the Changemakers Chapter 02',
            startDate: '2025-07-01',
            endDate: '2025-07-17',
            location: {
              '@type': 'Place',
              name: 'Hotel Agrabad',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chattogram',
                addressRegion: 'Chattogram',
                addressCountry: 'Bangladesh'
              }
            },
            image: '/images/dwc-event.jpg',
            description: 'Discussion with the Changemakers Chapter 02 is a youth-driven platform that empowers young people to address real-world urban challenges through innovation, dialogue, and collaboration with city leaders.',
            organizer: {
              '@type': 'Organization',
              name: 'Decor\'s Digital',
              url: 'https://discussionwiththechangemakers.com'
            }
          })
        }}
      />
    </>
  );
}
