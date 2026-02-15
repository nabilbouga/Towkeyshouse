import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .gallery-image {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-image:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.3);
        }
      `}</style>
      <Header />

      {/* Page Header */}
      <div className="pt-32 pb-16 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-balance animate-fadeInUp">About Twokeys Homes</h1>
          <p className="text-lg opacity-90 animate-fadeInUp" style={{animationDelay: '0.2s'}}>Luxury real estate expertise in Spain's most exclusive locations</p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-balance animate-slideInLeft">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              Twokeys Homes was founded with a mission to connect discerning investors and homeowners with Spain's most
              exceptional luxury properties. Our name represents the keys to two things: the keys to your dream home and
              the keys to successful real estate investment in Spain.
            </p>
            <p className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              With over a decade of experience in the luxury real estate market, our team has cultivated deep relationships
              with developers, architects, and local communities across Spain. We understand that buying property in Spain
              is not just a financial decision—it's a lifestyle choice.
            </p>
            <p className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              Our portfolio spans from the sun-drenched beaches of Costa del Sol to the vibrant urban centers of Barcelona
              and Madrid, and the exclusive island communities of the Balearics. We specialize in helping Northern European
              and North African investors find the perfect properties that meet their unique needs and aspirations.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center text-balance animate-slideInLeft">Our Luxury Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-scaleIn" style={{animationDelay: '0.1s'}}>
              <div className="relative h-64 rounded-lg overflow-hidden gallery-image shadow-lg">
                <Image
                  src="/apartment-1.jpg"
                  alt="Luxury modern apartment with sea view"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-foreground font-semibold text-center">Modern Coastal Living</p>
            </div>
            <div className="animate-scaleIn" style={{animationDelay: '0.2s'}}>
              <div className="relative h-64 rounded-lg overflow-hidden gallery-image shadow-lg">
                <Image
                  src="/apartment-2.jpg"
                  alt="Luxury penthouse bedroom with ocean view"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-foreground font-semibold text-center">Penthouse Bedrooms</p>
            </div>
            <div className="animate-scaleIn" style={{animationDelay: '0.3s'}}>
              <div className="relative h-64 rounded-lg overflow-hidden gallery-image shadow-lg">
                <Image
                  src="/apartment-3.jpg"
                  alt="Luxury apartment kitchen with marble and gold"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-foreground font-semibold text-center">Chef's Kitchens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center text-balance animate-slideInLeft">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fadeInUp p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors" style={{animationDelay: '0.1s'}}>
              <Award className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground">We deliver exceptional service and properties in every interaction</p>
            </div>
            <div className="text-center animate-fadeInUp p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors" style={{animationDelay: '0.2s'}}>
              <Users className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Trust</h3>
              <p className="text-muted-foreground">Your trust is our greatest asset. We act with integrity always</p>
            </div>
            <div className="text-center animate-fadeInUp p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors" style={{animationDelay: '0.3s'}}>
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Reach</h3>
              <p className="text-muted-foreground">We serve international clients with local market expertise</p>
            </div>
            <div className="text-center animate-fadeInUp p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors" style={{animationDelay: '0.4s'}}>
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">We stay ahead of market trends and invest in new technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-card border border-border rounded-lg animate-scaleIn hover:border-primary hover:shadow-lg transition-all" style={{animationDelay: '0.1s'}}>
              <p className="text-5xl font-bold text-primary mb-2">500+</p>
              <p className="text-lg text-foreground">Properties Sold</p>
            </div>
            <div className="text-center p-8 bg-card border border-border rounded-lg animate-scaleIn hover:border-primary hover:shadow-lg transition-all" style={{animationDelay: '0.2s'}}>
              <p className="text-5xl font-bold text-primary mb-2">1000+</p>
              <p className="text-lg text-foreground">Happy Clients</p>
            </div>
            <div className="text-center p-8 bg-card border border-border rounded-lg animate-scaleIn hover:border-primary hover:shadow-lg transition-all" style={{animationDelay: '0.3s'}}>
              <p className="text-5xl font-bold text-primary mb-2">15+</p>
              <p className="text-lg text-foreground">Years Experience</p>
            </div>
            <div className="text-center p-8 bg-card border border-border rounded-lg animate-scaleIn hover:border-primary hover:shadow-lg transition-all" style={{animationDelay: '0.4s'}}>
              <p className="text-5xl font-bold text-primary mb-2">€1B+</p>
              <p className="text-lg text-foreground">Portfolio Value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Image */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-96 rounded-lg overflow-hidden gallery-image shadow-xl animate-slideInRight">
            <Image
              src="/beach-lifestyle.jpg"
              alt="Beautiful Spanish Mediterranean beach lifestyle"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-balance animate-slideInRight">Our Philosophy</h2>
          <div className="space-y-6 text-lg">
            <p className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              At Twokeys Homes, we believe that finding the right property goes beyond square footage and location. 
              It's about discovering a place where you can build memories, enjoy the Spanish lifestyle, and make a sound 
              investment for the future.
            </p>
            <p className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Every client is unique, which is why we take a personalized approach to matching you with properties. 
              Whether you're looking for a coastal retreat, an urban apartment, or a rural estate, our team will guide you 
              through every step of the process—from initial consultation to closing and beyond.
            </p>
            <p className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              We pride ourselves on transparency, expertise, and uncompromising commitment to our clients' success. 
              Your satisfaction is our success, and we're here to make your Spanish real estate dreams a reality.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 animate-slideInLeft">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            Ready to explore luxury properties in Spain? Contact our team today.
          </p>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold animate-scaleIn"
            style={{animationDelay: '0.2s'}}
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
