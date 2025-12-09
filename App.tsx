import { useState } from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Description from './components/Description';
import ProductPreview from './components/ProductPreview';
import Benefits from './components/Benefits';
import TargetAudience from './components/TargetAudience';
import SocialProofBanner from './components/SocialProofBanner';
import Testimonials from './components/Testimonials';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PainPoints from './components/PainPoints';
import SalesNotification from './components/SalesNotification';

// Main Application Component - Production Ready
function App() {
  const [salesCount, setSalesCount] = useState(1243);

  const handleSale = (isComplete: boolean) => {
    if (isComplete) {
      setSalesCount(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans text-gray-900">
      <TopBar count={salesCount} />
      <Hero />
      <Description />
      <ProductPreview />
      <Benefits />
      <TargetAudience />
      <Testimonials />
      <Bonuses />
      <PainPoints />
      <SocialProofBanner />
      <Pricing count={salesCount} />
      <Guarantee />
      <FAQ />
      <Contact />
      <Footer />
      <SalesNotification onSale={handleSale} />
    </div>
  );
}

export default App;