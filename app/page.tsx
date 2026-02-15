import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturedProperties } from '@/components/featured-properties';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <ContactSection />
      <Footer />
    </main>
  );
}
